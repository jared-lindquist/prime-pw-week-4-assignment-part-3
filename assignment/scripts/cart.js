console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
item = ('');
const maxItems = 5;

   function isFull(){
    if (basket.length < maxItems){
        return false;
    } else {
        return true;
    }
}

function addItem(item){
    if (isFull() != true){
      basket.push(item);
      return true;
    } else {
      console.log('The basket is full');
      return false;
    }
  }

console.log(`Basket is ${basket}`);
console.log('Adding cup (expect true)', addItem(' cup'));
console.log('Adding bowl (expect true)', addItem(' bowl'));
console.log('Adding spoon (expect true)',addItem(' spoon'));
console.log('Adding knife (expect true)',addItem(' knife'));
console.log('Adding fork (expect true)',addItem(' fork'));
console.log('Adding plate (expect true)',addItem(' plate'));
console.log(`Basket is now ${basket}`);


function listItems(){
    basket.forEach(function(item){
    console.log(item);
    })
}
console.log(listItems());

function empty(){
    console.log('Full basket: ' + basket);
    basket.length = 0;
    console.log('Empty basket: ' + basket);
}
empty();


