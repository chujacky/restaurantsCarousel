const express = require('express');
const path = require('path');
const db = require('../db/index.js');
const app = express();
const PORT = 3002;


app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });
