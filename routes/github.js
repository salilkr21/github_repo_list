const express = require('express');
require("dotenv").config();
var fetch = require("node-fetch");
const app = express();
app.get('/:username', (req, res) => {


    var user_name = req.params.username;
    var url = 'https://api.github.com/users/' + user_name + '/repos';

    fetch(url).then(async (response) => {

        var data = await response.json();

        for (var i = 0; i < data.length; i++) {

            res.write((i + 1) + " " + (data[i].name) + "\n");
        }

        res.send();

    }).catch(error => console.log(error));

});

module.exports = app;