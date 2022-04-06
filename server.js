const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const port = 4000;
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Model

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minLength: [3, "Minimum 3 characters required"],
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    lowercase: true,
    trim: true,
    minLength: [3, "Minimum 3 characters required"],
  },
});

const Contact = mongoose.model("Contact", contactSchema);
// Controller

const sendMessage = async (req, res) => {
  try {
    const message = await Contact.create(req.body);
    res.json(message);
  } catch (err) {
    console.log(err);
  }
};

//Route
const router = express.Router();
const contactRoute = router.post("/message", sendMessage);

app.use("/api/portfolio", contactRoute);

mongoose
  .connect("mongodb://127.0.0.1/messages", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"))
  .catch((err) =>
    console.log("opps something went wrong try again! or check ")
  );

app.listen(port, () => {
  console.log(`Connected to ${port}`);
});
