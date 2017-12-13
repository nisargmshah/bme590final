FROM node:latest
# COPY repository into the container
COPY . . 
# Install dependencies
RUN npm install
# Build the frontend into a production build
RUN npm run build
# Install a static server
RUN npm install -g serve
# Serve the frontend web application
CMD serve -s build
EXPOSE 5000
