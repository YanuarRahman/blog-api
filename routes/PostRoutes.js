import  Express  from "express";
import {addData, detailPost, viewPost, updatePost, deletePost} from '../controllers/PostController.js'

// important 
const router = Express.Router();

router.post('/post',addData);
router.get('/post', viewPost);
router.get('/post/:id', detailPost);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);

export default router