const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors())

// Enable parsing of JSON bodies
app.use(express.json());

// Our in-memory store
const dataStore = {
    users: [{ id: "1", firstName: "Itachi", lastName: "Uchiha", age: 15, gender: "male", country: "INDIA" }],
};

// Endpoint to add or update data
app.post("/users/create", (req, res) => {
    const { value } = req.body;
    dataStore["posts"] = [...dataStore["users"], { id: `${dataStore["users"].length + 1}`, ...value }];
    res.send("Data saved successfully")
});

app.get("/users/list", (req, res) => {
    res.send({ value: dataStore["users"] })
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});