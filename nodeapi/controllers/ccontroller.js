'use strict';


var mongoose = require('mongoose'),


citem = mongoose.model('Cart');




exports.list_all_citems = function(req, res) {
  citem.find({uuid:req.params.uuid}, function(err, citem) {
    if (err)
      res.send(err);
    res.json(citem);
  });
};




exports.create_a_citem = function(req, res) {
  var new_citem = new citem(req.body);
  new_citem.save(function(err, citem) {
    if (err)
      res.send(err);
    res.json(citem);
  });
};


exports.read_a_citem = function(req, res) {
  citem.find({pid:req.params.pid,uuid:req.params.uuid}, function(err, citem) {
    if (err)
      res.send(err);
    res.json(citem);
  });
};


exports.update_a_citem = function(req, res) {
  citem.findOneAndUpdate({pid: req.params.pid,uuid:req.params.uuid}, req.body, {new: true}, function(err, citem) {
    if (err)
      res.send(err);
    res.json(citem);
  });
};


exports.delete_a_citem = function(req, res) {


  citem.remove({
    _id: req.params.pid,
    uuid:req.params.uuid
  }, function(err, citem) {
    if (err)
      res.send(err);
    res.json({ message: 'cart item is removed' });
  });
};
