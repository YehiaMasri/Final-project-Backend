import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const sectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    seat_available: {
      type: Number,
      required: true,
    },
    is_available: {
      type: Boolean,
      required: true,
    },
    price_per_hour: {
      type: Number,
      required: true,
    },

    bookings: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        bookedAt: {
          type: Date,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
    collection: "Section",
  }
);

const sectionModel = model("Section", sectionSchema);
export default model("Section", sectionSchema);
