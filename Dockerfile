FROM node:10
ENV NODE_ENV production
WORKDIR /home/node/app

COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 8090
CMD ["node", "server/server"] 