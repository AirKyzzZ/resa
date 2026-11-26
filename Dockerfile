FROM node:26-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src/ ./src/
COPY public/ ./public/
USER node
EXPOSE 3000
CMD ["node", "src/server.js"]
