#!/bin/bash

# Name of the Docker image and container
IMAGE_NAME="book-management-expressjs"

# Handle the input flags
case $1 in
  up)
    echo "Starting the Docker container..."
    docker run -d -p 3000:3000 --name $IMAGE_NAME $IMAGE_NAME
    ;;

  "up --build")
    echo "Building and starting the Docker container..."
    docker build --no-cache -t $IMAGE_NAME .
    docker run -d -p 3000:3000 --name $IMAGE_NAME $IMAGE_NAME
    ;;

  down)
    echo "Stopping and removing the Docker container and image..."
    docker stop $IMAGE_NAME || true
    docker rm $IMAGE_NAME || true
    ;;

  *)
    echo "Usage: $0 {up|up --build|down}"
    exit 1
    ;;
esac

# Check container status
if [[ "$(docker ps -q -f name=$IMAGE_NAME)" ]]; then
  echo "Docker container is running at http://localhost:3000"
else
  echo "Failed to start the Docker container."
fi
