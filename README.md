Adventure
==

Adventure is a customizable advent calendar writen in Ruby (Sinatra) and Javascript (Vue.js)

# Setup

First of all you need to download the source code:

```bash
git clone git@github.com:vincent-pochet/adventure.git
```

## With Docker and Docker Compose

- **Requirements**:
  - [Docker](https://docs.docker.com/engine/install/)
  - [Docker Compose](https://docs.docker.com/compose/install/)


Create `.env` file at the root of the project:
```bash
POSTGRES_DEV_HOST=postgres
POSTGRES_DEV_USERNAME=postgres
POSTGRES_DEV_PASSWORD=postgres

SESSION_SECRET=

ADMIN_PASSWORD=
USER_PASSWORD=
```

Run the installation script:
```bash
bin/setup.sh
```

Start the system:
```bash
docker-compose up -d
```

## Directly on your system / server

- **Requirements**:
  - [Postgres 10 or higher](https://www.postgresql.org/download/)
  - [Ruby 2.6.6](https://www.ruby-lang.org/en/downloads/)
  - [Bundler](https://bundler.io/)

Install the dependencies:
```bash
bundle install
```

Start the server:
```bash
bundle exec puma -C config/puma.rb
```

## Production environment

Make sure to define the following environment variables:
- RACK_ENV=production
- POSTGRES_URL
- ADMIN_PASSWORD
- USER_PASSWORD
- SESSION_SECRET

### Session secret

The session secret is used to secure the user cookie.

To generate a secret run the following command:
```bash
# With docker compose
docker-compose exec adventure bundle exec rake secret
=> 447777741a422417c2535599a90c57fcd6d6ac5941907b0f312f312e27f9161bb77d61e44be3150e3fa7b8dd48ac6c8e0bf9ddffc8b748ef54ff2a64832aaaac

# With local env
bundle exec rake secret
=> 447777741a422417c2535599a90c57fcd6d6ac5941907b0f312f312e27f9161bb77d61e44be3150e3fa7b8dd48ac6c8e0bf9ddffc8b748ef54ff2a64832aaaac

```

# Web interface

Open http://localhost:3000 in your browser.

# Contributors

- @vincent-pochet

Contributions are welcomed :)

# License

MIT License. See the included MIT-LICENSE file.
