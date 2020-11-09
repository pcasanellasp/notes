FROM node:12.19.0-alpine3.12
RUN npm install -g nodemon

ENV APP_DIR /usr/src/app
ENV PORT 3000


WORKDIR ${APP_DIR}
ADD . ${APP_DIR}
RUN npm install

CMD [ "npm", "run", "server" ]