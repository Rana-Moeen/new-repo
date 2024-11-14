# Stage 1: Build the application
#FROM node:18-alpine AS build

# Set the working directory
#WORKDIR /app

# Copy package.json and install dependencies
#COPY package*.json ./
#RUN npm install

# Copy the rest of the application code
#COPY . .

# Build the application (adjust based on your build process)
#RUN npm run build

# Stage 2: Set up Nginx to serve the application
#FROM nginx:alpine

# Copy the build files from the previous stage
#COPY --from=build /app/build /usr/share/nginx/html

# Copy the Nginx configuration file
#COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
#EXPOSE 80

# Start Nginx
#CMD ["nginx", "-g", "daemon off;"]





# Use the official Nginx image from Docker Hub

# FROM nginx:alpine

# # Copy your application files to the Nginx HTML directory
# COPY . /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Start Nginx when the container launches
# CMD ["nginx", "-g", "daemon off;"]



# Use the official Node.js image from Docker Hub
# Stage 1: Build the application
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]