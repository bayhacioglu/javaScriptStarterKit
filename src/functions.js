function addToCart(quantity, productName="Elma") {
    console.log("Sepete eklendi: " + productName + " adet " , quantity)
}

addToCart(10)


let sayHello = ()=>{
    console.log("hello world")
}

sayHello()

let sayHello2 = function () {
    console.log("hello world2")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("elma",2,3)


let product1 = {productName:"elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün :" +product1.productName)
    console.log("adet :" +product1.quantity)
    console.log("Fiyat :" +product1.unitPrice)
}

addToCart3(product1)

let product2 = {productName:"elma", unitPrice:10, quantity:5}
let product3 = {productName:"elma", unitPrice:10, quantity:5}


function addToCart4(x) {
    console.log(products)
}

let products = [
    {productName:"elma", unitPrice:10, quantity:5},
    {productName:"armut", unitPrice:10, quantity:5},
    {productName:"karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

function add(...numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]

    }
    console.log(total)
}


add(3,4,21,32)
add(3,4,32,32)
add(3,322,21,32)



let numbers = [12,53,525,663,23]

console.log(Math.max(...numbers))


let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"iç anadolu", population:"20M"},
    {name:"marmara", population:"30M"},
    {name:"karadeniz", population:"10M"},
        [
            ["ankara","konya"],
            ["istanbul","bursa"],
            ["sinpo","trabzon"],
        ],
    ]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)


let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} = {productName:"elma",unitPrice: 10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)


