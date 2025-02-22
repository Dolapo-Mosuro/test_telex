import express from "express";
import cors from "cors";
import bodyParser from "body-parser"; // ✅ Correct import

import { integrationSpec } from "./integrationSpec";

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(bodyParser.json()); // ✅ Ensure JSON parsing

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
	console.log(`Server is running at http://localhost:${PORT}`);
});
