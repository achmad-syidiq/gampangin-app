import express, { Router } from "express";
import { getStocks, createStock } from "../controllers/stockController.js";

const router = express.Router();

router.get('/', getStocks)
router.post('/', createStock)

export default router