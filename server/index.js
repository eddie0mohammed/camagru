

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = require('./router');
const config = require('./config/config');
const cors = require('cors');


const app = express();

// DB setup
mongoose.connect(config.mongoURI, 
    {   useCreateIndex: true,
        useNewUrlParser: true },
    () => {
    console.log('Connected to DB');
})


// app setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*' }));

router(app);

//server 
const PORT = process.env.PORT || 3090;

app.listen(PORT, () => {
    console.log('Server listening on port', PORT);
})




