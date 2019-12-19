const express = require("express");
const app = express();

//setting port
app.set("port", process.env.PORT || 3000);

//importing Route
const employeeRouters = require("./routes/EmployeeRoute");

//Route
app.use("/employee", employeeRouters);

//Middleware
app.use(express.json());

app.use("/", (req, res) => {
  res.send("First Page");
});
app.listen(app.get("port"), () => {
  console.log("Server Started ");
});
