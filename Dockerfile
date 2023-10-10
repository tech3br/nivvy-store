FROM node:18-alpine

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN yarn install

EXPOSE 3000

CMD ["yarn", "dev"]

