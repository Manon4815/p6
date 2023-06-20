const express = require('express');

const app = express();

const bodyParser = require('body-parser'); // Permet de retirer l'objet JSON des requêtes POST

const mongoose = require('mongoose');
const userRoutes = require('./routes/user');


mongoose.connect('mongodb+srv://manon4815chaf:manon4@cluster0.gkfbios.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((error) => console.log('Connexion à MongoDB échouée !',error));


  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyParser.json());//permet de transformer les données de la requête post en 1 object json
  app.use('/api/stuff', stuffRoutes);
  app.use('/api/auth', userRoutes);

module.exports = app;