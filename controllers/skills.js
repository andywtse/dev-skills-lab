import { Skill } from '../models/skills.js';

function index(req, res) {
  Skill.find({})
    .then(skills => {
      res.render('skills/index', {
        skills: skills,
        title: 'Current Skill Score'
      });
    })
    .catch(error => {
      console.log(error);
      res.redirect('/');
    })
}

function newSkill(req, res) {
  res.render('skills/new');
}

function create(req, res) {
  Skill.create(req.body)
  .then(skills=>{
    res.redirect('/skills');
  })
  .catch(error=>{
    console.log(error);
    res.redirect('/skills');
  })
}

export {
  index,
  newSkill as new,
  create
}