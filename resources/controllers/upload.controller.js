const PdfModel = require('../models/Pdf.model')
const ImageModel = require('../models/Image.model')
const VideoModel = require('../models/Video.model')


module.exports.uploadImage = async (req, res) => {
    try {
        const newImg = await ImageModel.create({ url: `${process.env.BASE_URL}/image/${req.file.filename}`, name: req.file.filename })
        if (!newImg) {
            return res.status(400).json({ success: false })
        }
        return res.status(201).json({ success: true, data: newImg })
    } catch (error) {
        return res.status(400).json({ success: false })
    }
}

module.exports.uploadPdf = async (req, res) => {
    try {
        const newPdf = await PdfModel.create({ url: `${process.env.BASE_URL}/pdf/${req.file.filename}`, name: req.file.filename })
        if (!newPdf) {
            return res.status(400).json({ success: false })
        }
        return res.status(201).json({ success: true, data: newPdf })
    } catch (error) {
        return res.status(400).json({ success: false })
    }
}

module.exports.uploadVideo = async (req, res) => {
    try {
        const newVideo = await VideoModel.create({ url: `${process.env.BASE_URL}/video/${req.file.filename}`, name: req.file.filename })
        if (!newVideo) {
            return res.status(400).json({ success: false })
        }
        return res.status(201).json({ success: true, data: newVideo })
    } catch (error) {
        return res.status(400).json({ success: false })
    }
}