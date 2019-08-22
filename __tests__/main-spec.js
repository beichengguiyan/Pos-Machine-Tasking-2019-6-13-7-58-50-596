const {countProducts,fetchProduct} = require('../main');

it ('should count codes', () => {
//given
let codes = ["0003","0003","0001"];
//when
const countedCodes = countProducts(codes);
console.log(countedCodes);
//then
    expect(countedCodes[0].count).toBe(2);
});

it ('should fetch product', () => {
    //given
    let db = [
        { "id": "0001", "name": "Coca Cola", "price": 3 },
        { "id": "0002", "name": "Diet Coke", "price": 4 },];
    let code = "0001"
    //when
    const result = fetchProduct(code,db);
    console.log(result);
    //then
        expect(result.price).toBe(3);
    });