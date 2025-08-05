FROM node:18.0.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start", "--", "--host", "0.0.0.0"]