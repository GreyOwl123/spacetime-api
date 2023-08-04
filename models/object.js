const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ObjectSchema = new Schema({
    title: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String },
    reference: { type: String },
    distance: { type: String },
    time: { type: String },
    location: { type: String },
    summary: { type: String }
});

ObjectSchema.virtual("url").get(function () {
    return `api/object/${this.id}`;
})

module.exports = mongoose.model("Object", ObjectSchema);