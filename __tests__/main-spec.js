const {
    countProducts,
    fetchProduct,
    generateReceiptItems,
    countTotalPrice,
    assemble
} = require('../main');
/*
it ('should count codes', () => {
//given
let codes = ["0003","0003","0001"];
//when
const countedCodes = countProducts(codes);
console.log(countedCodes);
//then
});

it ('should fetch product', () => {
    //given
    let code = "0001"
    //when
    const result = fetchProduct(code);
    console.log(result);
    //then
    });


    it ('should generate receipt items', () => {
        //given
        let codes = ["0003","0003","0001",]
        //when
        const result = generateReceiptItems(codes);
        console.log("================");
        console.log(result);
        //then
   
        });

       it ('should ', () => {
        //given
        let countTotalPriceInput = [{"name": "Pepsi-Cola", "price": 5,"count": 2},{ "name": "Coca Cola", "price": 3,"count": 1}];
        //when
        const totalPrice = countTotalPrice(countTotalPriceInput);
        console.log("================");
        console.log(totalPrice);
        //then
        });

        */

       it ('should ', () => {
        //given
        let assembleInput = [{"name": "Pepsi-Cola", "price": 5,"count": 2},{ "name": "Coca Cola", "price": 3,"count": 1}];
        //when
        const receiptText = assemble(assembleInput,13);
        console.log("================");
        console.log(receiptText);
        //then
        });

