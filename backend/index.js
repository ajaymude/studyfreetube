import express from "express";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
const __dirname = path.resolve();
const app = express();

// path should not be the same
app.get("/test", (req, res) => {
  res.send("test");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/backend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "backend", "dist", "index.html"));
  });
}

app.listen(process.env.PORT, () => {
  console.log("runnig");
});
