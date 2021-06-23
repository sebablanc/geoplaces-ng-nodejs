FROM node:14-alpine3.11

WORKDIR /api
COPY . .
COPY package*.json ./
RUN npm install

CMD ["node", "app.js"]