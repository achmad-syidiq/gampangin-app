import express from 'express';
import {
    getProductService,
    createProductService,
    updateProductService,
    deleteProductService
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProductService);
router.post('/', createProductService);
router.put('/:id', updateProductService);
router.delete('/:id', deleteProductService);

export default router;
