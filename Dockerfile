FROM node:20-alpine

LABEL org.opencontainers.image.source=https://github.com/deuspaul/l9dtcs

ARG NPM_TOKEN

ENV NPM_DOCKER_TOKEN=$NPM_TOKEN

WORKDIR /app

COPY . /app

RUN echo "//npm.pkg.github.com/:_authToken="'"'${NPM_DOCKER_TOKEN}'"' > /app/.npmrc

RUN npm i --yes

RUN rm -f /app/.npmrc

EXPOSE 3000

CMD ["npm", "start"]
