# Stage 1: Build the packages
FROM node:20-alpine AS builder
WORKDIR /app

# Copy monorepo manifests
COPY package*.json ./
COPY packages/library/package.json ./packages/library/
COPY packages/lab/package.json ./packages/lab/

# Install dependencies
RUN npm ci

# Copy codebase
COPY . .

# Build library first, then the laboratory app
RUN npm run build:lib
RUN npm run build:lab

# Stage 2: Serve static build with Nginx
FROM nginx:alpine
COPY --from=builder /app/packages/lab/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
