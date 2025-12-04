{
  "name": "root",
  "version": "1.0.0",
  "private": true,
  "engines": {
    "node": "20 || 22"
  },
  "scripts": {
    "dev:config": "test -z \"$CI\" && make app-config.local.yaml || true",
    "dev:db": "docker compose up -d postgres",
    "dev:start": "concurrently \"yarn start\" \"yarn start-backend\"",
    "dev:stop": "docker compose down",
    "dev": "yarn dev:db && yarn dev:config && yarn dev:start",
    "start": "yarn workspace app start",
    "start-backend": "yarn workspace backend start",
    "build:backend": "yarn workspace backend build",
    "build:all": "backstage-cli repo build --all",
    "build-image": "yarn workspace backend build-image",
    "build-image:local": "yarn workspace backend build-image:local",
    "tsc": "tsc",
    "tsc:full": "tsc --skipLibCheck false --incremental false",
    "clean": "backstage-cli repo clean",
    "test": "backstage-cli repo test",
    "test:all": "backstage-cli repo test --coverage",
    "test:e2e": "playwright test",
    "fix": "backstage-cli repo fix",
    "lint": "backstage-cli repo lint --since origin/master",
    "lint:all": "backstage-cli repo lint",
    "lint:commit": "commitlint",
    "prettier:check": "prettier --check .",
    "new": "backstage-cli new --scope internal"
  },
  "workspaces": {
    "packages": [
      "packages/*",
      "plugins/*"
    ]
  },
  "devDependencies": {
    "@backstage/cli": "^0.34.4",
    "@backstage/e2e-test-utils": "^0.1.1",
    "@commitlint/config-conventional": "^20.0.0",
    "@playwright/test": "^1.55.1",
    "@types/node": "^24.10.0",
    "commitlint": "^20.1.0",
    "concurrently": "^9.2.1",
    "lerna": "^9.0.0",
    "node-gyp": "^11.4.2",
    "prettier": "^3.6.2",
    "typescript": "~5.9.3"
  },
  "resolutions": {
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@tanstack/react-virtual": "3.9.0",
    "dompurify": ">=3.2.4",
    "jsonpath-plus": "^10.3.0",
    "js-yaml": ">=4.1.1",
    "koa": ">=2.15.4",
    "markdown-it": ">=13.0.2",
    "tough-cookie": ">=4.1.3",
    "**/request/form-data": "^2.5.4"
  },
  "overrides": {
    "@tanstack/react-virtual": "3.9.0"
  },
  "prettier": "@backstage/cli/config/prettier",
  "lint-staged": {
    "*.{js,jsx,ts,tsx,mjs,cjs}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md}": [
      "prettier --write"
    ]
  },
  "packageManager": "yarn@1.22.22+sha512.a6b2f7906b721bba3d67d4aff083df04dad64c399707841b7acf00f6b133b7ac24255f2652fa22ae3534329dc6180534e98d17432037ff6fd140556e2bb3137e",
  "dependencies": {
    "@types/react": "^18",
    "dompurify": ">=3.2.7"
  }
}
