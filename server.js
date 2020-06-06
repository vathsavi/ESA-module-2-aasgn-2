var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),
  User = require('./nodeapi/model/umodel'), //created model loading here
  CartItem = require('./nodeapi/model/cmodel'), //created model loading here

  bodyParser = require('body-parser');
  
const string1="mongodb+srv://vathsavi:vathsavi@product-fk56h.mongodb.net/test?retryWrites=true&w=majority";// add your database string here
mongoose.connect(string1,{useNewUrlParser:true,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify:false})
.then(() => {
  console.log('MongoDB Connected…')
})
.catch(err => console.log(err))
// mongoose instance connection url connection
// mongoose.Promise = global.Promise;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var croutes = require('./nodeapi/routes/croute'); //importing route
var uroutes = require('./nodeapi/routes/uroute'); //importing route


croutes(app); //register the route
uroutes(app); //register the route




app.listen(port);


console.log('shopping cart RESTful API server started on: ' + port);