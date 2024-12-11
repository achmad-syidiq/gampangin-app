import express from 'express';
import {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
} from '../controllers/categoryController.js';


const Router = express.Router();

Router.get('/', getCategories)
Router.post('/', createCategory)
Router.put('/:id', updateCategory)
Router.delete('/:id', deleteCategory)

export default Router;