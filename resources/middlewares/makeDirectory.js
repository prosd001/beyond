const fs = require('fs');
const path = require('path');



/* Directory creation middleware */
exports.makeImagesDir = async (req, res, next) => {
    // check if directory exists
    if (fs.existsSync(path.join(__dirname, "../uploads"))) {
        if (fs.existsSync(path.join(__dirname, "../uploads/image"))) {
            next()
        } else {
            fs.mkdirSync(path.join(__dirname, "../uploads/image"));
            next()
        }
    } else {
        if (fs.existsSync(path.join(__dirname, "../uploads/image"))) {
            next()
        } else {
            fs.mkdirSync(path.join(__dirname, "../uploads"));
            fs.mkdirSync(path.join(__dirname, "../uploads/image"));
            next()
        }
    }
}


/* Directory creation middleware */
exports.makePdfDir = async (req, res, next) => {
    // check if directory exists
    if (fs.existsSync(path.join(__dirname, "../uploads"))) {
        if (fs.existsSync(path.join(__dirname, "../uploads/pdf"))) {
            next()
        } else {
            fs.mkdirSync(path.join(__dirname, "../uploads/pdf"));
            next()
        }
    } else {
        if (fs.existsSync(path.join(__dirname, "../uploads/pdf"))) {
            next()
        } else {
            fs.mkdirSync(path.join(__dirname, "../uploads"));
            fs.mkdirSync(path.join(__dirname, "../uploads/pdf"));
            next()
        }
    }


}

/* Directory creation middleware */
exports.makeVideoDir = async (req, res, next) => {
    // check if directory exists
    if (fs.existsSync(path.join(__dirname, "../uploads"))) {
        if (fs.existsSync(path.join(__dirname, "../uploads/video"))) {
            next()
        } else {
            fs.mkdirSync(path.join(__dirname, "../uploads/video"));
            next()
        }
    } else {
        if (fs.existsSync(path.join(__dirname, "../uploads/video"))) {
            next()
        } else {
            fs.mkdirSync(path.join(__dirname, "../uploads"));
            fs.mkdirSync(path.join(__dirname, "../uploads/video"));
            next()
        }
    }


}