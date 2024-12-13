import mongoose from 'mongoose';

const StockSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    lastUpdated: { type: Date, default: Date.now }
});

StockSchema.methods.minStockAlert = function () {
    if (this.quantity < 10) {
        return `Low stock alert for product ${this.product}`;
    }
    return null;
};

export default mongoose.model('Stock', StockSchema);
