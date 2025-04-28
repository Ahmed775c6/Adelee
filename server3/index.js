const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const app = express();


app.use(cors());
app.use(express.json());
dotenv.config();
app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})