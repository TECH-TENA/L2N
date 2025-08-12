# Use lightweight Node image
FROM node:20-alpine

WORKDIR /app

# Install dependencies (production mode)
COPY package*.json ./
RUN npm ci --only=production

# Copy app
COPY . .

EXPOSE 5000
CMD ["node", "src/server.js"]
