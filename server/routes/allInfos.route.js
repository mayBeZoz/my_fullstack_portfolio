const express = require("express");
const upload = require('../middlewares/uploadFiles')
const verifyToken = require("../middlewares/verifyToken")

const router = express.Router();
const AllInfosController = require('../controllers/allInfos.controller')

router.get('/',AllInfosController.getAllInfos)
router.post('/',verifyToken,AllInfosController.createInfo)
router.post('/:id/upload-image',verifyToken,upload.single('image'),AllInfosController.uploadInfoPersonalImage)
router.get('/:id/upload-image',AllInfosController.getInfoPersonalImage)
router.post('/:id/upload-resume',verifyToken,upload.single('resume'),AllInfosController.uploadInfoResume)
router.get('/:id/upload-resume',AllInfosController.getInfoResume)
router.get('/:id',AllInfosController.getInfoById)
router.patch('/:id',verifyToken,AllInfosController.updateInfoById)
router.delete('/:id',verifyToken,AllInfosController.deleteInfoById)

module.exports = router