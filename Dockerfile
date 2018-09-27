FROM nginx:1.15.4-alpine

COPY dist /usr/share/nginx/html
COPY build/nginx.conf /etc/nginx/nginx.conf
