FROM node:20

WORKDIR /usr/src/project

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
EXPOSE 3000
EXPOSE 5555

CMD ["bash", "-c", "npx prisma migrate dev && npm run dev"]
