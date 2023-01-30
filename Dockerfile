
# Base on offical Node.js Alpine image
FROM node:16-alpine as builder
# copy the package.json to install dependencies
COPY ./package*.json ./
# Install PM2 globally
RUN npm install -g pm2    
# Install the dependencies and make the folder
RUN npm install --production && mkdir /nextjs-ui && mv ./node_modules ./nextjs-ui
# Set working directory
WORKDIR /nextjs-ui
# Copy all files
COPY . .
# Build the project and copy the files
RUN npm run build
# Expose the listening port
EXPOSE 3000
# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER node
# Run npm start script with PM2 when container starts
CMD [ "pm2-runtime", "npm", "--", "start" ]
