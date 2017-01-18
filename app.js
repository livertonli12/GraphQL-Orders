process.env.PORT     = process.env.PORT || 80;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './graphql';

var app = express();

app.use('/api/orders', graphqlHTTP({
    schema,
    pretty: true,
    graphiql: true
}));

mongoose.connect('mongodb://administrator:fcamara123@ds117849.mlab.com:17849/mcommerce');

app.listen(process.env.PORT, () => { console.log('API Running'); });

module.exports = app;