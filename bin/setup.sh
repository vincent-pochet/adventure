# Create volumes
docker volume create --name=adventure_bundle
docker volume create --name=adventure_pg
docker volume create --name=adventure_data

# Create base image
docker-compose build
