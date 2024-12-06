import express from 'express';
import {
    getCategoryService,
    createCategoryService,
    updateCategoryService,
    deleteCategoryService,
} from '../controllers/categoryController.js';


const Router = express.Router();

Router.get('/', getCategoryService)
Router.get('/', createCategoryService)
Router.put('/:id', updateCategoryService)
Router.delete('/:id', deleteCategoryService)

export default Router;