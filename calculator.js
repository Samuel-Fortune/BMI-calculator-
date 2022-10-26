/*const express = require("express");

const bodyParser = require("body-parser");

const port = 4000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");


});

app.post("/", function (req, res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  


  res.send("The result of your Calculation is " + result);

});

app.listen(port, () => {
  console.log(`Server is runnung on port ${port}`);
});*/

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const port = 4000;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");


});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");

});

app.post("/bmicalculator", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / (height * height);

  res.send(`The result of the BMI Calculator is` + bmi);

});

app.post("/", function (req, res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("The result of the calculation is " + result);

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

});









