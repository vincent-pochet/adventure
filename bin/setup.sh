# Create volumes
docker volume create --name=adventure_bundle
docker volume create --name=adventure_pg
docker volume create --name=adventure_data

# Create base image
docker-compose build

# Start the containers
docker-compose up -d

# Create the database
docker-compose exec adventure bundle exec rake db:setup
