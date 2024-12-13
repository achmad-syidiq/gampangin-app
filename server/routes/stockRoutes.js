import express from "express";
import {
    getStocks,
    addStock,
    updateStock,
    deleteStock,
    forecastStock,
} from "../controllers/stockController.js";

const router = express.Router();

router.get("/", getStocks);
router.post("/", addStock);
router.put("/:id", updateStock);
router.delete("/:id", deleteStock);
router.get("/forecast", forecastStock);

export default router;