require("dotenv").config();
const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 5001;

const app = express();

app.use(cors());

app.use(express.json());

app.get("/healthy", (req, res) => {
    res.status(200).json({ message: "API is health"});
});

app.listen(port, () =>{
    console.log(`App listening on port ${port}`);
});
