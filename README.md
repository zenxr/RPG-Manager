![alt text](./client/images/logo.jpg "Logo DnD")
# MERN Dungeons and Dragons
This application is currently *under development*. It is indended to help users by managing their character sheets, inventories, and more.
## Framework
This application uses the MERN fullstack (MongoDB, Express, React.js, and Node).
## Installation
* `mongodb` - You'll need to install mongodb and create a database
* `Node` - I recommend installing via [nvm](https://github.com/creationix/nvm). This will also install `npm`
* `Express` is installed via express-generator. After installing node run:

* Run `npm install`, to install the dependencies.

## Running
Utilizing npm, the project is set up to run in one of two ways:

* `npm start` starts the server for deployment purposes
* `npm run start-dev` starts the server in a reloadable state where the server is reloaded upon changes.

## Structure

```
.
├── README.md
├── bin
│   └── www
├── client
│   ├── bundle.js
│   ├── components    <-- react components
│   │   ├── App.js    <-- react config
│   │   └── ...
│   ├── index.js <-- react entry point
│   └── redux
│       └── ...
├── models    <- mongodb models here
│   └── ...
├── package.json    <-- project dependencies and config
├── server
│   ├── api
│   │   ├── character
│   │   │   ├── character.controller.js   <-- handles operations
│   │   │   └── index.js    <-- handles routes to controller
│   │   └── ...
│   ├── config <-- authentication, etc
│   │   └── ..
│   ├── routes
│   │   └── routes.js   <-- backend route handling, to API etc
│   └── server.js   <-- express config
└── webpack.config.js -- webpack configuration file
```
