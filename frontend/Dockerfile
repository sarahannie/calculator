# Start your image with a node base image
# syntax=docker/dockerfile:1

FROM node:18-alpine

ENV NODE_ENV=production

# The /app directory should act as the main application directory
WORKDIR /src

# Copy local directories to the current local directory of our docker image (/app)
COPY ["package.json", "package-lock.json*", "./"]

# Install node packages, build the app, and remove dependencies at the end
RUN npm install --production


COPY . .