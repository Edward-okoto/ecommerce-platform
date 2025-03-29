FROM node:14
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
EXPOSE 3000