const express = require("express");
const upload = require('../middlewares/uploadFiles')
const verifyToken = require("../middlewares/verifyToken")

const router = express.Router();
const SkillsController = require('../controllers/skills.controller')

router.get('/',SkillsController.getSkills)
router.post('/',verifyToken,SkillsController.addSkill)
router.patch('/:id',verifyToken,SkillsController.updateSkill)
router.delete('/:id',verifyToken,SkillsController.deleteSkill)
router.post('/:id/upload-image',verifyToken,upload.single('image'),SkillsController.uploadSkillImage)
router.get('/:id/upload-image',SkillsController.getSkillImage)
module.exports = router