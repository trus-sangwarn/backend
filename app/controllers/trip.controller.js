'use strict';

var Trip = require('mongoose').model('Trip');

exports.create = function(req, res, next) {
  var trip = new Trip(req.body);

  trip.save(function(err) {
    if(err) {
      return next(err);
    } else {
      res.json(trip);
    }
  });
};

exports.list = function(req, res, next) {
  Trip.find({}, {"_id": true, "name": true}, function(err, trips) {
    if(err) {
      return next(err);
    } else {
      res.json(trips);
    }
  });
};

exports.read = function(req, res) {
  res.json(req.trip);
}

exports.update = function(req, res, next) {
  Trip.findOneAndUpdate(
    {
      _id: req.trip.id
    },
    req.body,
    function(err, trip) {
      if(err) {
        return next(err);
      } else {
        res.json(trip);
      }
    }
  );
};

exports.delete = function(req, res, next) {
  req.trip.remove(function(err) {
    if(err) {
      return next(err);
    } else {
      res.json(req.trip);
    }
  });
};

exports.tripById = function(req, res, next, id) {
  Trip.findOne(
    {
      _id: id
    },
    function(err, trip) {
        if(err) {
          return next(err);
        } else {
          req.trip = trip;
          next();
        }
    }
  );
};
