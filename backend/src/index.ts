import express, {Response} from "express";
import cors from "cors";

import personRouter from "./routes/personRoute";

const app = express();

app.use(cors({
  origin: "http://localhost:3000"
}))
app.use(express.json());
app.use("/api/person", personRouter);
app.get("/", (_, res: Response) => {
  return res.send("Hello, World!");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
