# Use official Node.js LTS image as base
FROM node:18

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Set environment variables (optional, can also use .env)
ENV PORT=5000

# Command to run the app
CMD ["node", "src/app.js"]
