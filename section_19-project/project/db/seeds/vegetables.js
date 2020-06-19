let collection = [
    {
        title: 'Oaklands Selection Pointed Red Peppers ',
        imageUrl: 'https://www.dropbox.com/s/3uvy83gkftwtmln/82632_01.jpg?raw=1',
        price: 1.05,
        category: 'Vegetables',
    },
    {
        title: 'Oaklands Organic Vine Tomatoes',
        imageUrl: 'https://www.dropbox.com/s/7qe68yj8wyh0jd0/84570_01.jpg?raw=1',
        price: 1.60,
        category: 'Vegetables',
    },
    {
        title: 'Oaklands Organic Carrots',
        imageUrl: 'https://www.dropbox.com/s/qf1597z38c1p2sy/84610_01.jpg?raw=1',
        price: 0.95,
        category: 'Vegetables',
    },
    {
        title: 'Oaklands Baby Corn',
        imageUrl: 'https://www.dropbox.com/s/0cd780450mo01ho/82190_65.jpg?raw=1',
        price: 1.09,
        category: 'Vegetables',
    },
    {
        title: 'Oaklands Selection British Piccolo Tomatoes',
        imageUrl: 'https://www.dropbox.com/s/daio1kdyrfw4jkp/82394_01.jpg?raw=1',
        price: 1.45,
        category: 'Vegetables',
    }
]


collection = collection.map((item, index) => {
    return {
        ...item,
        seqN: index + 1,
        categories: [
            {
                name: 'Bread',
                id: 1
            },
            {
                name: 'Dairy',
                id: 2
            },
            {
                name: 'Fruits',
                id: 3
            },
            {
                name: 'Seasoning and Spice',
                id: 4
            },
            {
                name: 'Vegetables',
                id: 5
            }
        ]
    }
})


module.exports = {
    collection
}










