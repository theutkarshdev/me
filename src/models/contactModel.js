import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please provide a username"],
  },
  lastname: {
    type: String,
    required: [true, "Please provide a username"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
  },
  phone: {
    type: String,
    required: [true, "Please provide a email"],
  },
  message: {
    type: String,
    required: [true, "Please provide a email"],
  },
});

const Contact = mongoose.models.contacts || mongoose.model("contacts", contactSchema);

export default Contact;
