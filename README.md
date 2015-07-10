# UzysHapiSkeleton
[![Build Status](https://travis-ci.org/uzysjung/UzysHapiSkeleton.svg?branch=master)](https://travis-ci.org/uzysjung/UzysHapiSkeleton)
Hapi.js MVC pattern Template

## Introduction
**UzysHapiSkeleton** is a MVC pattern Skeleton

## Hapi plugin
 - TV (endpoint: /console/debug)
 - Hapi Swagger (endpoint: /documentation)
 - Hapi-auth-basic (ID: uzysjung / Password : uzysjung)
 - Lab
 - Joi , boom
 - good , good-console

 ## NPM Module
  - pm2
  - debug
  - async
  - request
  - mysql
  - underscore , underscore.string
  - bcrypt
  - handlebars
  - knex

 ## NPM Script
  - npm start : start app
  - npm stop : stop app
  - npm test : run test
  - npm coverage : run testcast and make report file (coverage.html)
  - npm dep : dependency check
  - npm outdated : check outdated npm module
  - npm jshint : run jshint

 ## Configuration file & Environment Variable.
  - NODE_ENV = development , production -> export NODE_ENV=development
  - PORT = 8080 (only apply this to production environment)
  - GOOD_CONSOLE = 'log,response,request,error' -> export GOOD_CONSOLE = 'request,error'

 ## Authentication
  - initial ID / Password : uzysjung/uzysjung