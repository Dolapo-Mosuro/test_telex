import express from "express";
import { integrationSpec } from "./integrationSpec";
import cors from "cors";
const app = express();

const PORT = 3006;
import bodyParser = require("body-parser");
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/integrationSpecs", (req, res) => {
	res.json(integrationSpec);
});

app.post("/webhook", (req, res) => {
	console.log("Webhook received:", req.body);
	res.status(200).send("Webhook received!");
});

app.listen(PORT, () => {
	console.log(`Express is listening at http://localhost:${PORT}`);
});
