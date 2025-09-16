const express = require("express");
const { connect } = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const upload = require("express-fileupload");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cors({ credentials: true, origin: ["http://localhost:5173"] }));
app.use(upload);
app.use(notFound);
app.use(errorHandler);

connect(process.env.MONGO_URL)
  .then(
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    })
  )
  .catch((error) => console.log(error));
