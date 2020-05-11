FROM node:latest

# Creates host directory
RUN mkdir -p /app
WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm install

CMD [ "npm", "start" ]