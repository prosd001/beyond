const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const AdminModel = require("../models/Admin.model");

// Generate a token
const generateToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Sign in admin user
const signinAdminUser = async (req, res) => {
    const { username, password } = req.body;
    if (!req.body || !username || !password)
        return res
            .status(400)
            .json({ success: false, message: "Required fields are missing" });

    // Checking if an admin user is already registered
    mongoose.connection.db.collection("admins").count(async (err, count) => {
        if (err)
            return res.status(500).json({ success: false, message: "Server error" });

        if (count === 0) {
            // Registering new admin user
            try {
                const newAdmin = await AdminModel.registerNewAdminUser(
                    username,
                    password
                );
                const token = generateToken(newAdmin._id);
                return res.status(200).json({
                    success: true,
                    message: "Admin registered successfully",
                    token,
                });
            } catch (error) {
                error.message = "Admin user already exists"
                    ? res
                        .status(403)
                        .json({ success: false, message: "Admin already exists" })
                    : res.status(500).json({ success: false, message: "Server error" });
            }
        } else {
            // Signing in an admin user
            try {
                const admin = await AdminModel.signinAdminUser(username, password);
                const token = generateToken(admin._id);
                return res.status(200).json({
                    success: true,
                    message: "Admin signed in successfully",
                    token,
                });
            } catch (error) {
                error.message = "Invalid credentials"
                    ? res
                        .status(403)
                        .json({ success: false, message: "Invalid credentials" })
                    : res.status(500).json({ success: false, message: "Server error" });
            }
        }
    });
};

// Update admin user info
const updateAdminUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username && !password)
        return res
            .status(400)
            .json({ success: false, message: "At least one field is required" });

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const updatedProfile = await AdminModel.findOneAndUpdate(req.userId, {
            username,
            password: hashedPassword,
        });

        if (updatedProfile)
            return res.status(200).json({
                success: true,
                message: "Admin profile updated successfully",
                updatedProfile,
            });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

module.exports = { signinAdminUser, updateAdminUser };