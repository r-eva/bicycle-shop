# Bicycle Shop Repository

This project uses React.js with NextJS for the frontend, Express.js for the backend, and TurboRepo for monorepo management, facilitating rapid development of a scalable web application with streamlined collaboration and efficient server-client interactions.

# How to run the application

## Install all dependency:

### `npm i`

## Install and Run your local mysql database server:

If you are using Apple Chip you need to download from here https://dev.mysql.com/downloads/mysql/. Please follow this amazing tutorial: https://www.youtube.com/watch?v=ODA3rWfmzg8.

Set your database username, password, and port on mysqlworkbench or via Terminal

Save your local environment variable and database credential in apps/api/.env. Please see the example on .env.development

## `mysql -u root -p`

### Create your first database schema

on root directory, run:

### `npm run prisma:init`

Your first database schema already created.
You may add your database record manually via mysql workbench or if you prefer to add your record in database via prisma studio you may run:

### `npm run prisma:studio`

You can see and edit your database record in [http://localhost:5555](http://localhost:5555)

## Run your backend and frontend application

### `npm run dev`

Runs the apps (backend and frontend) in the development mode.

Open [http://localhost:5173](http://localhost:5173) to view it in the browser. For API, you can access it in [http://localhost:8000/api](http://localhost:8000/api). The app will reload if you make edits.

### `npm run build`

Builds the app for production to the `dist` folder for each project.

### `npm run serve`
