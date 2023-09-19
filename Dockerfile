# base image
FROM node:14  as build-deps

 

# set working directory
WORKDIR /usr/src/app

 

 

# install and cache app dependencies
COPY package*.json /app/
# RUN npm install

 

COPY . .

 

RUN npm install
RUN npm run build
# build app
# CMD ["npm", "run","build-prod"]

 

# Stage 2 - the production environment
# Stage 2 - the production environment
# Stage 2 - the production environment
FROM nginx:1.21-alpine
COPY --from=build-deps /usr/src/app/dist/ /usr/share/nginx/html
COPY --from=build-deps /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

 

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]