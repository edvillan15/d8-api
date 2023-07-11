# Use the official Node.js 14 image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install Strapi dependencies
RUN npm install

# Copy the Strapi project files
COPY . .

# Build the Strapi application
RUN npm run build

# Expose the Strapi server port
EXPOSE 1337

# Start the Strapi application
CMD ["npm", "start"]
