var express = require('express');
var router = express.Router();

router.get('/home', function(req, res) {
  res.render('pages/home', {
      title: 'Home',
      layout: 'layouts/appLayout',
  });
});

router.get('/hotels', function(req, res) {
  res.render('pages/hotels/hotelsList', {
      title: 'Hotels',
      layout: 'layouts/appLayout',
  });
});

router.get('/booking', function(req, res) {
  res.render('pages/booking', {
      title: 'Booking',
      layout: 'layouts/appLayout',
  });
});

router.get('/guests', function(req, res) {
  res.render('pages/guests', {
      title: 'Guests',
      layout: 'layouts/appLayout',
  });
});

module.exports = router;