FROM node:14.3.0-stretch

RUN mkdir -p /home/node/myapp/node_modules && chown -R node:node /home/node/myapp

WORKDIR /home/node/myapp

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "node", "server.js" ]

