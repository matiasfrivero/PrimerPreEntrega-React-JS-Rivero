const products = [
    {
        id: "1",
        name: "Nike Dunk Low",
        price: 120,
        category: "Nike",
        img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4ff93ad3-0afa-4d67-95b9-b96c8f46c2b5/dunk-low-next-nature-zapatillas-JMhsZ8.png",
        stock: 3,
        description: "descripcion de zapas"

    },
    {
        id: "2",
        name: "Jordan Retro",
        price: 200,
        category: "Nike",
        img:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0f72dde6-ed46-4e8b-8e54-90a0fefee6ec/air-jordan-1-low-zapatillas-2mLM4c.png",
        stock: 3,
        description: "descripcion de zapas"

    },
    {
        id: "3",
        name: "Adidas Forum Low White",
        price: 150,
        category: "Adidas",
        img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/eed845ab529a46b79ba7acd80080c6df_9366/Zapatilla_Forum_84_Low_ADV_Blanco_FY7998_01_standard.jpg",
        stock: 3,
        description: "descripcion de zapas"

    },
    {
        id: "4",
        name: "Adidas Forum Low",
        price: 140,
        category: "Adidas",
        img:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0220eefa14684de2a657aedf00ef59b1_9366/Zapatilla_Forum_84_Low_Blanco_GW4332_01_standard.jpg",
        stock: 3,
        description: "descripcion de zapas"

    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 1000)
    })
}