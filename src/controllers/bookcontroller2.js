const bookmodel2 = require("../models/bookmodel2");

const createBook = async function (req, res) {

    let Bookdata = req.body
    let newdata = await bookmodel2.create(Bookdata)
    res.send({ msg: newdata })

}
const booklist = async function (req, res){

    let Bookdata = req.body
    let mylist = await bookmodel2.find().select({ bookname: 1, authorName: 1 })
    res.send({ msg:mylist })

}
const getbookinyear = async function(req,res){

    let bookyear=req.query.year
    let book = await bookmodel2.find({year:bookyear})
    res.send({ msg: book})

}
const getrandombook = async function(req,res){

    
    let random_book = await bookmodel2.find({$or:[{stockAvailable:true,},{pagenumber :{$gt:500}}]})
    res.send({ msg: random_book})
}
const getparticularbook=async function(req,res){
    let data=req.body
    let particularbook=await bookmodel2.find(data);
    res.send({particularbook})
}
const getbookINR = async function(req,res){
    let bookByPrice = await bookmodel2.find({$or:[{"prices.indianPrice":{$eq:"100"}},{"prices.indianPrice":{$eq:"200"}},{"prices.indianPrice":{$eq:"500"}}]})
    res.send({msg : bookByPrice})
    
}
    

module.exports.createBookpublic=createBook
module.exports.booklistpulic=booklist
module.exports.getbookinyear=getbookinyear
module.exports.getrandombook=getrandombook
module.exports.getparticularbook=getparticularbook
module.exports.getbookINR=getbookINR