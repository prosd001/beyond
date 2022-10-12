const mongoose = require("mongoose");

const articaleSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        title: {
            type: String,
            required: true,
        },
        banner_url: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'Articale'
        },
        guide_url: {
            type: String,
            default: ''
        },
        privacy: {
            type: String,
            default: 'Private'
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model("Articale", articaleSchema);