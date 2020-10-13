const express = require('express');
const app = express();

const apiRouter = require('./routes/apiRouter');

const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', apiRouter);

// app.listen(port, () => {
//     console.log(`Listening on port: ${port}`)
// })

module.exports = app;
