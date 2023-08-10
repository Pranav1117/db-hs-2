const { db } = require("../config/db");

const employees = db.collection("employess");

const getData = async (req, res) => {
  const data = await employees.find().toArray();
  res.send(data);
};

const addData = async (req, res) => {
  const data = req.body;
  const result = await employees.insertMany(data);

  res.send(result);
};

const getDataSalary = async (req, res) => {
  const data = await employees.find({ salary: { $gt: "30000" } }).toArray();
  res.send(data);
};

const getDataExp = async (req, res) => {
  const data = await employees.find({ overallExp: { $gt: "1" } }).toArray();
  res.send(data);
};

const getDataExpAndGrad = async (req, res) => {
  const data = await employees
    .find({ overallExp: { $gt: "1" }, yearGrad: { $gt: "2015" } })
    .toArray();
  res.send(data);
};

const updateSalary = async (req, res) => {
  const result = await employees.updateMany(
    { salary: { $gt: "35000" } },
    { $set: { salary: "2929292" } }
  );
  res.send(result);
};

const deleteComp = async (req, res) => {
  const result = await employees.deleteMany({ lastCompany: "Z" });
  res.send(result);
};

module.exports = {
  getData,
  addData,
  getDataSalary,
  getDataExp,
  getDataExpAndGrad,
  updateSalary,
  deleteComp,
};
