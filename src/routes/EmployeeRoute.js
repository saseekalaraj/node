const express = require("express");
const router = express.Router();

const EmployeeConttroller = require("../controllers/EmployeeController");

router.get("/getEmployee", EmployeeConttroller.getEmployee);
router.get("/saveEmployee", EmployeeConttroller.saveEmployee);
router.get("/employee", (req, res) => {
  res.json({ status: "Employee Saved" });
});
module.exports = router;
