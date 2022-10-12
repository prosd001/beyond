const mongoose = require("mongoose");

const downloadSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        downloaded_resources: {
            type: Array,
        },
        archived: {
            type: Boolean,
            default: false
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);


module.exports = mongoose.model("Download", downloadSchema);