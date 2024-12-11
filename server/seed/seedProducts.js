// seed.js
import mongoose from "mongoose";
import Product from "../models/Product.js";
import dummiesProduct from "../data/dummiesProduct.js";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:admin123@gampangin.goy1j.mongodb.net/?retryWrites=true&w=majority&appName=gampangin");
        console.log("Database connected...");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
};

const seedDatabase = async () => {
    try {
        // Hapus semua data di koleksi Product sebelum menambahkan data baru
        await Product.deleteMany();

        // Menambahkan data dummy ke dalam koleksi Product
        const products = dummiesProduct.map(product => ({
            name: product[0],
            sku: product[1],
            category: product[2],
            status: product[3],
            qty: product[4],
            modal: product[5],
            price: product[6]
        }));
        
        await Product.insertMany(products);
        console.log("Dummy products added successfully!");

        // Tutup koneksi database setelah seeding selesai
        mongoose.connection.close();
    } catch (error) {
        console.error("Error seeding database:", error);
        mongoose.connection.close();
    }
};

const start = async () => {
    await connectDB();
    await seedDatabase();
};

start();
