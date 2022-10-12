const ContactModel = require('../models/Contact.model')
const DownloadModel = require('../models/Download.model')
const WaitinglistModel = require('../models/WaitingList.model')

// Adding a contact
const addContact = async (req, res) => {

    const { name, email, subject, message } = req.body

    if (!name || !email) {
        return res
            .status(400)
            .json({ success: false, message: "Required fields are missing" });
    }

    try {
        const newContact = await ContactModel.create({
            name, email, subject, message
        })

        if (!newContact) {
            res.status(500).json({ success: false, message: "Server error" });
        }

        return res.status(200).json({
            success: true,
            message: "Contact added successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }

}

// Editing a contact
const editContact = async (req, res) => {
    const { id, data } = req.body

    if (!id || !data) {
        return res
            .status(400)
            .json({ success: false, message: "Required fields are missing" });
    }

    try {
        const editedContact = await ContactModel.findByIdAndUpdate(id, data, { new: true })

        if (!editedContact) {
            res.status(500).json({ success: false, message: "Contact doesn't exist" });
        }

        return res.status(200).json({
            success: true,
            message: "Contact edited successfully",
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// Deleting a contact
const removeContact = async (req, res) => {
    const { id } = req.body

    if (!id) {
        return res
            .status(400)
            .json({ success: false, message: "Required fields are missing" });
    }

    try {
        const confirmationContact = await ContactModel.findByIdAndDelete(id)

        if (!confirmationContact) {
            res.status(400).json({ success: false, message: "Contact doesn't exist" });
        }

        return res.status(200).json({
            success: true,
            message: "Contact deleted successfully",
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// Get all contacts
const getContacts = async (req, res) => {
    try {
        const contacts = await ContactModel.find({ archived: false })
        return res.status(200).json({
            success: true,
            message: "Contacts fetched successfully",
            contacts
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// Get archived contacts
const getarchivedContacts = async (req, res) => {
    try {
        const contacts = await ContactModel.find({ archived: true })
        return res.status(200).json({
            success: true,
            message: "Contacts fetched successfully",
            contacts
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// Archive all contacts
const archiveAllContacts = async (req, res) => {
    try {
        const confirmation = await ContactModel.updateMany({ archived: false }, { $set: { archived: true } })
        if (!confirmation) {
            res.status(500).json({ success: false, message: "Server error" });
        }

        return res.status(200).json({
            success: true,
            message: "Archived all successfully",
            confirmation
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// Delete all contacts
const removeAllContacts = async (req, res) => {
    try {
        const confirmation = await ContactModel.deleteMany({ archived: true })
        if (!confirmation) {
            res.status(500).json({ success: false, message: "Server error" });
        }

        return res.status(200).json({
            success: true,
            message: "Deleted all successfully",
            confirmation
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// Get new contacts
const getNewContacts = async (req, res) => {
    try {
        let d = new Date();
        d.setDate(d.getDate() - 1);
        const newContacts = await ContactModel.find({ "createdAt": { $gt: d }, archived: false })

        if (!newContacts) {
            res.status(500).json({ success: false, message: "Server error" });
        }

        return res.status(200).json({
            success: true,
            message: "Fetched new records successfully",
            newContacts
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}




// Adding a Waiting
const addWaiting = async (req, res) => {
    const { name, email } = req.body

    if (!name || !email) {
        return res
            .status(400)
            .json({ success: false, message: "Required fields are missing" });
    }

    try {
        const newWaiting = await WaitinglistModel.create({
            name, email
        })

        if (!newWaiting) {
            res.status(500).json({ success: false, message: "Server error" });
        }

        return res.status(200).json({
            success: true,
            message: "Waiting added successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// Adding a downloads
const adddownloads = async (req, res) => {
    const { name, email, downloaded_resources } = req.body

    if (!name || !email || !downloaded_resources) {
        return res
            .status(400)
            .json({ success: false, message: "Required fields are missing" });
    }

    try {
        const newdownloads = await DownloadModel.create({
            name, email, downloaded_resources
        })

        if (!newdownloads) {
            res.status(500).json({ success: false, message: "Server error" });
        }

        return res.status(200).json({
            success: true,
            message: "Waiting added successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}


// Editing a Waiting
const editWaiting = async (req, res) => {
    const { id, data } = req.body

    if (!id || !data) {
        return res
            .status(400)
            .json({ success: false, message: "Required fields are missing" });
    }

    try {
        const editedWaiting = await WaitinglistModel.findByIdAndUpdate(id, data, { new: true })

        if (!editedWaiting) {
            res.status(400).json({ success: false, message: "Waiting doesn't exist" });
        }

        return res.status(200).json({
            success: true,
            message: "Waiting edited successfully",
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// Editing a downloads
const editdownloads = async (req, res) => {
    const { id, data } = req.body

    if (!id || !data) {
        return res
            .status(400)
            .json({ success: false, message: "Required fields are missing" });
    }

    try {
        const editeddownloads = await DownloadModel.findByIdAndUpdate(id, data, { new: true })

        if (!editeddownloads) {
            res.status(400).json({ success: false, message: "Waiting doesn't exist" });
        }

        return res.status(200).json({
            success: true,
            message: "Waiting edited successfully",
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// Deleting a Waiting
const removeWaiting = async (req, res) => {
    const { id } = req.body

    if (!id) {
        return res
            .status(400)
            .json({ success: false, message: "Required fields are missing" });
    }

    try {
        const confirmationWaiting = await WaitinglistModel.findByIdAndDelete(id)

        if (!confirmationWaiting) {
            res.status(400).json({ success: false, message: "Waiting doesn't exist" });
        }

        return res.status(200).json({
            success: true,
            message: "Waiting deleted successfully",
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// Deleting a Waiting
const removedownloads = async (req, res) => {
    const { id } = req.body

    if (!id) {
        return res
            .status(400)
            .json({ success: false, message: "Required fields are missing" });
    }

    try {
        const confirmationWaiting = await DownloadModel.findByIdAndDelete(id)

        if (!confirmationWaiting) {
            res.status(400).json({ success: false, message: "Waiting doesn't exist" });
        }

        return res.status(200).json({
            success: true,
            message: "Waiting deleted successfully",
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// Get all Waitings
const getWaitings = async (req, res) => {
    try {
        const waitings = await WaitinglistModel.find({ archived: false })
        return res.status(200).json({
            success: true,
            message: "Waitings fetched successfully",
            waitings
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}
// Get all downloads
const getdownloads = async (req, res) => {
    try {
        const downloads = await DownloadModel.find({ archived: false })
        return res.status(200).json({
            success: true,
            message: "downloads fetched successfully",
            downloads
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// Get archived Waitings
const getarchivedWaitings = async (req, res) => {
    try {
        const waitings = await WaitinglistModel.find({ archived: true })
        return res.status(200).json({
            success: true,
            message: "Waitings fetched successfully",
            waitings
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}
// Get archived downloads
const getarchiveddownloads = async (req, res) => {
    try {
        const downloads = await DownloadModel.find({ archived: true })
        return res.status(200).json({
            success: true,
            message: "Waitings fetched successfully",
            downloads
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// Archive all waitings
const archiveAllWaitings = async (req, res) => {
    try {
        const confirmation = await WaitinglistModel.updateMany({ archived: false }, { $set: { archived: true } })
        if (!confirmation) {
            res.status(500).json({ success: false, message: "Server error" });
        }

        return res.status(200).json({
            success: true,
            message: "Archived all successfully",
            confirmation
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}
// Archive all downloads
const archiveAlldownloads = async (req, res) => {
    try {
        const confirmation = await DownloadModel.updateMany({ archived: false }, { $set: { archived: true } })
        if (!confirmation) {
            res.status(500).json({ success: false, message: "Server error" });
        }

        return res.status(200).json({
            success: true,
            message: "Archived all successfully",
            confirmation
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// Delete all waitings
const removeAllWaitings = async (req, res) => {
    try {
        const confirmation = await WaitinglistModel.deleteMany({ archived: true })
        if (!confirmation) {
            res.status(500).json({ success: false, message: "Server error" });
        }

        return res.status(200).json({
            success: true,
            message: "Deleted all successfully",
            confirmation
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}
// Delete all downloads
const removeAlldownloads = async (req, res) => {
    try {
        const confirmation = await DownloadModel.deleteMany({ archived: true })
        if (!confirmation) {
            res.status(500).json({ success: false, message: "Server error" });
        }

        return res.status(200).json({
            success: true,
            message: "Deleted all successfully",
            confirmation
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

// Get new Waitings
const getNewWaitings = async (req, res) => {
    try {
        let d = new Date();
        d.setDate(d.getDate() - 1);
        const newWaitings = await WaitinglistModel.find({ "createdAt": { $gt: d }, archived: false })

        if (!newWaitings) {
            res.status(500).json({ success: false, message: "Server error" });
        }

        return res.status(200).json({
            success: true,
            message: "Fetched new records successfully",
            newWaitings
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}
// Get new downloads
const getNewdownloads = async (req, res) => {
    try {
        let d = new Date();
        d.setDate(d.getDate() - 1);
        const newdownloads = await DownloadModel.find({ "createdAt": { $gt: d }, archived: false })

        if (!newdownloads) {
            res.status(500).json({ success: false, message: "Server error" });
        }

        return res.status(200).json({
            success: true,
            message: "Fetched new records successfully",
            newdownloads
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

module.exports = {
    addContact, addWaiting, editContact, editWaiting, removeContact, removeWaiting, getContacts, getWaitings, getarchivedContacts, getarchivedWaitings, archiveAllWaitings, archiveAllContacts, removeAllWaitings, removeAllContacts, getNewWaitings, getNewContacts, getdownloads, editdownloads, removeAlldownloads, removedownloads, archiveAlldownloads, getNewdownloads, getarchiveddownloads, adddownloads
}