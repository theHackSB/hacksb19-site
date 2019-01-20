const express = require('express');
const app = express();
const opn = require('opn');

const PORT =  process.env.PORT || 4000;

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
app.use(express.static(__dirname));
app.listen(PORT, () => console.log(`Server Running...`));
opn('http://localhost' + PORT);