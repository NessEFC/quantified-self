## Quantified Self

Team Members: Craig Ness and Erin Bassity

The app is a two-page, front-end application that tracks calories and stores food items.

Hosted on github pages at: https://somedayrainbows.github.io/quantified-self/

The backend application can be visited live at: https://quantified-self-be-bassiness.herokuapp.com/

To see more information regarding the available endpoints visit the github repo: https://github.com/somedayrainbows/quantified-self-be

To install/run locally:
Clone front-end AND back-end down:

1. clone front end
` git clone git@github.com:somedayrainbows/quantified-self.git`

2. clone back-end
` git clone git@github.com:somedayrainbows/quantified-self-be.git`
Set up the repo, start localhost: npm start

3. set up backend app
` cd quantified-self-be`
` npm install`
` knex migrate:latest`
` knex seed:run`
` npm start`

4. cd into front-end, install modules, start server
` cd quantified-self`
` npm install`
` npm start`

Open up on localhost:  http://localhost:8080/webpack-dev-server/
