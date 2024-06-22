FROM node:18.19.1-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build 

#Ngix
FROM nginx:latest AS nginx
COPY --from=build /app/dist/rememba/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80