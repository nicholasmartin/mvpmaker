# Supabase Migrations

This directory contains SQL migration files for Supabase. These migrations help set up and maintain the database schema for the application.

## Current Migrations

- `20250419120600_create_profiles_table.sql`: Creates a profiles table that automatically stores user profile information when new users sign up.

## How to Apply Migrations

### Option 1: Using Supabase CLI (Recommended)

1. Install the Supabase CLI if you haven't already:
   ```bash
   npm install -g supabase
   ```

2. Link your project (you'll need your project reference ID and database password):
   ```bash
   supabase link --project-ref your-project-ref
   ```

3. Apply migrations:
   ```bash
   supabase db push
   ```

### Option 2: Manual Application

1. Log in to your Supabase dashboard
2. Go to the SQL Editor
3. Copy and paste the contents of each migration file
4. Execute the SQL statements

## Migration Naming Convention

Migrations follow the naming convention:
`YYYYMMDDHHMMSS_descriptive_name.sql`

This ensures migrations are applied in the correct order.

## Profiles Table Structure

The profiles table includes:

- `id`: UUID (references auth.users)
- `first_name`: User's first name
- `last_name`: User's last name
- `full_name`: Computed field combining first and last name
- `avatar_url`: URL to user's avatar image
- `website`: User's website URL
- `created_at`: Timestamp of profile creation
- `updated_at`: Timestamp of last profile update

## Automatic Profile Creation

A trigger automatically creates a profile entry whenever a new user signs up through Supabase Auth. The trigger extracts first name and last name from the user's metadata.
