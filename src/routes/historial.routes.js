import {Router} from 'express';
import { verHistorial, guardarAcronimo } from '../controllers/historial';

const router = Router();

router.post('/verHistorial', verHistorial);
router.post('/guardarAcronimo', guardarAcronimo);

export default router;