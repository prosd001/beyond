const express = require("express");
const authController = require("../controllers/auth.controller");
const { adminCheck } = require("../Middlewares/auth.middleware");

const router = express.Router();

// Sign in
router.post("/auth/admin/signin", authController.signinAdminUser);

// Sign in
router.post("/auth/admin/update", adminCheck, authController.updateAdminUser);


module.exports = router;
