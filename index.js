var express = require('express');
var submitForm = require("./controllers/submitFormController");

var app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.use(express.urlencoded(
    { extended: true }
));

app.get('/form', function(req, res){
    res.render('forms');
});

app.get('/match', function(req, res){
    res.send('Placeholder String');
});

submitForm(app);

app.listen(3000);