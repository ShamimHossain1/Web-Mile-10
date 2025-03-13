const express = require('express');
const phones = require('./phones.json');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Worlddddddddddddd!')
});

app.get('/about', (req, res) => {
    res.send('About')
});

app.get('/phones', (req, res) => {
    res.send(phones)
});

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone)
});

app.listen(port, () => {
    console.log(`Phone server is running on ${port}`)
});