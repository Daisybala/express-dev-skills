const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill
};

function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' });
  }

function show(req,res){
    res.render('skills/show',{
        skill: Skill.getOne(req.params.id),
        title: 'skill Details'
    })
}
function index(req, res) {
    res.render('skills/index', {
    // Do not use a leading slash when rendering!
    skills: Skill.getAll(),
    title: 'All Skills'
    });
}