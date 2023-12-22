import express from 'express';
import {
    uploadMethod
} from '../../controllers/upload/upload.controller'
import {uploadMiddleware} from '../../middlewares/upload';
const router = express.Router();

//api/upload


router.post('/', uploadMiddleware, uploadMethod);//api/productos  -> crea una nueva categoria


export default router;