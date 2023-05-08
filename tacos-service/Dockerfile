FROM node:18.12.0-alpine

RUN mkdir /app
WORKDIR /app
COPY . .

RUN npm install

ENTRYPOINT ["npm", "start"]
