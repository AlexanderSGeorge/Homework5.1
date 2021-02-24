const anArray = [];
for (i = 1; i <= 12; i++) {
 anArray.push(i);
}

//A) An array of odd numbers
let oddNumbers = anArray.filter(value => value % 2 !== 0);
console.log(oddNumbers);

//B) An array of numbers divisible by 3 or 5
let divisibleby2or5 = anArray.filter(value => value % 3 == 0);
console.log(divisibleby2or5);


//C) An array of numbers divisbible by 3 squared
//Confused by this questiom -->will talk about it during your office hourrs 
let divisibleby3square = anArray.map(x => x **3);
console.log(divisibleby3square);

//D)The sum the following: square the numbers divisble by 5
let divisibleby5square = anArray.map(x => x **2).filter(value => value % 5 == 0);
console.log(divisibleby5square);
let sum = divisibleby5square[0] + divisibleby5square[1];
console.log(sum);


