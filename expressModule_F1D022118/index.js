import express from "express";
import { tambah } from "./utils/math.js";
import profileRouter from "./routes/profile.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Nama: Excel Caesariano | NIM: F1D022118");
});

app.get("/hitung", (req, res) => {
  const hasil = tambah(10, 5);
  res.send(`Hasil penjumlahan 10 + 5 = ${hasil}`);
});

app.use("/profile", profileRouter);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
