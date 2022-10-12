console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
item = ('');

function addItem(item){
    basket.push(item);
    return true;
}

console.log(`Basket is ${basket}`);
console.log('Adding cup (expect true)', addItem(' cup'));
console.log('Adding bowl (expect true)', addItem(' bowl'));
console.log('Adding spoon (expect true)',addItem(' spoon'));
console.log('Adding knife (expect true)',addItem(' knife'));
console.log('Adding fork (expect true)',addItem(' fork'));
console.log(`Basket is now ${basket}`);


basket.forEach(function(item){
    console.log(item);
})


function empty(){
    for (item in basket)
    basket.pop(item);
}
console.log(basket);