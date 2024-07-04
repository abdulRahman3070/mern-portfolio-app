const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const path = require('path');


//dotenv configuration
dotenv.config();

//Rest Object
const app = express();


//Middlewares
app.use(cors());
app.use(express.json());

//Static files
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//Routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoutes"));

//Port
const PORT = process.env.PORT || 8080;

//Listen
app.listen(PORT, () => {
  console.log(`Server is Running On Port: ${PORT}`);
});
