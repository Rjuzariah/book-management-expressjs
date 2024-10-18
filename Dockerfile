# Dockerfile

# Use an official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

COPY .env .env

# Expose the port that the application will run on
EXPOSE 3000

# Start the app and run migrations
CMD ["npm", "run", "migrate-and-start"]

# Define the command to run your app
CMD ["npx", "ts-node", "index.ts"]
