const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    airline: {type: String, enum: ['American','Southwest','United']},
    flightNo: {type: Number, 
        min: 10, 
        max: 9999, 
        required: true},
departs: {type: Date, default: currentDate.getFullYear()},  
airport: {
    type: String, 
    enum:['AUS','DAL','LAX','SAN','SEA'],
    require: true,
    default: 'SAN'
},

});

const flight = mongoose.model('flight', flightSchema);

module.exports = flight;