var express = require('express'),
    bodyParser =require('body-parser'),
    morgan = require('morgan'),
    port = process.env.port || 8080;

var app = express();

//middleware
app.use(
  express.static(`public`),
  bodyParser.json(),
  morgan('dev')
)

app.listen(port, ()=>{
  console.log(`Server running on port: ${port}`)
})