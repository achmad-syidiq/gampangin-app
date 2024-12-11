import express from 'express';
import { createPurchase, getPurchases } from '../controllers/purchaseController.js';

const Router = express.Router();

Router.get('/', getPurchases)
Router.post('/', createPurchase)

export default Router;