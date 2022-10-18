
const jwt = require("jsonwebtoken");
const AdminModel = require("../models/Admin.model");

/* Admin check middleware */
exports.adminCheck = async (req, res, next) => {
    // Verify
    const { authorization } = req.headers;

    console.log(req.headers);

    if (!authorization)
        return res
            .status(403)
            .json({ success: false, message: "Invalid credentials" });

    const token = authorization.split(" ")[1];

    try {
        const { _id } = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = await AdminModel.findOne({ _id }).select("_id");
        next();
    } catch (error) {
        console.log(error);
        return res
            .status(403)
            .json({ success: false, message: "Invalid credentials" });
    }
};