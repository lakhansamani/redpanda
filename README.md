# Red Panda Task
This repo contains code for redpanda task. It uses `create-react-app` by Facebook as a boilerplate, which includes `Jest` for testing.

## How to start project
* `git clone https://github.com/lakhansamani/redpanda.git`
* `cd redpanda`
* `npm install`
* To start project in development mode `npm start`
* To make production ready build `npm run build`
* To test `npm test`
    - This will open interactive mode, in order to check all test, press `a`

## Directory Structure
|-- .editorconfig
|-- .eslintrc.json
|-- .gitignore
|-- README.md
|-- package-lock.json
|-- package.json
|-- public
|   |-- favicon.ico
|   |-- index.html
|-- src
    |-- index.js
    |-- setupTests.js
    |-- __tests__
    |   |-- aboutus.test.js
    |   |-- action.test.js
    |   |-- app.test.js
    |   |-- home.test.js
    |   |-- index.test.js
    |   |-- login.test.js
    |   |-- reducer.test.js
    |-- actions
    |   |-- loginActions.js
    |-- api
    |   |-- login.js
    |-- components
    |   |-- App.js
    |   |-- partials
    |   |   |-- ContactUs
    |   |   |   |-- index.js
    |   |   |-- Logout
    |   |   |   |-- index.js
    |   |   |-- Profile
    |   |   |   |-- index.js
    |   |   |-- Team
    |   |       |-- index.js
    |   |-- views
    |       |-- AboutUs
    |       |   |-- index.js
    |       |-- Home
    |       |   |-- index.js
    |       |-- Login
    |       |   |-- Login.js
    |       |   |-- index.js
    |       |-- NotFound
    |           |-- index.js
    |-- db
    |   |-- user.js
    |-- imgs
    |   |-- home-bg.jpg
    |   |-- login-bg.jpg
    |   |-- logout.png
    |   |-- menu.png
    |   |-- team.jpg
    |-- lib
    |   |-- authLib.js
    |   |-- emailValidation.js
    |-- reducers
    |   |-- index.js
    |   |-- user.js
    |-- stores
    |   |-- configureStore.js
    |-- style
        |-- app.css
        |-- responsive.css
