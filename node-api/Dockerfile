FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
# Copy the rest of the application code
COPY . .
EXPOSE 8080
CMD ["node", "index.js"]