let db = [
    { "id": "0001", "name": "Coca Cola", "price": 3 },
    { "id": "0002", "name": "Diet Coke", "price": 4 },
    { "id": "0003", "name": "Pepsi-Cola", "price": 5 },
    { "id": "0004", "name": "Mountain Dew", "price": 6 },
    { "id": "0005", "name": "Dr Pepper", "price": 7 },
    { "id": "0006", "name": "Sprite", "price": 8 },
    { "id": "0007", "name": "Diet Pepsi", "price": 9 },
    { "id": "0008", "name": "Diet Mountain Dew", "price": 10 },
    { "id": "0009", "name": "Diet Dr Pepper", "price": 11 },
    { "id": "0010", "name": "Fanta", "price": 12 }
]

function countProducts(codes) {
    let result = [];
    for (let i = 0; i < codes.length; i++) {
        let position = -1;
        for (let j = 0; j < result.length; j++) {
            if (codes[i] == result[j].code) {
                position = j;
                break;
            }
        }
        if (position == -1) {
            result.push({ code: codes[i], count: 1 });
        } else {
            result[position].count++;
        }
    }
    return result;
}

function fetchProduct(code) {
    let result = [];
    for (let index = 0; index < db.length; index++) {
        if (code === db[index].id) {
            result = {
                name: db[index].name,
                price: db[index].price
            }
        }
    }
    return result
}

function  generateReceiptItems(codes) {
    let result = [];
    let countedCodes =countProducts(codes);
    for (let index = 0; index < countedCodes.length; index++) {
         let fetchedCodes = fetchProduct(countedCodes[index].code);
         result.push({
             name:fetchedCodes.name,
             price:fetchedCodes.price,
             count:countedCodes[index].count
        })
     }
    return result;  
}

function countTotalPrice(collection){
    let price = 0;
    for (let i = 0; i < collection.length; i++) {
        let subPrice = 0;
        subPrice = collection[i].price * collection[i].count;
        price = price + subPrice;
    }
    return price;

}

function assemble(collection,totalPrice){
    let result = "";
    result = result + "Receipts\n------------------------------------------------------------\n";
    for (let i = 0; i < collection.length; i++) {
        result = result + collection[i].name;
        for (let j = 0; j < (32 - collection[i].name.length); j++) {
            result = result + " ";
        }
        result = result + collection[i].price;
        for (let k = 0; k < (11 - collection[i].price.toString().length); k++) {
            result = result + " ";
        }
        result = result + collection[i].count;
        result = result + "\n"
    }
    result = result + "------------------------------------------------------------\nPrice: ";
    result = result + totalPrice;
    return result;
}




module.exports = {
    countProducts,
    fetchProduct,
    generateReceiptItems,
    countTotalPrice,
    assemble
};