-- Create business_profiles table
CREATE TABLE IF NOT EXISTS business_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  logo_url TEXT,
  rating DECIMAL(2,1),
  total_reviews INTEGER DEFAULT 0,
  google_review_url TEXT,
  website_url TEXT,
  menu_url TEXT,
  booking_url TEXT,
  instagram_url TEXT,
  theme_primary_color TEXT DEFAULT '#000000',
  theme_background_color TEXT DEFAULT '#ffffff',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create RLS policies
ALTER TABLE business_profiles ENABLE ROW LEVEL SECURITY;

-- Allow public read access to business_profiles
CREATE POLICY "Allow public read access" ON business_profiles
  FOR SELECT USING (true);

-- Allow authenticated users to create their own business profile
CREATE POLICY "Allow authenticated users to create their profile" ON business_profiles
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Allow users to update their own business profile
CREATE POLICY "Allow users to update their own profile" ON business_profiles
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create function to update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_business_profiles_updated_at
  BEFORE UPDATE ON business_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column(); 