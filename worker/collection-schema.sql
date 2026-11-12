CREATE TABLE IF NOT EXISTS collection_sessions (
  token TEXT PRIMARY KEY,
  owner TEXT NOT NULL,
  expires INTEGER NOT NULL,
  given_name TEXT
);

CREATE INDEX IF NOT EXISTS collection_sessions_expires ON collection_sessions (expires);

CREATE TABLE IF NOT EXISTS collection_items (
  owner TEXT NOT NULL,
  slug TEXT NOT NULL,
  value TEXT NOT NULL,
  PRIMARY KEY (owner, slug)
);
