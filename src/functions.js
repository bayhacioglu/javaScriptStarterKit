<<<<<<< HEAD
function addToCart(quantity, productName="Elma") {
    console.log("Sepete eklendi: " + productName + " adet " , quantity)
}

addToCart(10)


let sayHello = ()=>{
    console.log("hello world")
=======
function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi : ürün : " 
    + productName + " adet : " + quantity)
}

//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>{
    console.log("Hello World!")
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
}

sayHello()

let sayHello2 = function () {
<<<<<<< HEAD
    console.log("hello world2")
}

sayHello2()
=======
    console.log("Hello World 2")
}

sayHello2();
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25

function addToCart2(productName, quantity, unitPrice) {
    
}

<<<<<<< HEAD
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
=======
addToCart2("Elma",5,10)
addToCart2("Armut", 2, 20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}


addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
    console.log(products)
}

let products = [
<<<<<<< HEAD
    {productName:"elma", unitPrice:10, quantity:5},
    {productName:"armut", unitPrice:10, quantity:5},
    {productName:"karpuz", unitPrice:10, quantity:5}
=======
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
]

addToCart4(products)

<<<<<<< HEAD
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
=======
function add(bisey,...numbers) { //rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add(20,30)
//add(20,30, 40)
//add(20,30, 40, 50)

let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

<<<<<<< HEAD

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} = {productName:"elma",unitPrice: 10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)


=======
let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
