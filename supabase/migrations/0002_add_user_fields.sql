-- Add new columns to profiles table
alter table profiles
  add column if not exists first_name text,
  add column if not exists last_name text,
  add column if not exists phone_number text,
  add column if not exists ip_address text,
  add column if not exists location jsonb default '{"country": null, "city": null, "region": null}'::jsonb,
  add column if not exists marketing_preferences jsonb default '{"email": true, "sms": true, "product_updates": true}'::jsonb;

-- Update the handle_new_user function
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (
    id,
    marketing_preferences,
    ip_address,
    location
  )
  values (
    new.id,
    '{"email": true, "sms": true, "product_updates": true}'::jsonb,
    current_setting('request.headers')::json->>'x-real-ip',
    jsonb_build_object(
      'country', current_setting('request.headers')::json->>'cf-ipcountry',
      'city', null,
      'region', null
    )
  );

  insert into public.business_settings (id)
  values (new.id);

  return new;
end;
$$; 