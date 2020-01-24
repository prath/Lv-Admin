FROM node:lts-alpine

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package.json ./

# install project dependencies
RUN yarn install

RUN yarn build

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY ./dist .

RUN yarn install -g serve

CMD [ "serve", "./dist/" ]