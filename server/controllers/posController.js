import Transaction from "../models/Transaction.js";
import Product from "../models/Product.js";

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().populate("items.product");
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    res.status(200).json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createTransaction = async (req, res) => {
  try {
    const { items } = req.body;

    let totalAmount = 0;

    for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product || product.stock < item.quantity) {
        return res.status(400).json({ message: "Insufficient stock for product" });
      }

      totalAmount += product.price * item.quantity;

      // Update stock
      product.stock -= item.quantity;
      await product.save();
    }

    const transaction = new Transaction({
      items,
      totalAmount,
    });

    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
