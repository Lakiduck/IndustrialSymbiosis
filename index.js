var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/form', function(req, res){
    res.render('forms');
});

app.get('/match', function(req, res){
    res.send('Placeholder String');
});

app.listen(3000);