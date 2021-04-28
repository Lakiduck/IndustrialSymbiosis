var Model = require('../models/symbiosis');
var events = require('events');

module.exports = function(app){
    app.post('/match', function (req, res) {
        var inputMatch;
        var outputMatch;
        var entry = new Model({
            company: req.body.cname,
            input1: req.body.input1,
            inputQuantity1: req.body.quant1,
            inputUnit1: req.body.unit1,
            output1: req.body.output1,
            outputQuantity1: req.body.quant2,
            outputUnit1: req.body.unit2
        });
        entry.save(function(err){
            if(err) return err;
        });
        var dbQueryEvent = new events.EventEmitter();
        dbQueryEvent.on('finished', function(){
            res.render('match', {target: req.body, inputMatches: inputMatch, outputMatches: outputMatch});
        });
        Model.find({input1: req.body.output1}, function(err, data){
            if(err) return err;
            inputMatch = data;
            Model.find({output1: req.body.input1}, function(err, data){
                if(err) return err;
                outputMatch = data;
                dbQueryEvent.emit('finished');
            });
        });   
    });
};