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