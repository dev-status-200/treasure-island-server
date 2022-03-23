const express = require("express");
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
var morgan = require('morgan');

app.use(morgan('tiny'));

app.use(cors());
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));
app.use(bodyParser.json({limit: '100mb', extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.json('Welcome to Mechanic App Node Server');
    }
);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => { console.log(`Server Running on port ${PORT}`) });