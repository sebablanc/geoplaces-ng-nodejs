FROM node:16-alpine3.11

WORKDIR /geoplaces-client
COPY . .
RUN npm install -g @angular/cli && npm install

CMD ["ng", "serve"]