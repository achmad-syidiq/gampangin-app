import mongoose from 'mongoose'

const CategorySchema = mongoose.Schema({
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Category = mongoose.model('Category', CategorySchema);

export default Category