# Steps

## install moch and chai

## Create App.test.js in src folder

## Install Babel

`npm i -D babel-register babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0`

## create .babelrc

``{"presets": ["react", "es2015", "stage-0"]}`

## Run Tests

`./node_modules/.bin/mocha --require babel-register ./src/App.test.js`
