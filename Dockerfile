    FROM node:16 AS development
    # Set working directory
    WORKDIR /app
    #
    COPY package.json /app/package.json
    COPY package-lock.json /app/package-lock.json
    # Same as npm install
    RUN npm install
    COPY . /app
    ENV PORT=3000
    CMD [ "npm", "start" ]
    FROM development AS build
    RUN npm run build