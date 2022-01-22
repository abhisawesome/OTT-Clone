FROM node:alpine
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build
EXPOSE 3000
CMD ["npx","serve","-d","build","-p","3000"]