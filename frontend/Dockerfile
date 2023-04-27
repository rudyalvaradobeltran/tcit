FROM node:16-alpine

WORKDIR /usr/src/app/frontend

COPY . ./

RUN npm install

EXPOSE 80/tcp

CMD ["npm", "start"]