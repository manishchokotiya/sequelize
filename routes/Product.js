var express = require("express");

var router = express.Router();
var userctrl = require("../contrl/usercntrl");
var { adduser, addproduct } = require("../middleware/validation");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
// API CRUD IN USER
router.post("/user", adduser, userctrl.createuser);
router.get("/show", userctrl.findall);
router.get("/user/:id", userctrl.detial);
router.delete("/user/:id", userctrl.userdel);
router.patch("/user/:id", userctrl.userupd);
// API Contact

router.post("/contact", userctrl.createcontact);

// basic pratice using paranoid api
router.get("/paranoid", userctrl.paranoiduser);

// Loading User

router.get("/loadinguser", userctrl.loading);

// Eager Loding
router.get("/eager", userctrl.eager);
// create Associate
router.get("/create", userctrl.createser);
//M-N- Association
router.get("/Associate", userctrl.MAssociation);

// addproduct
router.post('/send',addproduct,userctrl.adddproduct)

module.exports = router;
