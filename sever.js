const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/', (req, res) => {
    res.send('Hello')
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`server is running in ${port}`));