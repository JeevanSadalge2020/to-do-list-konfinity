const express = require('express');
const app = express();
const path = require('path');
const routes = require('./backend/routes/MainRoutes');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'client', 'views'))

app.use('/', routes)

app.listen(4000, () => {
    console.log('listening on port 4000');
})

module.exports = app;