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



var ProductSchema = new Schema({
    
    productId: {
      type: String,
      required: 'enter product-id'
    },
    category: {
        type: String,
        required: 'enter product category'
      },
    productName: {
    type: String,
    required: 'enter the name of the product'
    },
    productModel: {
        type: String,
        required: 'enter the product model'
      },
    price: {
    type: Number,
    required: 'enter the price of the model'
    },
    availableQuantity: {
        type: Number,
        required: 'enter the available quantity'
      },
    
  });


module.exports = mongoose.model('Products', ProductSchema);