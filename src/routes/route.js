const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")

const newbookmodel = require("../models/bookmodel2")
const newbookcontroller=require("../controllers/bookcontroller2")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

router.post("/createBook2",newbookcontroller.createBookpublic)

router.get ("/booklist",newbookcontroller.booklistpulic)

router.get ("/getbookinyear",newbookcontroller.getbookinyear)

router.get ("/getrandombook",newbookcontroller.getrandombook)
router.get ("/getparticularbook",newbookcontroller.getparticularbook)
router.get ("/getbookINR",newbookcontroller.getbookINR)
module.exports = router;