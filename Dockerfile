FROM --platform=linux/amd64 node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# first param : local directory location / second param : directory location in docker container
EXPOSE 4000
CMD ["npm", "run", "start"]