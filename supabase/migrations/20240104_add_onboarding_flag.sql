-- Add onboarding_completed column to profiles
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS onboarding_completed BOOLEAN DEFAULT false;

-- Update existing profiles to have onboarding_completed = false by default
UPDATE public.profiles 
SET onboarding_completed = false 
WHERE email IS NOT NULL; 