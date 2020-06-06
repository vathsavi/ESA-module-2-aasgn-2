'use strict';
module.exports = function(app) {

var citem = require('../controllers/ccontroller');

// todoList Routes
app.route('/rest/v1/users/:uuid/cart')
.get(citem.list_all_citems)
.post(citem.create_a_citem);


app.route('/rest/v1/users/:uuid/cart/:pid')
.get(citem.read_a_citem)
.put(citem.update_a_citem)
.delete(citem.delete_a_citem);



 
};