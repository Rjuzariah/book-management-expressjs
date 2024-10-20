# Express.js Book Management API

This project is an Express.js API for managing books in a library. It uses Docker and Docker Compose for containerization.

## Prerequisites

- Ensure you have Docker and Docker Compose installed on your machine. You can follow the installation instructions on the official Docker documentation:
  - [Docker Installation](https://docs.docker.com/get-docker/)
  - [Docker Compose Installation](https://docs.docker.com/compose/install/)

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone <your-repository-url>
   cd <your-repository-name>

2. **Build and Start the Application::**
    Use Docker Compose to build and start the application. This will start your Express.js API and the database service defined in the docker-compose.yml file

   ```bash
   docker-compose up --build

3. **Wait for the Application to Start:**
    The first time you run the application, it may take some time for the backend to initialize. Please be patient while the necessary migrations are run and the application starts.
   
4. **Access the API:**:
   Once the application is up and running, you can access the API at:

   Base URL: http://localhost:3000
   
5. Stopping the Application
   To stop the application and remove the containers, you can use:
   ```bash
   docker-compose down

    

