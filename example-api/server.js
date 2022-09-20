const express = require("express");
const axios = require('axios');
const cors = require('cors');

const app = express();

app.listen(4000, "https://example-api.vercel.app", () => {
    console.log(`App listening on http://${config.HOST}:${config.PORT}`);
});

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

app.get('/train/:stopID', (req, res) => {
    const stpID = req.params.stopID;
    const currUrl = `http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=${key}&stpid=${stpID}&outputType=JSON`;
    axios.get(currUrl).then(
        (response) => {
            console.log(response);
            // need to send response.data, not just response
            // can just send data, then parse on the client side
            res.status(200).send({ data: response.data });
        }
        ).catch(err => {
            console.log(err);
        });
});