
var express = require('express');
var app = express();
var navbarRoutes = express.Router();

// Require Item model in our routes module
var Navbar = require('../model/Navbar');

// Defined get data(index or listing) route
navbarRoutes.route('/').get(function (req, res) {
  Navbar.find(function (err, navbars) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(navbars);
    }
  });
});

// Defined edit route
navbarRoutes.route('/:id').get(function (req, res) {
  var id = req.params.id;
  Navbar.findById(id, function (err, navbar) {
    res.json(navbar);
  });
});

// Defined store route
navbarRoutes.route('/add').post(function (req, res) {
  var navbar = new Navbar(req.body);  
  navbar.save()
    .then(item => {
      res.status(200).json({ 'navbar': 'Navbar added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});


//  Defined update route
navbarRoutes.route('/update/:id').post(function (req, res) {
  Navbar.findById(req.params.id, function (err, navbar) {
    if (!navbar)
      return next(new Error('Could not load Document'));
    else {
      navbar.title = req.body.title;
      navbar.icon = req.body.icon;

      navbar.save().then(navbar => {
        res.json('Update complete');
      })
      .catch(err => {
        res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
navbarRoutes.route('/delete/:id').get(function (req, res) {
  Navbar.findByIdAndRemove({ _id: req.params.id }, function (err, navbar) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = navbarRoutes;