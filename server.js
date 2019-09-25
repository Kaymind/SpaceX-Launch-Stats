const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started at port {$PORT}`));