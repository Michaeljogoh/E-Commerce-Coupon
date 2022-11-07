const { Item } = require('../models');

const createItem = (req , res) =>{
    const {name , price } = req.body;
    if(!name || !price){
        return res.status(422).json({error:"fill in name and price"})
    }
    const newItem = Item.create({name , price})
    return res.status(201).json({newItem})

}

module.exports = {createItem}