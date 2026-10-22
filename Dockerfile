FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build || true

FROM node:18-alpine

WORKDIR /app

RUN npm install -g http-server

COPY --from=builder /app .

EXPOSE 8080

CMD ["http-server", "-p", "8080", "-c-1"]
