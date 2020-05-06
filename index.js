const express = require('express'),
http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRoutes');
const leaderRouter = require('./routes/leadersRoutes');
const promotion = require('./routes/promotions')

const hostname ='localhost';
const port = 3000;
const app =express();
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

app.use(bodyParser.json());
app.use('/dishes',dishRouter)
app.use('/leader',leaderRouter)
app.use('/promotion',promotion)

app.use((req,res,next)=>{
  res.statusCode=200;
  res.setHeader('content-text','text/html');
  res.end('<html><body><h1>this is from express server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port,hostname,()=>{
  console.log(`server running at http://${hostname}:${port}`);
});