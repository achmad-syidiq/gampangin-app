import Product from '../models/Product.js';

export const getProductService = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createProductService = async (req, res) => {
    const { name, sku, category, status, qty, modal, price } = req.body;

    try {
        const newProduct = new Product({
            name,
            sku,
            category,
            status,
            qty,
            modal,
            price,
        });

        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateProductService = async (req, res) => {
    const { id: _id } = req.params;
    const { name, sku, category, status, qty, modal, price } = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            _id,
            { name, sku, category, status, qty, modal, price },
            { new: true, runValidators: true }
        );

        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });

        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: 'Failed updating product', error: error.message });
    }
};

export const deleteProductService = async (req, res) => {
    const { id: _id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(_id);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });

        res.json({ message: 'Product deleted successfully', deletedProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
