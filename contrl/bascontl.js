// const User = require("../model/users");
// const contact = require("../model/contact");
const db = require("../model/index");
const User = db.users;
const contact = db.contact;
const UserContract = db.Usercontact;

// One to Onr User
const showuser = async (req, res, next) => {
  try {
    var data = await User.findAll({
      include: [contact],
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

// // One-to-Many
// const OnetoManyuser = async (req, res, next) => {
//   try {
//     const data = await contact.create({
//       per_address: req.body.per_address,
//       cur_address: req.body.cur_address,
//       userId: req.body.userId,
//     });
//     res.status(200).json(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
const sendata = async (req, res, next) => {
  try {
    var postdata = req.body;
    var data = await UserContract(postdata);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
const showmanyuser = async (req, res, next) => {
  try {
    var data = await User.findAll({
      include: [contact],
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

const shomanytomanyuser = async (req, res, next) => {
  try {
    var data = await User.findAll({
      attributes: ["name", "email"],

      include: [{ model: contact, attributes: ["per_address", "cur_address"] }],
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  showuser,
  showmanyuser,
  shomanytomanyuser,
  sendata,
};
