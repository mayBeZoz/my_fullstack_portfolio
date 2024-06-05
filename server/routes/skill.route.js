const express = require("express");

const router = express.Router();
const SkillsController = require('../controllers/skills.controller')

router.get('/',SkillsController.getSkills)
router.post('/',SkillsController.addSkill)
router.patch('/:id',SkillsController.updateSkill)
router.delete('/:id',SkillsController.deleteSkill)

module.exports = router