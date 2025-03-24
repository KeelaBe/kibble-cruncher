# Base image
FROM node:23.8-alpine3.20

# Set working directory
WORKDIR /app

# Install dependencies first
COPY package*.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Expose the development port
EXPOSE 3000

# Start the Next.js dev server
CMD ["npm", "run", "dev"]
