FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "frontend/src/index.js"]
EXPOSE 3000