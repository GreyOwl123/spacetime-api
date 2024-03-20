import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MeteorSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    reference: { type: String, required: true },
    distance: { type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true  },
    summary: { type: String, required: true }
});

MeteorSchema.virtual("url").get(function () {
    return `/api/meteor/${this.id}`;
})

module.exports = mongoose.model("Meteor", MeteorSchema);
