'use strict';
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;


// var TaskSchema = new Schema({
//   name: {
//     type: String,
//     required: 'Kindly enter the name of the task'
//   },
//   Created_date: {
//     type: Date,
//     default: Date.now
//   },
//   status: {
//     type: [{
//       type: String,
//       enum: ['pending', 'ongoing', 'completed']
//     }],
//     default: ['pending']
//   }
// });

var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var uschema = new Schema({
    
    userId: {
      type: String,
      required: 'enter product-id'
    },
    name: {
        type: String,
        required: 'enter product category'
      },
    emailid: {
    type: String,
    required: 'enter the name of the product'
    },
    
  });

  // uschema.method('transform',function(){
  //   var obj=this.toObject()
  //   obj.productId=obj._id
  //   delete obj._id
  //   return obj
  // })




//module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = mongoose.model('users', uschema);