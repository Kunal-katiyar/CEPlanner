const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/message', (req, res) => {
    res.json({ message: "Hello World from Express!" });
});

app.post('/api/data', (req, res) => {
    const receivedData = req.body;
    console.log('Received data:', receivedData);
    res.status(200).json({status: 'success', receivedData});
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

