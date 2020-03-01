const express = require('express');
const cors = require('cors');

const PORT = 8080;
const HOST = '127.0.0.1';

//App
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send({
        "course": [
            "HTML",
            "CSS",
            "Docker",
            "OOP"
        ]
    });
});

app.listen(PORT);

console.log(`Running on port ${PORT}`);
