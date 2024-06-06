const express = require("express");
const upload = require('../middlewares/uploadFiles')
const verifyToken = require("../middlewares/verifyToken")

const router = express.Router();
const ProjectController = require('../controllers/project.controller')

router.get('/',ProjectController.getProjects)
router.post('/',verifyToken,ProjectController.createProject)
router.post('/:id/upload-image',verifyToken,upload.single('image'),ProjectController.uploadProjectImage)
router.get('/:id/upload-image',ProjectController.getProjectImage)
router.get('/:id',ProjectController.getProjectById)
router.patch('/:id',verifyToken,ProjectController.updateProject)
router.delete('/:id',verifyToken,ProjectController.deleteProject)

module.exports = router