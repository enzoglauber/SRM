var Navbar = require('./model/Navbar');
var Action = require('./model/Action');
// 
const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      config = require('../express/config/db');
      navbarRoutes = require('./routes/navbar');
      actionRoutes = require('./routes/action');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
const port = process.env.PORT || 4000;

app.use('/navbars', navbarRoutes);
app.use('/actions', actionRoutes);

const server = app.listen(port, function () {
  Navbar.find(function (err, navbars) {
    if (err) { console.log(err) } else {
      if(!navbars.length) {        
        let seed = [
          {
            title: 'Home',
            icon: 'fas fa-home',
            link: 'home',
          }, 
          {
            title: 'Home 1',
            icon: 'fas fa-home',
            link: 'home',
          }, 
          {
            title: 'Home 2',
            icon: 'fas fa-home',
            link: 'home',
          },
        ];

        seed.forEach(function (item, index) {
          var navbar = new Navbar(item);
          navbar.save()
        })
      };
    }
  });

  Action.find(function (err, actions) {
    if (err) { console.log(err) } else {
      if (!actions.length) {
        let seed = [
          { title: 'Action 1' },
          { title: 'Action 1' },
          { title: 'Action 1' },
        ];

        seed.forEach(function (item, index) {
          var actions = new Action(item);
          actions.save()
        })
      };
    }
  });
  
  console.log('Listening on port ' + port);
});