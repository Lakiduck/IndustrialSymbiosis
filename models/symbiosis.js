const mongoose = require('mongoose');
var dbString = require('./dbString');

async function connect(){
  try{
    await mongoose.connect(dbString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
  } catch(error){
    console.log(error);
  }
}

connect();

const Schema = mongoose.Schema;

const symData = new Schema({
    company: {type: String},
    input1: {type: String},
    inputQuantity1: {type: mongoose.Decimal128},
    inputUnit1: {type: String},
    output1: {type: String},
    outputQuantity1: {type: mongoose.Decimal128},
    outputUnit1: {type: String}
});

const symbiosisModel = mongoose.model('Symbiosis', symData)

module.exports = symbiosisModel
