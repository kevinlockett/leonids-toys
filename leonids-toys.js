// 1. Data Types | #data
// 2. Data Structures | #data #objects #arrays
// 3. Representing Toys as Objects | #data #arrays
// 4. Toy Collection | #data #arrays

const toys = [
    {
        id: 1,
        code: "horseAutomata",
        name: "3D Wood Craft Mechanical Horse Automation Model",
        description: "Crafted from laser cut cabinet grade plywood and carefully selected hardwood, this kit assembles into a mesmerizing animated horse. A simple turn of the crank brings the piece to life.",
        assemblyRequired: true,
        manufacturer: "Abong, Inc",
        price: 55.63,
        weight: "2.19 lb",
        dimensions: "12 x 5.5 x 12.5 inches"
    },
    {
        id: 2,
        code: "woodenTrain",
        name: "Handmade Wooden Train - extra long",
        description: "Handmade from beech wood, this set includes the locomotive, one passenger gar and three freight cars.",
        assemblyRequired: false,
        manufacturer: "Odin Parker",
        price: 110.00,
        dimensions: "32 x 4 x 5 inches"
    },
    {
        id: 3,
        code: "rockingHorse",
        name: "Amish Made Oak Deluxe Rocking Horse",
        description: "This rocking horse features leather ears, eyes, and a wonderful mane and tail! The deluxe horse has shaped legs and a comfortable seat! Heirloom Quality. Handcrafted in the USA by Genuine Amish Craftsman from solid REAL Hard Wood.",
        assemblyRequired: false,
        manufacturer: "houzz",
        price: 328.00,
        dimensions: "34 x 11.5 x 17 inches"
    }
]

// 5. Displaying Toy Properties | #data #arrays #iteration
console.log(toys)

// 6. New Toys | adding new item - push() #data #arrays 
const woodenBears = {
    id: 4,
    code: "woodenBearFamilyToy",
    name: "Handmade Wooden Bear Family",
    description: "Our hand-carved wooden figurines dad bear, mom bear and baby bears is an excellent educational toy. The flower pattern is made by hand, by burning. If you choose a style with leaf motif, then flower pattern on all toys will be on both sides. Good for Montessori and Waldorf education.",
    assemblyRequired: false,
    manufacturer: "tinyfoxhole",
    price: 54.00,
    dimensions: "3.54 x 5.51 x 0.7 inches"
}

const buildingBlocks = {
    id: 5,
    code: "buildingBlockSet",
    name: "Wooden Building Blocks Set",
    description: "Hours of educational fun: The Melissa & Doug wooden building blocks set includes 100 durable wooden blocks in 4 different colors and 9 shapes; it’s a classic educational toy that provides hours of hands on, screen free play and learning.",
    assemblyRequired: false,
    manufacturer: "Melissa & Doug",
    price: 16.99,
    dimensions: "9 x 3.5 x 13.5 inches"
}

toys.push(woodenBears)

toys.push(buildingBlocks)

for (const toyObj of toys) {
    console.log(`The ${toyObj.name} costs ${toyObj.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`)
}

// 7. Toy Catalog | #data #arrays #iteration
for (const toy of toys) {
    console.log(`The ${toy.manufacturer} ${toy.name} costs ${toy.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`)
}


// 8. Raising Prices | #data #arrays #iteration
for (const toy of toys) {
    let toyIncreaseRate = toy.price * .05
    let toyIncreasedPrice = toy.price + toyIncreaseRate
    console.log(`The ${toy.manufacturer} ${toy.name} costs ${toyIncreasedPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`)
}


// 9. Helping Customers Find the Right Toy | if-else #data #arrays #iteration
for (const toy of toys) {
    if (toy.id === 3) {
        let toyIncreaseRate = toy.price * .05
        let toyIncreasedPrice = toy.price + toyIncreaseRate
        console.log(`The ${toy.manufacturer} ${toy.name} costs ${toyIncreasedPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`)
    }
}

// 10. Adding Toys the Right Way | #functions #properties #arrays
const sled = {
    code: "woodenSled",
    name: "Kids' Pull SLed and Cushion Set",
    description: "Built to last for generations of snowy fun, our heirloom-quality snow sled is equipped with a cushion for comfort. Pull it through the woods or the backyard, it's made for winter.",
    assemblyRequired: false,
    manufacturer: "L.L.Bean",
    price: 179.00,
    dimensions: "31 x 14.5 x 13 inches"
}

const tops = {
    code: "spinningTops",
    name: "Plan Toys Spinning Tops",
    description: "The Spinning Tops set consists of 4 different tops and colors conveniently packaged in a storage tin. Good for developing fine motor skills and bring fun time to you and your friends.",
    assemblyRequired: false,
    manufacturer: "PlanToys",
    price: 10.00,
    dimensions: "1.57 x 1.57 x 1.54 inches"
}

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy
    toys.push(toyObject)
}

addToyToInventory(sled)
addToyToInventory(tops)

for (const toy of toys) {
    let toyIncreaseRate = toy.price * .05
    let toyIncreasedPrice = toy.price + toyIncreaseRate
    console.log(`The ${toy.manufacturer} ${toy.name} costs ${toyIncreasedPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}. It's dimensions are ${toy.dimensions}.`)    
}

// EC 1. Discontinued Toys | Remove Item Function #splice() #arrays #iteration
const removeProduct = (id) => {
    for (const toy of toys) {
        if (toy.id === id) {
            toys.splice(toys.indexOf(toy), 1)
        }
        
    }
}

removeProduct(7)

console.log(toys)

// EC 2. The Perry Scope

const currentInventory = [
    "Muscle Man",
    "Dora the Scientist",
    "Princess Sparkles",
    "Perry Scope",
    "Explorer Backpack",
    "Space Scout Suit",
    "Geology Mineral Dig Kit",
    "Perry Scope"
]

const sellPerryScope = () => {

    let availableForPurchase = false
    
    for (const toy of currentInventory) {
        if (toy === "Perry Scope") {
            availableForPurchase = true
        }
    }

    if (availableForPurchase) {
        console.log("Enjoy your new Perry Scope")
    }
}

sellPerryScope()