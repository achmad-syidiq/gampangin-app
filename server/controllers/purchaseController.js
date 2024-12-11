import Purchase from '../models/Purchase.js';

export const createPurchase = async (req, res) => {
    try {
        const purchase = new Purchase(req.body);
        await purchase.save();
        res.status(201).json(purchase);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getPurchases = async (req, res) => {
    try {
        const purchases = await Purchase.find().populate('product');
        res.status(200).json(purchases);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
