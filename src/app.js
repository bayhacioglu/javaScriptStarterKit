<<<<<<< HEAD
console.log("lol")

let dolarDun = 9.20
let dolarBugun = 9.30

const euroDun = 11.2


console.log(euroDun)
//array
let konutKredileri = ["konut kredisi","emlak kredisi","villa kredisi"]

console.log("<ul>")
    for (let i = 0; i < konutKredileri.length; i++) {
        console.log("<li>"+konutKredileri[i]+"</li>")
        
    }
console.log("</ul>")

=======
console.log("Merhaba Kodlama.io")

//JS type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
console.log(konutKredileri)