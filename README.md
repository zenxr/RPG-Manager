![alt text](./client/images/logo.jpg "Logo DnD")
# MERN Dungeons and Dragons
This application is currently *under development*. It is indended to help users by managing their character sheets, inventories, and more.
## Framework
This application uses the MERN fullstack (MongoDB, Express, React.js, and Node).
## Installation
* `mongodb` - You'll need to install mongodb and create a database
* `Node` - I recommend installing via [nvm](https://github.com/creationix/nvm). This will also install `npm`
* `Express` is installed via express-generator. After installing node run:

   `npm install -g express-generator`
* `React` - Will we use the react-generator.

  `npm install -g create-react-app`
* Enter the directory and run `npm install` to install dependencies.

## Running
Utilizing npm, the project is set up to run in one of two ways:

* `npm start` starts the server for deployment purposes
* `npm run start-dev` starts the server in a reloadable state where the server is reloaded upon changes.


## Project Structure

```
.
├── bin
│   └── www
├── client ➜  client side code is here
│   ├── app
│   │   ├── character
│   │   │   └── character.ejs ➜ ejs files generate web pages
│   │   └── profile
│   │       ├── login.ejs
│   │       ├── profile.ejs
│   │       └── signup.ejs
│   ├── css
│   │   └── App.css
│   ├── images ➜ static images
│   │   └── logo.jpg
│   ├── index.ejs ➜ generates the '/' page
│   └── index.js
├── models ➜ mongoose character models
│   ├── character.js
│   └── user.js
├── package.json ➜ npm package's file
├── package-lock.json ➜ controls package versions
├── README.md ➜ this file
├── server ➜ server side code is all here
│   ├── config ➜ user authentication files
│   │   ├── database.js
│   │   └── passport.js
│   ├── routes
│   │   ├── character ➜ routed to for character interactions
│   │   │   ├── character.controller.js
│   │   │   └── index.js
│   │   └── routes.js ➜ determines routing
│   └── server.js ➜ configures express and connects to DB
└── webpack.config.js ➜ webpack configuration + bundling

```
