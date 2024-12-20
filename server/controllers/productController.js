import Product from '../models/Product.js';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id).populate('category');
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, sku, category, status, qty, modal, price } = req.body;
  try {
    const product = new Product({
      name,
      sku,
      category,
      status,
      qty,
      modal,
      price,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id: productId } = req.params;
  const { name, sku, category, status, qty, modal, price } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name, sku, category, status, qty, modal, price },
      { new: true, runValidators: true }
    );

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id: productId } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};