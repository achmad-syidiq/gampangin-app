import mongoose from 'mongoose';

const PurchaseSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    status: { type: String, enum: ['Pending', 'Completed'], required: true },
    orderDate: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('Purchase', PurchaseSchema);