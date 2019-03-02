FROM node:alpine as builder
COPY . /app
WORKDIR /app
RUN npm i
RUN npm run build
RUN rm -rf src
RUN rm -rf public
CMD ["node", "server.js"]