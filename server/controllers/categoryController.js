import Category from '../models/Category.js';


export const getCategories = async (req, res) => {
    try {
        const category = await Category.find()
        res.json(category)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createCategory = async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export const updateCategory = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const name = new Category(req.body);
        const updateCategory = await Category.findByIdAndUpdate(id, {name}, {new: true});
        res.json(updateCategory)
    } catch (error) {
        res.status(400).send({ message: 'Failed updating category'})
    }
}


export const deleteCategory = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const deleteCategory = await Category.findByIdAndDelete(_id);
        if (!deleteCategory) return res.status(404).send({ message: 'Category not found.' });
        res.json(deleteCategory)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}