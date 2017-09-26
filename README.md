# RedPanda ()
This repo contains code for Redpanda, a Single Page Application using react and redux with authentication. It uses `create-react-app` by Facebook as a boilerplate, which includes `Jest` for testing.

## How to start project
* `git clone https://github.com/lakhansamani/redpanda.git`
* `cd redpanda`
* `npm install`
* To start project in development mode `npm start`
* To make production ready build `npm run build`
* To test `npm test`
    - This will open interactive mode, in order to check all test, press `a`

## Directory Structure
```
|-- .editorconfig  //configuration for editor
|-- .eslintrc.json // linting rules
|-- .gitignore // files/folders to be ignored by git
|-- README.md // Instructions
|-- package.json // main entry file
|-- public // public path which is served
|   |-- favicon.ico
|   |-- index.html //page in which react is injected
|-- src // all react and redux code
    |-- index.js // main file which injects react app into dom
    |-- setupTests.js // mock storage used by jest
    |-- __tests__ // all test files
    |   |-- aboutus.test.js // about us component rendering test
    |   |-- action.test.js // redux actions test
    |   |-- app.test.js // main app rendering test
    |   |-- home.test.js // home page rendering test
    |   |-- index.test.js // index page rendering and store test
    |   |-- login.test.js // login component rendering test
    |   |-- reducer.test.js // redux reducers testing
    |-- actions // redux actions
    |   |-- loginActions.js // actions used for login
    |-- api // mock apis
    |   |-- login.js // api used for login
    |-- components // components used for rendering
    |   |-- App.js // main app container
    |   |-- partials // partial components used in another vies
    |   |-- views // components used as main views
    |-- db // mock db
    |   |-- user.js
    |-- imgs // images used for background and icons
    |-- lib // lib files
    |   |-- authLib.js // used to check user authentication
    |   |-- emailValidation.js // used for validating email
    |-- reducers // redux reducers
    |-- stores // redux store for configuring reducers and middlewares
    |-- style // stylesheets used for app
        |-- app.css // general and component specific css
        |-- responsive.css // css for all media queries
```
