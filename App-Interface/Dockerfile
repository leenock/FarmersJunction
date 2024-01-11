FROM node:18-alpine
WORKDIR /app

# Copy package.json file
COPY package.json .

# Install all our packages

RUN npm install

# Copy all of our remaining files
COPY . .

EXPOSE 3000

CMD ["node", "start"]