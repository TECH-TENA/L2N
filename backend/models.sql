CREATE TABLE IF NOT EXISTS users (
  id serial PRIMARY KEY,
  email text UNIQUE,
  name text,
  role text DEFAULT 'student',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS enrollments (
  id serial PRIMARY KEY,
  email text,
  amount integer,
  metadata jsonb,
  paid_at timestamptz
);

CREATE TABLE IF NOT EXISTS invites (
  id serial PRIMARY KEY,
  email text,
  meta jsonb,
  sent_at timestamptz
);
