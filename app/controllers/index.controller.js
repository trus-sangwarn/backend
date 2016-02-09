'use strict';

exports.render = function(req, res) {
  res.render('index', {
    'title': 'TakeMeTour',
    'message': 'Welcome to my trips'
  })
};
