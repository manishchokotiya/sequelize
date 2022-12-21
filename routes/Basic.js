var express = require("express");
var router = express.Router();
var bascontrl = require("../contrl/bascontl");

// One -to-One
router.get("/one", bascontrl.showuser);
// One- to - Many
router.get("/many", bascontrl.showmanyuser);
//MAny-to-Many
router.get("/many-to-many", bascontrl.shomanytomanyuser);

router.post('/senddata',bascontrl.sendata)
module.exports = router;
