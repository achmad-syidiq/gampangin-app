import Category from '../models/Category.js';


export const getCategoryService = async (req, res) => {
    try {
        const category = await Category.find()
        res.json(category)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createCategoryService = async (req, res) => {
    const { name, description } = req.body;
    try {
        const newCategory = new Category({ name, description })
        await newCategory.save()
        res.status(201).json(newCategory)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


export const updateCategoryService = async (req, res) => {
    const { id: _id } = req.params;
    const { name, description } = req.body;
    try {
        const updateCategory = await Category.findByIdAndUpdate(
            id, 
            {name, description}, 
            {new: true},
        );
        res.json(updateCategory)
    } catch (error) {
        res.status(400).send({ message: 'Failed updating category'})
    }
}


export const deleteCategoryService = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const deleteCategory = await Category.findByIdAndDelete(_id);
        if (!deleteCategory) return res.status(404).send({ message: 'Category not found.' });
        res.json(deleteCategory)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}