// const multiplicationIndex = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// for(const i of multiplicationIndex){
//     for (let index = 1; index <= 10; index++) {
//     console.log(`${i} x ${index} = ${i*index}`);        
//     }
// }

// functions                                  

// const myfunction = (a,b,c,d) => {
//     return a * b + c / d
// }
// console.log(myfunction(3,2,6,4));

//higher order function.


const products = [
    {
        productname:"Gucci",
        stock:12
},
{
    productname:"louis vuitton",
    stock:0
}
]

const productCheck = (name) => {
    products.forEach(element => {
        if(element.productname.toLowerCase === name.tolowerCase()& element.stock >0){
        message = `${name} is available and ${element.stock}stock left`
        console.log(message)
        return message
    } 
    
}