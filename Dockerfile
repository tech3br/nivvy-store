FROM node:18-alpine

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN yarn install

EXPOSE 3001

CMD ["yarn", "dev"]

