const express = require("express");
const {
    addContact, addWaiting, editContact, editWaiting, removeContact, removeWaiting, getContacts, getWaitings, getarchivedContacts, getarchivedWaitings, archiveAllWaitings, archiveAllContacts, removeAllWaitings, removeAllContacts, getNewContacts, getNewWaitings, getdownloads, getNewdownloads, getarchiveddownloads, adddownloads, editdownloads, removedownloads, archiveAlldownloads
} = require('../controllers/lists.controller')

const router = express.Router();



router.get('/contacts', getContacts)
router.get('/downloads', getdownloads)

router.get('/new-contacts', getNewContacts)
router.get('/new-downloads', getNewdownloads)

router.get('/archived-contacts', getarchivedContacts)
router.get('/archived-downloads', getarchiveddownloads)

router.get('/waitings', getWaitings)
router.get('/new-waitings', getNewWaitings)
router.get('/archived-waitings', getarchivedWaitings)

router.post('/contacts/add-contact', addContact)
router.post('/waitings/add-waiting', addWaiting)
router.post('/downloads/add-downloads', adddownloads)

router.post('/contacts/edit-contact', editContact)
router.post('/waitings/edit-waiting', editWaiting)
router.post('/downloads/edit-downloads', editdownloads)

router.post('/contacts/remove-contact', removeContact)
router.post('/waitings/remove-waiting', removeWaiting)
router.post('/downloads/remove-downloads', removedownloads)

router.get('/waitings/archive-all', archiveAllWaitings)
router.get('/contacts/archive-all', archiveAllContacts)
router.get('/downloads/archive-all', archiveAlldownloads)

router.get('/waitings/remove-all', removeAllWaitings)
router.get('/contacts/remove-all', removeAllContacts)
router.get('/downloads/remove-all', removedownloads)


module.exports = router;