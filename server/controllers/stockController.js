import Stock from "../models/Stock.js";

// fetch all stocks
export const getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find().populate("product");
    res.json(stocks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create new stock
export const addStock = async (req, res) => {
  const { product, quantity } = req.body;
  try {
    const stock = new Stock({ product, quantity });
    await stock.save();
    req.status(200).json(stock);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// update stock
export const updateStock = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  try {
    const stock = await Stock.findByIdAndUdpdate(
      id,
      { quantity, lastUpdated: Date.now() },
      { new: true }
    );
    res.json(stock);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// delete stock
export const deleteStock = async (req, res) => {
  const { id } = req.params;
  try {
    const stock = await Stock.findByIdAndDelete(id);
    res.json(stock);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}


// fetch forecase 
export const forecastStock = async (req, res) => {
    const { period } = req.query;
    try {
        const forecast = {}; // logika prediction 
        res.status(200).json(forecast);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}