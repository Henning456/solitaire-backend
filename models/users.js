import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  gamesPlayed: {
    type: Number,
    default: 0,
  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
