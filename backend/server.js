const express = require("express");
var cors = require("cors");
const router = require("./routes/route");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const app = express();

require("dotenv").config();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // ganti sesuai port frontend lo
    credentials: true,
  })
);
app.use(cookieParser());
app.use(router);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
