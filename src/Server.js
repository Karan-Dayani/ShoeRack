import { createServer, Model, Response } from "miragejs";

createServer({
    models: {
        shoes: Model,
        cartItems: Model
    },

    seeds(server) {
        server.create("shoe", {
            id: 1,
            name: "Men's Running Shoe",
            brand: "Nike",
            price: 129.99,
            color: "Black/White",
            size: [8, 9, 10, 11, 12],
            description: "A comfortable and stylish running shoe for men.",
            gender: "Men",
        })
        server.create("shoe", {
            id: 2,
            name: "Women's Athletic Shoe",
            brand: "Adidas",
            price: 89.99,
            color: "Pink/Gray",
            size: [6, 7, 8, 9],
            description: "A versatile athletic shoe for women.",
            gender: "Women",
        })
        server.create("shoe", {
            id: 3,
            name: "Kids' Sneaker",
            brand: "Puma",
            price: 59.99,
            color: "Blue/Green",
            size: [4, 5, 6, 7],
            description: "A fun and comfortable sneaker for kids.",
            gender: "Kids",
        })
        server.create("shoe", {
            id: 4,
            name: "Casual Loafer",
            brand: "Sperry",
            price: 79.99,
            color: "Brown",
            size: [8, 9, 10, 11],
            description: "A classic brown loafer for casual wear.",
            gender: "Men",
        })
        server.create("shoe", {
            id: 5,
            name: "Women's High Heels",
            brand: "Jimmy Choo",
            price: 249.99,
            color: "Red",
            size: [5, 6, 7, 8],
            description: "Elegant red high heels for women.",
            gender: "Women",
        })
        server.create("shoe", {
            id: 6,
            name: "Men's Hiking Boot",
            brand: "Columbia",
            price: 149.99,
            color: "Gray/Black",
            size: [8, 9, 10, 11, 12],
            description: "Durable hiking boots for outdoor adventures.",
            gender: "Men",
        })
        server.create("shoe", {
            id: 7,
            name: "Running Sneaker",
            brand: "New Balance",
            price: 119.99,
            color: "Blue/Yellow",
            size: [8, 9, 10, 11],
            description: "Performance running sneakers with a stylish design.",
            gender: "Unisex",
        })
        server.create("shoe", {
            id: 8,
            name: "Women's Sandals",
            brand: "Birkenstock",
            price: 69.99,
            color: "White",
            size: [6, 7, 8, 9],
            description: "Comfortable white sandals for women.",
            gender: "Women",
        })
        server.create("shoe", {
            id: 9,
            name: "Men's Dress Shoe",
            brand: "Clarks",
            price: 99.99,
            color: "Black",
            size: [8, 9, 10, 11],
            description: "Classic black dress shoes for men.",
            gender: "Men",
        })
        server.create("shoe", {
            id: 10,
            name: "Women's Sneaker",
            brand: "Reebok",
            price: 79.99,
            color: "Purple/White",
            size: [5, 6, 7, 8],
            description: "Stylish purple and white sneakers for women.",
            gender: "Women",
        })
        server.create("shoe", {
            id: 11,
            name: "Men's Leather Boot",
            brand: "Timberland",
            price: 169.99,
            color: "Brown",
            size: [8, 9, 10, 11, 12],
            description: "Stylish and durable leather boots for men.",
            gender: "Men",
        })
        server.create("shoe", {
            id: 12,
            name: "Women's Running Shoe",
            brand: "Saucony",
            price: 109.99,
            color: "Blue/Pink",
            size: [6, 7, 8, 9],
            description: "High-performance running shoes for women.",
            gender: "Women",
        })
        server.create("shoe", {
            id: 13,
            name: "Kids' Light-Up Sneaker",
            brand: "Skechers",
            price: 49.99,
            color: "Black/Blue",
            size: [4, 5, 6, 7],
            description: "Fun light-up sneakers for kids.",
            gender: "Kids",
        })
        server.create("shoe", {
            id: 14,
            name: "Casual Slip-On Shoe",
            brand: "Vans",
            price: 59.99,
            color: "Gray",
            size: [8, 9, 10, 11],
            description: "Classic gray slip-on shoes for casual wear.",
            gender: "Unisex",
        })
        server.create("shoe", {
            id: 15,
            name: "Women's Ankle Boot",
            brand: "Steve Madden",
            price: 129.99,
            color: "Black",
            size: [5, 6, 7, 8],
            description: "Fashionable black ankle boots for women.",
            gender: "Women",
        })
        server.create("shoe", {
            id: 16,
            name: "Men's Basketball Shoe",
            brand: "Under Armour",
            price: 139.99,
            color: "Red/Black",
            size: [8, 9, 10, 11, 12],
            description: "High-performance basketball shoes for men.",
            gender: "Men",
        })
        server.create("shoe", {
            id: 17,
            name: "Running Trail Shoe",
            brand: "Salomon",
            price: 159.99,
            color: "Green/Black",
            size: [8, 9, 10, 11],
            description: "Trail running shoes designed for outdoor adventures.",
            gender: "Unisex",
        })
        server.create("shoe", {
            id: 18,
            name: "Women's Ballet Flat",
            brand: "Tory Burch",
            price: 89.99,
            color: "Navy",
            size: [6, 7, 8, 9],
            description: "Elegant navy ballet flats for women.",
            gender: "Women",
        })
        server.create("shoe", {
            id: 19,
            name: "Men's Sandal",
            brand: "Crocs",
            price: 39.99,
            color: "Khaki",
            size: [8, 9, 10, 11],
            description: "Comfortable khaki sandals for men.",
            gender: "Men",
        })
        server.create("shoe", {
            id: 20,
            name: "Women's High-Top Sneaker",
            brand: "Converse",
            price: 79.99,
            color: "Black/White",
            size: [5, 6, 7, 8],
            description: "Classic black and white high-top sneakers for women.",
            gender: "Women",
        })
        server.create("shoe", {
            id: 21,
            name: "Men's Skate Shoe",
            brand: "Vans",
            price: 69.99,
            color: "Black/Red",
            size: [8, 9, 10, 11, 12],
            description: "Classic black and red skate shoes for men.",
            gender: "Men",
        })
        server.create("shoe", {
            id: 22,
            name: "Women's Winter Boot",
            brand: "UGG",
            price: 179.99,
            color: "Chestnut",
            size: [5, 6, 7, 8],
            description: "Cozy chestnut winter boots for women.",
            gender: "Women",
        })
        server.create("shoe", {
            id: 23,
            name: "Kids' Soccer Cleats",
            brand: "Adidas",
            price: 59.99,
            color: "Blue/Yellow",
            size: [4, 5, 6, 7],
            description: "Soccer cleats for young athletes.",
            gender: "Kids",
        })
        server.create("shoe", {
            id: 24,
            name: "Casual Canvas Shoe",
            brand: "Toms",
            price: 49.99,
            color: "Navy/White",
            size: [8, 9, 10, 11],
            description: "Comfortable canvas shoes for everyday wear.",
            gender: "Unisex",
        })
        server.create("shoe", {
            id: 25,
            name: "Women's Sandal",
            brand: "Crocs",
            price: 44.99,
            color: "Aqua",
            size: [6, 7, 8, 9],
            description: "Lightweight aqua sandals for women.",
            gender: "Women",
        })
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        this.get("/cart", (schema, request) => {
            return schema.cartItems.all()
        }, { timing: 500 })

        this.post("/cart", (schema, request) => {
            const post = JSON.parse(request.requestBody);
            schema.cartItems.create(post)
        })

        this.get("/shoes", (schema, request) => {
            return schema.shoes.all()
        }, { timing: 500 })

        this.get("/shoes/:id", (schema, request) => {
            const id = request.params.id
            return schema.shoes.find(id)
        }, { timing: 500 })

        this.get("/mens", (schema, request) => {
            return schema.shoes.where({ gender: "Men" })
        }, { timing: 500 })

        this.get("/womens", (schema, request) => {
            return schema.shoes.where({ gender: "Women"})
        }, { timing: 500 })
    }
})