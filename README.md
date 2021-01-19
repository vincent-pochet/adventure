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
  - Postgres 10.2 or higher
  - Ruby 2.6.6
  - Bundler

Install the dependencies:
```bash
bundle install
```

Start the server:
```bash
bundle exec puma -C config/puma.rb
```

# Contributors

- @vincent-pochet

Contributions are welcomed :)

# License

MIT License. See the included MIT-LICENSE file.
