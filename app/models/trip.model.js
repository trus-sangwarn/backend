'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TripSchema = new Schema({
  name: String,
  price: Number,
  description: String
});

mongoose.model('Trip', TripSchema);
