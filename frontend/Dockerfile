# Start your image with a node base image
# syntax=docker/dockerfile:1
FROM node:14

ENV NODE_ENV=production

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ["package.json", "package-lock.json*", "./"]

# Install dependencies
RUN npm install --production

# Copy the entire project to the working directory
COPY . .

# Expose the port on which the React Vite app runs (default is 3000)
EXPOSE 3000

# Set the command to run the React Vite app
CMD ["npm", "run", "dev"]