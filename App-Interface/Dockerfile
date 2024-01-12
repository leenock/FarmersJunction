FROM node:18-alpine

WORKDIR /app
# Copy package.json file
COPY package*.json .
# Install all our packages
RUN npm install
# Copy all of our remaining files
COPY . .
# Start the app
CMD ["npm", "start"]

# Stage 2: Serve the React application using Nginx
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

# Copy the default nginx.conf provided by the docker image
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]