const express = require('express');
const path = require('path');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const { uploadImage, uploadPdf, uploadVideo } = require('../controllers/upload.controller');
const { makeImagesDir, makePdfDir, makeVideoDir } = require('../middlewares/makeDirectory');


const router = express.Router();

//image upload func
const storageImage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../uploads/image"));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    },
});
const storagePdf = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../uploads/pdf"));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    },
});
const storageVideo = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../uploads/video"));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    },
});


const fileFilterImage = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
const fileFilterPdf = (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
const fileFilterVideo = (req, file, cb) => {
    if (file.mimetype === "video/mp4") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};


const uploadImageHandler = multer({
    storage: storageImage,
    limits: {
        fileSize: 1024 * 1024 * 20,
    },
    fileFilter: fileFilterImage,
});
const uploadPdfHandler = multer({
    storage: storagePdf,
    limits: {
        fileSize: 1024 * 1024 * 50,
    },
    fileFilter: fileFilterPdf,
});
const uploadVideoHandler = multer({
    storage: storageVideo,
    limits: {
        fileSize: 1024 * 1024 * 100,
    },
    fileFilter: fileFilterVideo,
});

router.post('/add-image', makeImagesDir, uploadImageHandler.single("file"), uploadImage);
router.post('/add-pdf', makePdfDir, uploadPdfHandler.single("file"), uploadPdf);
router.post('/add-video', makeVideoDir, uploadVideoHandler.single("file"), uploadVideo);


module.exports = router;