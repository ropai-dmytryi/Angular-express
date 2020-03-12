const express = require('express')
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');

const app = express()

const PORT = 3000
const URL = '/graphql'

const MONGO_URL = 'mongodb://localhost:27017/bookstore'

mongoose.connect(MONGO_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

app.use(URL, graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log(`Server runing on port ${PORT}`);
})
