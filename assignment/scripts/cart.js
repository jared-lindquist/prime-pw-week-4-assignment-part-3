console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
item = ('');
const maxItems = 5;

//Stretch goal #2 isFull function.

function isFull(){
  if (basket.length < maxItems){
      return false;
  } else {
      return true;
  }
}

// addItem function below

function addItem(item){
  if (isFull() != true){
    basket.push(item);
    return true;
  } else {
    return false;
  }
}

console.log(`Basket is ${basket}`);
console.log('Adding cup (expect true)', addItem(' cup'));
console.log('Adding bowl (expect true)', addItem(' bowl'));
console.log('Adding spoon (expect true)',addItem(' spoon'));
console.log('Adding knife (expect true)',addItem(' knife'));
console.log('Adding fork (expect true)',addItem(' fork'));
console.log('Adding plate (expect false)',addItem(' plate'))
console.log('The basket is full');
console.log(`Basket is now ${basket}`);


//listItems function below

function listItems(){
  const lister = basket.values();
 for (const value of lister){
  console.log(value);
 }
}
listItems();

//Stretch goal #4 removeItem function.

function removeItem(){
    if (item = basket.indexOf()){
      basket.splice(item);
      return true;
  } else {
    return false;
  }
  }
  console.log('Removing fork (expect true)',removeItem(' fork'));

//empty function below

function empty(){
  console.log('Full basket: ' + basket);
  basket.length = 0;
  console.log('Empty basket: ' + basket);
}
empty();

