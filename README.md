# Gender-Finder

**DEMO:** https://safe-garden-50516.herokuapp.com/

![](http://imgur.com/XylByyR.gif)

## Brief Description:

Create beautiful posts for your social networks. Transform your text (limit 100 characters) into images with colorful backgrounds.

## Dependencies and Versions:

**MongoDB:** 3.4.4

**Express:** 4.15.3

**Angular/CLI:** 1.0.3

**NodeJS:** 7.10.0

For more information about dependencies, please see the file package.json.

MEAN - Mongo, Express, Angular, Node

## Prerequisite

Config your mongodb database and set the environment variables in order to use them in the file config/database.js

## End-Points

```
/api/genres
/api/genres/ + name, eg: /api/genres/joao
```

## How To Run:

```
node server or NODE_ENV 'production' node server
```

NODE_ENV 'production' will use a different database configuration instead of the local one, you must set the environment variables.

**Note:** If you need the database which contains around 3k different names, mainly portuguese, please send me an email.