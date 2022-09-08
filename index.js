const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(require("./routes/routes"));

const port = 3000;

mongoose
  .connect(
    "mongodb+srv://gaunt0066:Panzerkampf06@cluster0.6m4r7dq.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("server has been started"))
  .catch(() => console.log("failed"));

app.listen(port, () => console.log(`server on ${port} has been started`));

/*GET / students
POST / students
DELETE / students /: id
PATCH / students /: id*/
