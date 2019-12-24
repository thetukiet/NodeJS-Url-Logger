# Simple NodeJS REST API

Reference from author **Romuald Tuffreau** at https://github.com/romwaldtff

## Environment Requirements:

- [Git](https://git-scm.com/) if you want to clone this repository.
- [NodeJS](https://nodejs.org/en/) to run the application.
- [Npm](https://www.npmjs.com/) to install dependencies (see the full list below at "Dependencies").
- [Postman](https://www.getpostman.com/) to test the API.
- SQLite Plugin to review database file. 

## Dependencies (installed via `npm install`)

- [Body-parser](https://www.npmjs.com/package/body-parser), a Node.js body parsing middleware.
- [Ejs](https://www.npmjs.com/package/ejs) embedded JavaScript templates.
- [Express](https://www.npmjs.com/package/express), a fast and minimalist web framework for node.
- [Sqlite](https://www.npmjs.com/package/sqlite), a wrapper library that adds ES6 promises and SQL-based migrations API to [sqlite3](https://www.npmjs.com/package/sqlite3)*.
- [Bluebird](https://www.npmjs.com/package/bluebird) promise library.
- [Short-Hash](https://www.npmjs.com/package/short-hash) Generate short hash from string

## Run and Test :

1. Install this application (See Installation).
2. Check the configuration : `node config.js`
3. Start the server with : `node index.js`
4. Import the testing API collection : `node /test/test_collection.json`
5. Connect Postman to the API at : `http://localhost:[config-port]`