-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    email TEXT NOT NULL,
    first_name TEXT,
    last_name TEXT,
    company_name TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create business_profiles table
CREATE TABLE IF NOT EXISTS public.business_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    website TEXT,
    google_place_id TEXT,
    google_api_key TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Enable insert for authenticated users only" 
    ON public.profiles FOR INSERT 
    WITH CHECK (auth.uid() = id);

CREATE POLICY "Enable update for users based on id" 
    ON public.profiles FOR UPDATE
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);

CREATE POLICY "Enable select for users based on id" 
    ON public.profiles FOR SELECT
    USING (auth.uid() = id);

-- Create policies for business_profiles
CREATE POLICY "Enable insert for authenticated users only" 
    ON public.business_profiles FOR INSERT 
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Enable update for users based on user_id" 
    ON public.business_profiles FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Enable select for users based on user_id" 
    ON public.business_profiles FOR SELECT
    USING (auth.uid() = user_id);

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON profiles
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_business_profiles_updated_at
    BEFORE UPDATE ON business_profiles
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column(); 