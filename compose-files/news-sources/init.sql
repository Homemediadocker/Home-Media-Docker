-- Create database tables if they do not exist
CREATE TABLE IF NOT EXISTS sources (
  "id" VARCHAR(255) PRIMARY KEY,
  "owner" VARCHAR(255) NOT NULL,
  "repo" VARCHAR(255) NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "enabled" BOOLEAN NOT NULL DEFAULT TRUE,
  "category" VARCHAR(255) NOT NULL,
  "tagFilter" VARCHAR(255),
  "feedUrl" VARCHAR(500)
);

CREATE TABLE IF NOT EXISTS saved_articles (
  "id" VARCHAR(255) PRIMARY KEY,
  "sourceId" VARCHAR(255) NOT NULL,
  "sourceName" VARCHAR(255) NOT NULL,
  "owner" VARCHAR(255) NOT NULL,
  "repo" VARCHAR(255) NOT NULL,
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "url" TEXT NOT NULL,
  "image" TEXT NOT NULL,
  "publishedAt" VARCHAR(255) NOT NULL,
  "tagName" VARCHAR(255) NOT NULL,
  "category" VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS cache (
  "key" VARCHAR(255) PRIMARY KEY,
  "timestamp" BIGINT NOT NULL,
  "articles" JSONB NOT NULL
);

CREATE TABLE IF NOT EXISTS settings (
  "key" VARCHAR(255) PRIMARY KEY,
  "value" TEXT NOT NULL
);

-- Seed default sources
INSERT INTO sources ("id", "owner", "repo", "name", "enabled", "category", "tagFilter", "feedUrl") VALUES
('node', 'nodejs', 'node', 'Node.js', true, 'Runtime', null, 'https://nodejs.org/en/feed/releases.xml'),
('npm', 'npm', 'cli', 'npm', true, 'Tooling', '^v\d+', null),
('lit', 'lit', 'lit', 'Lit', true, 'Framework', null, 'https://lit.dev/blog/atom.xml'),
('angular', 'angular', 'angular', 'Angular', true, 'Framework', null, 'https://blog.angular.dev/feed'),
('react', 'facebook', 'react', 'React', true, 'Framework', null, 'https://react.dev/rss.xml'),
('vue', 'vuejs', 'core', 'Vue', true, 'Framework', null, 'https://blog.vuejs.org/feed.xml'),
('vite', 'vitejs', 'vite', 'Vite', true, 'Tooling', null, 'https://vite.dev/blog.rss'),
('oxc', 'oxc-project', 'oxc', 'Oxc', true, 'Tooling', null, null),
('biome', 'biomejs', 'biome', 'Biome', true, 'Tooling', null, 'https://biomejs.dev/blog/feed.xml'),
('nextjs', 'vercel', 'next.js', 'Next.js', true, 'Framework', null, 'https://nextjs.org/feed.xml'),
('yarn', 'yarnpkg', 'berry', 'Yarn', true, 'Tooling', null, null),
('bun', 'oven-sh', 'bun', 'Bun', true, 'Runtime', null, 'https://bun.sh/rss.xml'),
('deno', 'denoland', 'deno', 'Deno', true, 'Runtime', null, 'https://deno.com/feed'),
('typescript', 'microsoft', 'TypeScript', 'TypeScript', true, 'Language', null, null),
('svelte', 'sveltejs', 'svelte', 'Svelte', true, 'Framework', null, 'https://svelte.dev/blog/rss.xml'),
('tailwind', 'tailwindlabs', 'tailwindcss', 'Tailwind CSS', true, 'Tooling', null, 'https://tailwindcss.com/feeds/feed.xml'),
('github-changelog', 'github', 'changelog', 'GitHub Changelog', true, 'Tooling', null, 'https://github.blog/changelog/feed/')
ON CONFLICT (id) DO NOTHING;
