FROM node:argon-slim

ARG WORKDIR=/usr/src/app/

RUN mkdir -p $WORKDIR
WORKDIR $WORKDIR

COPY package.json package-lock.json $WORKDIR

RUN npm install

COPY . $WORKDIR

CMD [ "npm", "start" ]