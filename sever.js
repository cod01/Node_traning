const express = require('express');
const dotenv = require('dotenv');

//Route files
const bootcamps = require('./routes/bootcamps');

dotenv.config({ path: './config/config.env' });

const app = express();


//Mount Routers
app.use('/api/v1/bootcamps', bootcamps);


const port = process.env.PORT || 5000;

app.listen(port, console.log(`server is running in ${port}`));

