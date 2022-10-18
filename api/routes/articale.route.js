const express = require("express");
const { createArticale, getArticale, editArticale, deleteArticale, getAllArticales, getPublicArticales, addShowcase, updateShowcase, getShowcase, getPublicEngArticales } = require("../controllers/articale.controller");


const router = express.Router();

router.post('/articale', createArticale)
router.get('/articales', getAllArticales)
router.get('/public-articales', getPublicArticales)
router.get('/public-eng-articales', getPublicEngArticales)
router.get('/articale/:slug', getArticale)
router.post('/articale/update/:slug', editArticale)
router.get('/articale/delete/:slug', deleteArticale)

router.get('/showcase', getShowcase)
router.post('/add-showcase', addShowcase)
router.post('/update-showcase', updateShowcase)

module.exports = router;