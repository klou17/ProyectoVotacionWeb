# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=22.14

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV development


WORKDIR /usr/src/app

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage a bind mounts to package.json and package-lock.json to avoid having to copy them into
# into this layer.

# Copy the rest of the source files into the image.
COPY . .
RUN npm ci
# RUN npx expo install eslint-config-expo -- --save-dev

# Run the application as a root user.
USER root

# Expose the port that the application listens on.
EXPOSE 8081

# Run the application.
ENTRYPOINT ["npm", "run"]
CMD ["web"]
