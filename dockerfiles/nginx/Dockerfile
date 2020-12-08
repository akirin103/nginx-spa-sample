FROM node:12 AS builder

WORKDIR /usr/app

COPY frontend/package*.json ./

COPY frontend/webpack.config.js ./

RUN npm install

RUN mkdir src

COPY frontend/src/ src/

RUN npm run build

FROM nginx

WORKDIR /usr/share/nginx/html

COPY --from=builder /usr/app/dist ./

EXPOSE 80

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

CMD nginx -g "daemon off;"

