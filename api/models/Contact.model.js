const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        subject: {
            type: String,
            default: ''
        },
        message: {
            type: String,
            default: ''
        },
        archived: {
            type: Boolean,
            default: false
        },
        repeat: {
            type: Boolean,
            default: false
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model("Contact", contactSchema);