console.log("FinalHomework.js file linked, Happy Coding :)");
/*use ES6 syntax in all the tasks */
//0.a Declare a variable called 'myName' give it your name
//0.b create an array called 'marks' that has 10 marks in rang from 0 to 100
let myName='mohammed';
let marks=[75,90,56,39,99,24,68,30,78,45]
//0.c Create array called 'myClass' consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructor ;)
let myClass=[
    'Ghalya','Aisha','zahra','aya','boshra','taha','osama','Mohammed','Essam'
];
//1 write a function called 'getMiddleValue' that takes an array as an argument and returns the element that is located in the middle of that array.
let getMiddleValue =(...args) =>{

    let  mid =getMiddleValue[Math.round((getMiddleValue.length-1)/2)]}
//after that uncomment the next 2 lines
getMiddleValue([4,6,64,3,2]) // 64
getMiddleValue([4,6, 3, 5, 64,3,2]) // 5

//2 create a function called 'calculateAverage' that receives an array of numbers as a parameter (give it a default value of empty array to prevent error)
//it returns the average of numbers inside the array
const calculateAverage = calculateAverage => {
    const sum = calculateAverage((acc, cur) => acc + cur);
    const average = sum/calculateAverage.length;
    return average;

}
//after that uncomment the next lines
// calculateAverage() // you shouldn't see an error
// calculateAverage([5, 15, 10]) // 10

//3 use built in filter function to filter array 'marks' to filter marks more than 50 and store them in a variable called 'goodMarks'
let goodMarks=marks.filter(function(goodMarks){     return goodMarks>50;     })



//after that uncomment the next line
console.log(goodMarks) //you should see an array of marks over than 50

//4 use spread operator to copy the 'marks' array into a new variable called 'marksBackup'
let marksBackup =[...marks];
//after that uncomment the next lines
marks.pop()
console.log(marksBackup) //you should see the whole marks

//5 use built in map function on 'myClass' array to add the index of each value beside it
//and store the new array in variable called 'myClassWithIndex'
//hint: if myClass was ['ali', 'taha', 'Essam'] the myClassWithIndex will be ['ali0', 'taha1', 'Essam2']
const myClassWithIndex = myClass.map(function(result, index){
    for(let i = 0; i < myClass.length; i++){
        result =  myClass[index] + index;
                 return  result;
      }
});
//after that uncomment the next line
console.log(myClassWithIndex) //you should see the index number beside each value

/**Final One & the most important one */
//6 create a function called 'getTotalEvenOdd' that receives an array of numbers
//that return an array of 2 values the first value is sum of even numbers & the second value is the sum of odd numbers
const getTotalEvenOdd =function(numbers) {
    let totalEven=[];
    let totalOdd=[];
    for (let i=0; i<numbers.length;i++){
        if(numbers[i]%2===0){
            totalEven.push(numbers[i]);
            return totalEven;
        }
        else {
            totalOdd.push(num[i]);
            return totalOdd;
        }
    }
}
//after that uncomment the next 3 lines
const [totalEven, totalOdd] = getTotalEvenOdd([1,19,3, 17,21,7,8,9,10, 15, 13])
console.log(totalEven) //18
console.log(totalOdd)//105
}
