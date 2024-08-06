FROM node:18.20.4

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY .env ./

RUN npm install

COPY . .

RUN npm run build

CMD ["node", "dist/server.js"]