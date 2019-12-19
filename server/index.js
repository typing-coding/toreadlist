const express = require('express');

const server = express();
const port = 4000;

const {router} = require('./router/router.js');

server.use(router);

server.listen(port, () => {
    console.log('api server is listening')
});