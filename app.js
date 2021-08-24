require("dotenv").config();
const app = require('./routes/github.js');


app.listen(process.env.APP_PORT, '127.0.0.1', () => {
    console.log(`listening to port ${process.env.APP_PORT}`)
});
