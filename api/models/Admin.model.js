const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        versionKey: false,
    }
);

// Register a new admin user
adminSchema.statics.registerNewAdminUser = async function (username, password) {
    const adminExists = await this.findOne({ username });
    if (adminExists) {
        throw Error("Admin user already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = await this.create({ username, password: hashedPassword });
    return newAdmin;
};

// Signin admin user
adminSchema.statics.signinAdminUser = async function (username, password) {
    const admin = await this.findOne({ username });

    if (!admin) {
        throw Error("Invalid credentials");
    }

    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
        throw Error("Invalid credentials");
    }

    return admin;
};

module.exports = mongoose.model("Admin", adminSchema);