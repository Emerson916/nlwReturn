const express = require("express");
import { router } from "./routes";
import cors from "cors";

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(router);

app.listen(3001, () => {
  console.log("Servidor rodando na porta: 3001");
});
