const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

require('dotenv').config();

const indexRouter = require('./routes/index');

const app = express();

nunjucks.configure(path.join(__dirname, '../client', '/views'), {
    autoescape: true,
    express: app,
});

app.set('view engine', 'html');

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../client', '/build/static')));
app.use('/', indexRouter);

app.listen(PORT, () => {
    if (process.env.NODE_ENV === 'development') {
        console.log(`🚀 Application running on http://localhost:${PORT}`);
    }
});