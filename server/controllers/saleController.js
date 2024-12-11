import Sale from '../models/Sale.js';

export const createSale = async (req, res) => {
    try {
        const sale = new Sale(req.body);
        await sale.save();
        res.status(201).json(sale);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getSales = async (req, res) => {
    try {
        const sales = await Sale.find().populate('product');
        res.status(200).json(sales);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
