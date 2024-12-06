import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Define schema for the Product model
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Nama produk harus diisi'],
    },
    sku: {
      type: String,
      required: [true, 'SKU harus diisi'],
      unique: true,
    },
    category: {
      type: String,
      required: [true, 'Kategori harus diisi'],
    },
    status: {
      type: String,
      enum: ['active', 'in-active'],
      default: 'active',
    },
    qty: {
      type: Number,
      required: true,
      min: [0, 'Quantity tidak boleh kurang dari 0'],
    },
    modal: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt
  }
);

// Create Product model based on the schema
const Product = model('Product', productSchema);

export default Product;
