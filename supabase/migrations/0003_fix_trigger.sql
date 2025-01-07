-- Drop existing trigger if it exists
drop trigger if exists on_auth_user_created on auth.users;

-- Recreate the handle_new_user function
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (
    id,
    first_name,
    last_name,
    phone_number,
    company_name,
    business_type,
    place_id,
    ip_address,
    location,
    marketing_preferences,
    created_at,
    updated_at
  )
  values (
    new.id,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    '{"country": null, "city": null, "region": null}'::jsonb,
    '{"email": true, "sms": true, "product_updates": true}'::jsonb,
    now(),
    now()
  );

  insert into public.business_settings (
    id,
    created_at,
    updated_at
  )
  values (
    new.id,
    now(),
    now()
  );

  return new;
end;
$$;

-- Recreate the trigger
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user(); 