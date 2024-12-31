FROM node:20 AS build-stage 
WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN VITE_BACKEND_URL=/api npm run build


FROM node:20 AS test-stage
WORKDIR /usr/src/app

COPY --from=build-stage /usr/src/app /usr/src/app
RUN npm ci
RUN npm run lint
RUN npm run test

FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
