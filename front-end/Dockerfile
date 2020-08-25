FROM node:10 AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
ENV NODE_ENV production
RUN yarn build

FROM node:10
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "3000", "-s", "."]
