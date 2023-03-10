FROM node:14-alpine

WORKDIR /app

ADD package.json package-lock.json ./

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

RUN npm install

ADD .browserslistrc .prettierrc .eslintrc.js ./

CMD [ "npm", "run", "start" ]
