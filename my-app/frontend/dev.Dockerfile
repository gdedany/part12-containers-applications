FROM node

WORKDIR /usr/src/app

COPY . .

CMD ["npx", "serve", "."]
