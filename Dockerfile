#ESTAGIO-1
FROM node:22-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

#ESTAGIO-2
FROM node:22-alpine

WORKDIR /usr/src/app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules

EXPOSE 3000

RUN addgroup -S node && adduser -S node -G node
RUN chown -R node:node /usr/src/app

USER node

CMD [ "node", "dist/main" ]

