const express = require('express'), http = require('http');
const morgan = require('morgan');  
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const songRouter = require('./routes/songRouter');

const hostname = 'localhost', port = process.env.PORT || 3333;
const app = express();

app.use(morgan('dev'))
   .use(bodyParser.urlencoded({extended: false}))
   .use(bodyParser.json())
   .use('/uploads', express.static('uploads'))
   .use('/songs', songRouter);

const uri = "mongodb+srv://mffdsp:felismino@cluster0.c3uku.mongodb.net/ClusterMateus?retryWrites=true&w=majority";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true } );

const server = http.createServer(app);


server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});