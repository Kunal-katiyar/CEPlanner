const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

process.loadEnvFile();

app.use(session({
  secret: process.env.SESSION_KEY, 
  resave: true,
  saveUninitialized: false,
  cookie: { 
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}));




app.use(cors({
    origin: 'http://localhost:5173/',
    credentials: true
}));

app.get('/api/message', (req, res) => {
    res.json({ message: "Hello World from Express!" });
});

app.post('/api/addCollege', (req, res) => {
    const receivedData = req.body;
    console.log('Received data:', receivedData.name);
    const sampleData = {
        id: 1,
        message: "Hello from the Node.js backend!",
        status: "Success"
    };

    if (!req.session.user) {
        req.session.user = { id: Math.floor(Math.random() * 10000), username: 'JohnDoe' };
    }

    if (!req.session.cart) {
        req.session.cart = [];
    }

    const cartItem = { college: receivedData.name };
    req.session.cart.push(cartItem);
    
    res.status(200).json(sampleData);
});

app.post('/api/getSessionColleges', (req, res) => {
    if (!req.session.user) {
        req.session.user = { id: Math.floor(Math.random() * 10000), username: 'JohnDoe' };
    }

    if (!req.session.cart) {
        req.session.cart = [];
    }

    const data = {
        "data": req.session.cart,
    }

    res.status(200).json(data);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

