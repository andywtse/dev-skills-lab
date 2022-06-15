import { Router } from 'express';
import * as skillsController from '../controllers/skills.js';

const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' })
})

export { 
  router
}
