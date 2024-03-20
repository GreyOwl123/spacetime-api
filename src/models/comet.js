import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CometSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    reference: { type: String, required: true },
    distance: { type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true  },
    summary: { type: String, required: true }
});

CometSchema.virtual("url").get(function () {
    return `/api/comet/${this.id}`;
})

module.exports = mongoose.model("Comet", CometSchema);