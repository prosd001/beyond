const mongoose = require("mongoose");

const imgSchema = new mongoose.Schema(
    {
        url: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model("Image", imgSchema);