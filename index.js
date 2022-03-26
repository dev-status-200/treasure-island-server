const express = require("express");
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
var morgan = require('morgan');
const db = require("./models");

const verify = require('./functions/tokenVerification');

const loginRoutes = require('./routes/login');
const userRoutes = require('./routes/users');

app.use(morgan('tiny'));

app.use(cors());
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));
app.use(bodyParser.json({limit: '100mb', extended: true}));
app.use(express.json());
db.sequelize.sync();

app.get("/", (req, res) => { res.json('Welcome to Mechanic App Node Server') });

app.get("/getUser", verify, (req, res) => { res.json({isLoggedIn:true, username:req.body.username}) });

app.post("/login", loginRoutes);

app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => { console.log(`Server Running on port ${PORT}`) });