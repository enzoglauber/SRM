
var express = require('express');
var app = express();
var actionRoutes = express.Router();

// Require Item model in our routes module
var Action = require('../model/Action');

// Defined get data(index or listing) route
actionRoutes.route('/').get(function (req, res) {
  Action.find(function (err, actions) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(actions);
    }
  });
});

// Defined store route
actionRoutes.route('/add').post(function (req, res) {
  var action = new Action(req.body);
  action.save()
    .then(item => {
      res.status(200).json({ 'action': 'Action added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined edit route
actionRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Action.findById(id, function (err, action) {
    res.json(action);
  });
});

//  Defined update route
actionRoutes.route('/update/:id').post(function (req, res) {
  Action.findById(req.params.id, function (err, action) {
    if (!action)
      return next(new Error('Could not load Document'));
    else {
      action.title = req.body.title;

      action.save().then(action => {
        res.json('Update complete');
      })
      .catch(err => {
        res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
actionRoutes.route('/delete/:id').get(function (req, res) {
  Action.findByIdAndRemove({ _id: req.params.id }, function (err, action) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = actionRoutes;