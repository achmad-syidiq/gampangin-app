import mongoose from 'mongoose';


const Category = mongoose.model(
    'Category', new mongoose.Schema({
        name : {
            type: 'string',
            required: true,
        }, 
        description : {
            type: 'string',
            required: true,
        }
    })
)

export default Category;