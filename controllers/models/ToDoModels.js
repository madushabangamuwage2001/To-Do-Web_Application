const mongoose = require('mongoose');
const todoscheema = new mongoose.Schema({
    text :{
        type : String,
        required : true
    }

})
module.exports = mongoose.model('ToDo',todoscheema);