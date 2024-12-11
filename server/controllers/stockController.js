import Stock from '../models/Stock.js';

export const createStock = async (req, res) => {
    try {
        const stock = new Stock(req.body);
        await stock.save();
        res.status(201).json(stock);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getStocks = async (req, res) => {
    try {
        const stocks = await Stock.find().populate('product');
        res.status(200).json(stocks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
