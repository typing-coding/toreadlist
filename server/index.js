const express = require('express');

const server = express();
const port = 4000;

const router = express.Router();
router.get('/',(req, res) => {
    res.send('Hello World');
})

server.use(router);

server.listen(port, () => {
    console.log('api server is listening')
});