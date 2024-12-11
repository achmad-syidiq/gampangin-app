import mongoose from 'mongoose';
import FPGrowth from 'node-fpgrowth';

const ReportSchema = new mongoose.Schema({}, { strict: false });

ReportSchema.statics.generateDailySalesReport = async function () {
    // Logic for daily sales report
};

ReportSchema.statics.generateFPStockRecommendation = async function () {
    const salesData = await mongoose.model('Sale').find().lean();
    const transactions = salesData.map(sale => [sale.product.toString()]);
    
    const fpg = new FPGrowth(0.5); // Minimum support threshold
    fpg.exec(transactions, (error, frequentPatterns) => {
        if (error) throw error;

        const recommendations = frequentPatterns.map(pattern => ({
            products: pattern.items,
            support: pattern.support
        }));

        return recommendations;
    });
};

export default mongoose.model('Report', ReportSchema);
