const express = require("express");
const upload = require('../middlewares/uploadFiles')
const verifyToken = require("../middlewares/verifyToken")

const router = express.Router();
const InfosController = require('../controllers/infos.controller')

router.get('/',InfosController.getInfos)
router.post('/',verifyToken,InfosController.createInfo)
router.post('/:id/upload-image',verifyToken,upload.single('image'),InfosController.uploadInfoPersonalImage)
router.get('/:id/upload-image',InfosController.getInfoPersonalImage)
router.post('/:id/upload-resume',verifyToken,upload.single('resume'),InfosController.uploadInfoResume)
router.get('/:id/upload-resume',InfosController.getInfoResume)
router.get('/:id',InfosController.getInfoById)
router.patch('/:id',verifyToken,InfosController.updateInfoById)
router.delete('/:id',verifyToken,InfosController.deleteInfoById)

module.exports = router