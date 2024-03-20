import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PlanetSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    reference: { type: String, required: true },
    distance: { type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true  },
    summary: { type: String, required: true }
});

PlanetSchema.virtual("url").get(function () {
    return `/api/planet/${this.id}`;
})

module.exports = mongoose.model("Planet", PlanetSchema);