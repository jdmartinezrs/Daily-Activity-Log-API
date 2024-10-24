const fs = require('fs');
const ConnectToDatabase = require('./infraestructure/database/mongodb');
const createServer = require('./infraestructure/server/server');
require('dotenv').config({ path: '../.env' });

const startApp = async () => {
    let connectToDatabase = new ConnectToDatabase();
    await connectToDatabase.open();

    const app = createServer();

    app.listen({ port: process.env.EXPRESS_PORT, host: process.env.EXPRESS_HOST }, () => {
        console.log(`http://${process.env.EXPRESS_HOST}:${process.env.EXPRESS_PORT}`);
    });
};

startApp();
