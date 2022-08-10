FROM strapi/base
LABEL org.opencontainers.image.source https://github.com/spaceflightnewsapi/spaceflightnewsapi

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

ENV NODE_ENV production

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]
