import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors, { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
  origin: true,
  credentials: true,
};

const app = express();
const port = 5000;

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "500kb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet.frameguard());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
