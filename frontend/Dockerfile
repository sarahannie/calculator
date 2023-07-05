FROM node 
# - Will create a node environment in the container
WORKDIR /app 
# - Will create a directory app and switch to that directory
COPY package.json . 
# - Copies package.json file to /app directory
RUN npm i 
# - Runs npm install to create node_modules for your app
COPY . . 
# - Copies the source code to /app directory
EXPOSE 5173 
# - Exposes the port to access the app from outside the container i.e from the browser
CMD ["npm", "run", "dev"] 
# - Executes npm run dev to start the server