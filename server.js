var express = require('express');
var app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res)=>{
res.send('Hello world');
})

var server = app.listen(process.env.PORT, function () {
    console.log(`Server is running.. on port ${process.env.PORT}`);
});
