const express = require("express");
const axios = require('axios');
const cors = require('cors');

const app = express();

app.listen(4000, "https://instructional-guide.vercel.app");

const corsOptions = {
    origin: "https://cta-react.vercel.app",
    optionsSuccessStatus:200
}

app.use(cors(corsOptions));
app.options("*", cors());

// creating a GET route
app.get('/express_backend', (req, res) => {
    res.status(200).send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/input/:msg', (req, res) => {
    const msg = req.params.msg;
    res.status(200).send({ data: `Your message: ${msg}`});
});