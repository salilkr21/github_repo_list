const express= require('express');
require("dotenv").config();
const fetch = require("node-fetch");
const app = express();

app.get('/:username', (req,res)=>
{
    var user_name = req.params.username;
    var url = 'https://api.github.com/users/' + user_name+ '/repos';

    fetch(url).then(response => response.json()).then((data) =>
    {
    for(i=0;i<data.length;i++)
    {
        res.write((i+1)+" "+(data[i].name)+"\n");
        
    }
    res.send();
    }).catch(error => console.log(error));

});

app.listen(process.env.APP_PORT,'127.0.0.1',()=>
{
    console.log(`listening to port ${process.env.APP_PORT}`)
});
