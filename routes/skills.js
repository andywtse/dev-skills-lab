import { Router } from 'express';
import * as skillsController from '../controllers/skills.js';

const router = Router()

/* GET home page. */
router.get('/', skillsController.index);
router.get('/new', skillsController.new);
router.get('/:id', skillsController.show);

router.post('/', skillsController.create);

export { 
  router
}
