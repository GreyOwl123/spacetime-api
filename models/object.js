const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ObjectSchema = new Schema({
    title: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    reference: { type: String, required: true },
    distance: { type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true  },
    summary: { type: String, required: true }
});

ObjectSchema.virtual("url").get(function () {
    return `/api/object/${this.id}`;
})

module.exports = mongoose.model("Object", ObjectSchema);