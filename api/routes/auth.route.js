const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

// Sign in
router.post("/auth/admin/signin", authController.signinAdminUser);

// Sign in
router.post("/auth/admin/update", authController.updateAdminUser);


module.exports = router;