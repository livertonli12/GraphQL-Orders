process.env.PORT     = process.env.PORT || 3000;
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

mongoose.connect('mongodb://localhost:27017/mycommerce');

app.listen(process.env.PORT, () => {
    console.log('Listening at port', process.env.PORT);
});