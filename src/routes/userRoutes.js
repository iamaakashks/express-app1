import express from 'express'
export const router = express.Router();
import * as userController from '../controller/userController.js'
import logger from '../middleware/logger.js'

router.use(logger);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById)
router.post("/", userController.createUser)
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUserById);