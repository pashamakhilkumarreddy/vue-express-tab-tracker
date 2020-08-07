FROM node:12.18.3-alpine3.12

RUN apt-get update && \
  apt-get -y install netcat && \
  apt-get clean

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# npm ci --only=production

COPY . .
RUN CHOWN -R node:node ./

USER node

EXPOSE 8080

CMD [ "npm", "start" ]
