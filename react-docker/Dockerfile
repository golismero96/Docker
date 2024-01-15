FROM node:20.11.0

WORKDIR /app

COPY package*.json ./

USER root

RUN npm i

COPY . .

EXPOSE 5173

CMD npm run dev