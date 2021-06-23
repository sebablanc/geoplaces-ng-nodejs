FROM node:14-alpine3.11 AS build
WORKDIR /client
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /client/dist/geoplaces /usr/share/nginx/html