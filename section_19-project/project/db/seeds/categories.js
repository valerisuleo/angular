let collection = [
    {
        categoryName: 'Bread',
        isActive: false,
    },
    {
        categoryName: 'Dairy',
        isActive: false,
    },
    {
        categoryName: 'Fruits',
        isActive: false,
    },
    {
        categoryName: 'Seasoning and Spice',
        isActive: false,
    },
    {
        categoryName: 'Vegetables',
        isActive: false,
    },
]

collection = collection.map((item, index) => {
    return {
        ...item,
        seqN: index + 1
    }
})

// const nestedCollection = [];

module.exports = {
    collection
}
