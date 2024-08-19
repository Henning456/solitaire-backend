import mongoose, { Schema } from "mongoose";

const dummySchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

export const Dummy =
  mongoose.models.Dummy || mongoose.model("Dummy", dummySchema);
