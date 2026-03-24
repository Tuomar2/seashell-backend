FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./

# Copy source code
COPY . .

# Single RUN for everything
RUN npm install && \
    npx prisma generate && \
    npm run build && \
    addgroup -S appgroup && \
    adduser -S appuser -G appgroup && \
    chown -R appuser:appgroup /app

USER appuser

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]