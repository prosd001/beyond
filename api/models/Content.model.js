const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model("Content", contentSchema);