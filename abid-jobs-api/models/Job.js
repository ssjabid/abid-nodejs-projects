const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      require: [true, "please provide company name"],
      maxlength: 50,
    },
    position: {
      type: String,
      require: [true, "please provide position"],
      maxlength: 150,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    // tying job model to the User - every time you create a job - it gets assigned to the user
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true } // automatically creates created at/updated at timestamps
);

module.exports = mongoose.model("Job", JobSchema);
