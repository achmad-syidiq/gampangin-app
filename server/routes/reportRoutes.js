import {express, Routes} from "express";
import { generateDailySalesReport, generateFPStockRecommendation } from "../controllers/reportController.js";


const router = express.Router();

router.get('/daily-sales-report', generateDailySalesReport)
router.get('/fp-stock-recommendation', generateFPStockRecommendation)

export default router
