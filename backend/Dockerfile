FROM node:16-alpine

WORKDIR /usr/src/app/backend

COPY . ./

RUN npm install

RUN npm run migrate

CMD ["npm", "run", "dev"]
