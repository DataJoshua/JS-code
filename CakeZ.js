// * The Name is just temporary


const converFromKgToGr = (jsonOb)=>{

    for(let k=0; k <jsonOb.length; k++ ){
        if(jsonOb[k]["unit"] == "kg"){
            jsonOb[k]["amount"]*= 1000 
            jsonOb[k]["unit"] = "gr"
        }
    }
    return jsonOb
}



const converFromltoML = (jsonObj)=>{
    for(let k=0; k < jsonObj.length ; k++){
        if(jsonObj[k]["unit"] == "l"){
            jsonObj[k]["amount"]*= 1000
            jsonObj[k]["unit"]= "ml"
        } 
    }
    return jsonObj
}


let products =[
    {name: "harina", price: 129, amount:2, unit:"kg"},
    {name: "cacao",price: 125, amount: 1, unit:"unit"},
    {name: "polvo de hornear", price: 23, amount:1, unit:"unit"},
    {name: "azucar", price: 67, amount: 1, unit:"kg"},
    {name:"aceite", price: 70,amount: 0.5, unit:"l"},
    {name: "leche", price: 90, amount: 1, unit: "l"},
    {name: "bicarbonato",price: 200, amount: 10, unit: "gr"}
]



let requeriments = [  
    {name: "harina", amount: 200, unit:"gr"},
    {name: "cacao",amount: 1, unit:"unit"},
    {name: "polvoHornear",amount: 1, unit:"unit"},
    {name: "azucar",amount: 120, unit:"gr"},
    {name: "aceite",amount: 120, unit:"ml"},
    {name: "leche",amount: 200, unit:"ml"},
    {name: "bicarbonato",amount: 2, unit:"gr"}

]


let ProductsConverted = converFromltoML(converFromKgToGr(products))


let calculatePricePerPortion = (productsObj, requerimentsObj)=>{
    for(let k=0; k < jsonObj.length ; k++){
        
    }
}

console.log(ProductsConverted);

let total_price  = 0;
let price_per_cake = 0;

let total_amount = 0
let amount_per_cake = 0

products.map((val)=>{
    let {price} = val
    total_price += price    
})


requeriments.map(val=>{
    let {amount} = val
    amount_per_cake += amount
})
ProductsConverted.map(val=>{
    let {amount} = val
    total_amount += amount
})


console.log("con cada compra por el precio de "+ total_price + " RUB se pueden hacer " + parseInt((total_amount/amount_per_cake) + " pasteles"));