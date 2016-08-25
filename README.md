# node-express-starter

Initial configuration for a node-express project.

## Setup
```shell
 # Rename config.json.example to config.json and add necessary configurations

 # Install dependencies
 npm install
 
 # Run server with nodemon
 npm run dev
 
 # Build and run server
 npm start
 
 default port: 4444
 
 # Alternatively, set environment variable PORT to change the port number.
 PORT=8080 npm run dev
 
 PORT=8080 npm start
 
```

## Migrations
```shell
# Install knex globally 
npm install knex -g

# Run migration
cd src
knex migrate:latest

# Rollback
knex migrate: rollback

# Seeds
knex seed:run
```

 open http://localhost:4444 in the browser
 sample resource: http://localhost:4444/users            
