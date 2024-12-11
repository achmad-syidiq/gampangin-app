import express, { Router } from "express";
import { getSales, createSale } from "../controllers/saleController.js";


const router = express.Router();

router.get('/', getSales)
router.post('/', createSale)

export default router