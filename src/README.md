# Zenodotus Source

## Pre-requisites

* docker
* node.js

## Running

```shell
docker-compose up
```

## Components

### webserver

A node.js based server that serves the browser content, and exposes the API that maps operations to the database.

The webserver is compiled with webpack.

### browser

Browser is the javascript/html/css that is deployed and executed in the client browser. Once built, it is bundled in the webserver and served to clients.

The browser project is compiled with webpack.

### database

The database is a PostgreSQL database hosted in a docker image that persists the data.

The database schema is managed through migrations. The migrations are executed as part of the webserver code.
