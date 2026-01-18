import express, { Router } from 'express';
import { commentController } from './comment.controller';

const router = express.Router();


router.post("/",commentController.createComment)

export const commentRouter: Router = router;