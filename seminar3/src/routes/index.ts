//router index file
import { Router } from 'express';
import user from './user';

const router = Router();

router.use('/api/user', user);

export default router;