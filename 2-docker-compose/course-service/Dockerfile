FROM node:13

#App Directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . . 

EXPOSE 8080 

CMD ["node", "index.js"]