FROM node:14-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn
COPY . ./
EXPOSE 4000
CMD [ "node", "index" ]
