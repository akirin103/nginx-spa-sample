FROM node:12

WORKDIR /usr/app

COPY backend/package*.json ./

RUN npm install

RUN mkdir src

COPY backend/src/ src/

EXPOSE 8000

CMD [ "npm", "start" ]
