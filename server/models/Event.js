const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "Host",
    },
    host: {
      type: Schema.Types.ObjectId,
      ref: "Host",
    },
    name: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    state: {
      type: String,
    },
    images: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = { Event };
