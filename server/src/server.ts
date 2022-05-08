const express = require("express");
import { router } from "./routes";
import cors from "cors";

const app = express();

// app.use(cors({
//   origin: "https://nlwreturn-production-61af.up.railway.app/"
// }));

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 3001, () => {
  console.log("Servidor rodando na porta: 3001");
});
