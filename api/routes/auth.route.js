const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

// Sign in
router.post("/auth/admin/signin", authController.signinAdminUser);


module.exports = router;