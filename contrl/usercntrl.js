"use strict";
var db = require("../model/index");
const User = db.users;
const contact = db.contact;
const education = db.education;
const customer = db.customer;
const profile = db.Profile;
const Grant = db.Grant;
const product = db.Product;

const adddproduct = async (req, res, next) => {
  console.log(req.body);
  try {
    const postdata = req.body;
    const data = await product.create(postdata);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

console.log("users ", User);
var createuser = async (req, res, next) => {
  console.log(req.body);
  try {
    const postdata = req.body;
    const data = await User.create(postdata);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
var createcontact = async (req, res, next) => {
  console.log(req.body);
  try {
    const postdata = req.body;

    const data = await contact.create(postdata);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
let findall = async (req, res, next) => {
  try {
    const data = await User.findAll();

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
let detial = async (req, res, next) => {
  console.log(req.body);
  try {
    const data = await User.findOne({ where: { id: req.params.id } });

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

// let sendata = async (req, res, next) => {
//   console.log("Data", req.body);
//   try {
//     var postdata = req.body;
//     if (postdata.length > 1) {
//       var data = await User.bulkCreate(postdata);
//     } else {
//       var daat = await User.create(postdata);
//     }
//     return res.status(200).json(daat);
//   } catch (error) {
//     next(error);
//   }
// };

let userdel = (req, res, next) => {
  console.log("data", req.body);
  try {
    var dta = User.destroy({ where: { id: req.params.id } });
    return res.status(200).json({ dta: "Record Deleted" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
let userupd = async (req, res, next) => {
  console.log("data", req.body);
  try {
    const updatedata = req.body;
    var data = User.update(updatedata, { where: { id: req.params.id } });
    return res.status(200).json({ data: "Record Update" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const paranoiduser = async (req, res, next) => {
  console.log(req.body);
  try {
    //   var data = await User.destroy({
    //     where: {
    //       name: "Manish",
    //     },
    //   });
    // var data = await User.restore();
    // var data = await User.findAll({ paranoid: false });
    var data = await User.findByPk(1, { paranoid: false });
    return res.status(200).json({ data: data });
  } catch (error) {
    next(error);
  }
};
const loading = async (req, res, next) => {
  try {
    // const data = await User.create(req.body);
    // if (data & data.id) {
    //   await contact.create(req.body, {
    //     userId: data.id,
    //   });
    // }
    // var data = await User.findOne({
    //   where: { id: 3 },
    //   include: contact,
    // });
    var data = await User.findAll({
      attributes: ["name", "lname"],
      include: [
        {
          model: contact,
          attributes: ["per_address", "cur_address"],
        },
      ],
    });
    res.status(200).json(data);
  } catch (error) {}
};
const eager = async (req, res, next) => {
  try {
    var data = await User.findAll({
      // include: [
      //   {
      //     model: education,
      //     include: {
      //       model: contact,
      //     },
      //   },
      // ],
      // include: [{ model: contact, required: false, right: true  },{model:education}]
      include: { all: true, nested: true },
    });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const createser = async (req, res, next) => {
  try {
    //   var data = await User.create({
    //     name: "jeetendra",
    //     lname: "kumar",
    //     email: "test@gmail.com",
    //     gender: "male",
    //     password: "12435",
    //   });
    //   console.log("id", data.id);
    //   if (data & data.id) {
    //     contact.create({
    //       per_address: "bhopal",
    //       cur_address: "gwalior",
    //       userId: data.id,
    //     });
    //   }
    var data = await contact.create(
      {
        per_address: "Indore",
        cur_address: "Gwalior",
        users: {
          name: "ram",
          lname: "kumar",
        },
      },
      { include: [db.contactUser] }
    );
    var showdata = await User.findAll({ include: { model: contact } });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
const MAssociation = async (req, res, next) => {
  try {
    // const amidala = await customer.create({
    //   username: "p4dm3333",
    //   points: 2000,
    // });
    // const queen = await profile.create({ name: "Queen" });
    // await amidala.addProfile(queen, { through: { selfGranted: false } });
    // // const result = await customer.findOne({
    // //   where: { username: "p4dm3" },
    // //   include: profile,
    // // });
    // const amidala = await customer.create(
    //   {
    //     username: "Manish",
    //     points: 10000,
    //     profiles: [
    //       {
    //         name: "Chokotiya",
    //         grant: {
    //           selfGranted: false,
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     include: profile,
    //   }
    // );

    var result = await customer.findAll({
      include: { model: Grant, include: profile },
    });
    // var result = customer.findAll({
    //   include: { model: Grant, include: profile },
    // });

    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createser,
  createuser,
  createcontact,
  eager,
  findall,
  detial,
  userdel,
  userupd,
  paranoiduser,
  loading,
  MAssociation,
  adddproduct,
};
