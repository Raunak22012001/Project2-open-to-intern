const mongoose = require('mongoose');

const bookSchema2 = new mongoose.Schema( {
    bookName: {
      type :String,
      require :true,
    } ,
    authorName: String, 
    tags: [String],
    
    year:{
        type :Number,
        default :2021,
    },

    prices: {
        indianPrice: String,
        europePrice: String,
    },

    tags:[String],
    pagenumber :Number,
    stockAvailable:Boolean,
    

}, { timestamps: true });


module.exports = mongoose.model('Bookdata2', bookSchema2)