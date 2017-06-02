# Gender-Finder

**DEMO:** https://safe-garden-50516.herokuapp.com/

![](http://imgur.com/XylByyR.gif)

## Brief Description:

MEAN simple application to find the gender of a first name (limited to 25 characters).

## Dependencies and Versions:

**MongoDB:** 3.4.4

**Express:** 4.15.3

**Angular/CLI:** 1.0.3

**NodeJS:** 7.10.0

For more information about dependencies, please see the file package.json.

## Prerequisite

Configure your mongodb database and set the environment variables in order to use them in the file config/database.js

## API End-Points

```
/api/genres
/api/genres/ + name, eg: /api/genres/joao
```

## How To Run:

```
node server or NODE_ENV 'production' node server
```

NODE_ENV 'production' will use a different database configuration instead of the local one, you must set the environment variables.

**Note:** If you need the database which contains around 3k different names, mostly in portuguese, please send me an email.