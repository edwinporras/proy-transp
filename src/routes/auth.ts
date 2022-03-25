import {Router} from 'express';
import { singnup, singnin, profile } from '../controllers/auth.controller'

const router: Router = Router();

router.post('/singnup', singnup);
router.post('/singnin', singnin);
router.get('/profile', profile);

export default router;
