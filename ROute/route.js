const route = require("express").Router();
const {
  getData,
  addData,
  getDataSalary,
  getDataExp,
  getDataExpAndGrad,
  updateSalary,
  deleteComp,
} = require("../controller/controller");

route.get("/getdata", getData);

route.post("/adddata", addData);

route.get("/getsalary", getDataSalary);

route.get("/getexp", getDataExp);

route.get("/getexpandgrad", getDataExpAndGrad);

route.post("/updatesalary", updateSalary);

route.get("/delete", deleteComp);




module.exports = { route };
