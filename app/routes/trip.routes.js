'use strict';

module.exports = function(app) {
  var trip = require('../controllers/trip.controller');
  app.route('/trips')
        .post(trip.create)
        .get(trip.list);
  app.route('/trips/:id')
        .get(trip.read)
        .put(trip.update)
        .delete(trip.delete);
  app.param('id', trip.tripById);
};
