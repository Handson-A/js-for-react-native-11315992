// Task 1
function processArray(numbers) {
    return numbers.map(num => {
if (num %2 === 0){
    return num * num; // squares even numbers
} else {
    return num * 3; //triples odd numbers
}
});
};

/*
//test:
let Nums =[2,3,4,5,6];
let finalNums = processArray(Nums);

console.log(finalNums);*/


//Task 2
function formatArrayStrings (stringArray, numberArray) {
    if (stringArray.length !== numberArray.length) {
      throw new Error ("please have a corresponging number of items in both arrays"); // throws an error if both arrays have unequal number of items
    }
      return stringArray.map((string, index) => {
    if ([index] % 2 === 0) {
      return string.toUpperCase(); // Capitalizes entire string if the index in total is even
    } else {
      return string.toLowerCase(); // Converts string to lowercase if the index in total is odd
    }
  });
}


//test:
const namesArray = ["Kwame","Kasoa","Yaw","lion","yam"]
let number = [2,3,4,5,7] // string has to be of equal length with number array length
let finalNumber = processArray(number);
const resultString = formatArrayStrings(namesArray, finalNumber);

//console.log (finalNumber);
//console.log(resultString);

export { namesArray, resultString };
