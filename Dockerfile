FROM node:latest
WORKDIR /usr/app/src
COPY package*.json ./
RUN npm install -g typescript
RUN npm install -g ts-node
RUN cd /usr/app/src && npm install
EXPOSE 3000
CMD npm install && npm run dev
