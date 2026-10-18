let items = [
    {name : "item1",price:4500},
    {name : "item2" ,price:7800},
    {name : "item3",price:9876},
    {name : "item4",price:453}
]
let total = 0;
for(let i=0;i<items.length;i++){
    total = total + items[i].price;
}
console.log("total price = ",total);