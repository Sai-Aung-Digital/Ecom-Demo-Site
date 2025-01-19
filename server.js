const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs"); // Optional: For saving leads to a file
const app = express();

app.use(bodyParser.json());

app.post("/submit-lead", (req, res) => {
  const { name, email, phone } = req.body;

  // Save lead data (e.g., to a file or database)
  const lead = { name, email, phone, date: new Date() };
  fs.appendFileSync("leads.json", JSON.stringify(lead) + "\n");

  console.log("Lead received:", lead);
  res.status(200).send("Lead submitted successfully");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
