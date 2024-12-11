import Report from '../models/Report.js';

export const generateDailySalesReport = async (req, res) => {
    try {
        const report = await Report.generateDailySalesReport();
        res.status(200).json(report);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const generateFPStockRecommendation = async (req, res) => {
    try {
        const recommendations = await Report.generateFPStockRecommendation();
        res.status(200).json(recommendations);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
