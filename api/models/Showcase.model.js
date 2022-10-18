const mongoose = require("mongoose");

const showcaseSchema = new mongoose.Schema(
    {
        popular: {
            type: Object,
            required: true,
        },
        popular_fr: {
            type: Object,
            required: true,
        },
        featured_big: {
            type: Object,
            required: true,
        },
        featured_big_fr: {
            type: Object,
            required: true,
        },
        featured_small_one: {
            type: Object,
            required: true,
        },
        featured_small_one_fr: {
            type: Object,
            required: true,
        },
        featured_small_two: {
            type: Object,
            required: true,
        },
        featured_small_two_fr: {
            type: Object,
            required: true,
        },
        featured_smallest_one: {
            type: Object,
            required: true,
        },
        featured_smallest_one_fr: {
            type: Object,
            required: true,
        },
        featured_smallest_two: {
            type: Object,
            required: true,
        },
        featured_smallest_two_fr: {
            type: Object,
            required: true,
        },
        featured_smallest_three: {
            type: Object,
            required: true,
        },
        featured_smallest_three_fr: {
            type: Object,
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model("Showcase", showcaseSchema);