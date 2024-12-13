import mongoose from "mongoose";
import faker from "faker";
import Category from "../models/Category.js";
import Product from "../models/Product.js";
import Purchase from "../models/Purchase.js";
import Sale from "../models/Sale.js";
import Stock from "../models/Stock.js";
import Report from "../models/Report.js";

// Replace with your MongoDB connection string
const DB_URI = "mongodb+srv://admin:admin123@gampangin.goy1j.mongodb.net/?retryWrites=true&w=majority&appName=gampangin";

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(DB_URI);

    // Predefined categories for bengkel
    const predefinedCategories = [
      { name: "Sparepart Motor" },
      { name: "Sparepart Mobil" },
      { name: "Oli dan Pelumas" },
      { name: "Ban dan Velg" },
      { name: "Aki dan Kelistrikan" },
      { name: "Alat Perkakas" },
    ];

    // Generate random categories
    for (let i = 0; i < 64; i++) {
      predefinedCategories.push({ name: faker.commerce.department() });
    }

    // Seed Categories (70 entries)
    const createdCategories = await Category.insertMany(predefinedCategories);
    console.log("Categories seeded");

    // Get all category IDs for later use
    const categoryIds = await Category.find().select("_id");

    // Seed Products (634 entries)
    const automotiveParts = [
      "Brake Pads",
      "Spark Plugs",
      "Oil Filter",
      "Air Filter",
      "Car Battery",
      "Clutch Kit",
      "Alternator",
      "Starter Motor",
      "Timing Belt",
      "Radiator",
      "Wiper Blades",
      "Headlights",
      "Tail Lights",
      "Fuel Pump",
      "Exhaust System",
    ];

    const products = [];
    for (let i = 0; i < 63; i++) {
      const randomCategory = categoryIds[Math.floor(Math.random() * categoryIds.length)];
      const randomPart = automotiveParts[Math.floor(Math.random() * automotiveParts.length)];
      products.push({
        name: randomPart, // Use predefined automotive part names
        sku: faker.random.alphaNumeric(10), // Random SKU
        category: randomCategory._id, // Random category
        status: faker.random.arrayElement(["active", "in-active"]), // Random status
        qty: faker.datatype.number({ min: 1, max: 100 }), // Random quantity
        modal: parseFloat(faker.commerce.price(100, 1000)), // Random modal price
        price: parseFloat(faker.commerce.price(100, 2000)), // Random selling price
      });
    }
    const createdProducts = await Product.insertMany(products);
    console.log("Products seeded");

    // Seed Purchases (10,000 entries)
    const productIds = createdProducts.map((product) => product._id);
    const purchases = [];
    for (let i = 0; i < 100; i++) {
      const randomProduct = productIds[Math.floor(Math.random() * productIds.length)];
      purchases.push({
        product: randomProduct,
        status: faker.random.arrayElement(["Pending", "Completed"]),
      });
    }
    await Purchase.insertMany(purchases);
    console.log("Purchases seeded");

    // Seed Sales (500,000 entries)
    const sales = [];
    for (let i = 0; i < 500; i++) {
      const randomProduct = productIds[Math.floor(Math.random() * productIds.length)];
      sales.push({
        product: randomProduct,
        price: parseFloat(faker.commerce.price(150, 3000)),
        quantity: faker.datatype.number({ min: 1, max: 50 }),
      });
    }
    await Sale.insertMany(sales);
    console.log("Sales seeded");

    // Seed Stocks (634 entries)
    const stocks = [];
    for (let i = 0; i < 64; i++) {
      const randomProduct = productIds[Math.floor(Math.random() * productIds.length)];
      stocks.push({
        product: randomProduct,
        quantity: faker.datatype.number({ min: 10, max: 1000 }),
      });
    }
    await Stock.insertMany(stocks);
    console.log("Stocks seeded");

    // Seed Reports (20,000 entries)
    const reports = [];
    for (let i = 0; i < 200; i++) {
      reports.push({
        date: faker.date.past(1), // Dates within the last year
        salesData: {
          totalSales: faker.commerce.price(1000, 100000),
          numberOfSales: faker.datatype.number({ min: 1, max: 500 }),
        },
        stockData: {
          totalStockValue: faker.commerce.price(5000, 500000),
          itemsOutOfStock: faker.datatype.number({ min: 0, max: 20 }),
        },
      });
    }
    await Report.insertMany(reports);
    console.log("Reports seeded");

    console.log("Seeding completed!");
    mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding data:", error);
    mongoose.disconnect();
  }
};

seedData();