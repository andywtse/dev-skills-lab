import { Router } from 'express';
import * as skillsController from '../controllers/skills.js';

const router = Router()

/* GET home page. */
router.get('/', skillsController.index);
router.get('/new', skillsController.new);
router.get('/:id', skillsController.show);
router.get('/:id/edit', skillsController.edit);

// POST
router.post('/', skillsController.create);

// DELETE
router.delete('/:id', skillsController.delete);

// PUT
router.put('/:id', skillsController.update);

export { 
  router
}
