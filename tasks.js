console.log("tasks file is linked, happy coding");
//using ES6 syntax
//0.a create a variable called 'myName' & give it your name
//0.b create an array called 'myFriends' give it at least 5 friends
//0.c create an object called 'person' has keys (name: myName, friends: myFriends)
let myName = "mohammed"

let myFriends = ["hossam","khalid","saif","zaid","kreem"]

let person= {
    name: myName,
     friends: myFriends

}

//1 get the value of 'name' from person object & using Destructing Assignment
let {name}=person;
//2 get the second value of 'myFriends' array & assign it to 'bestee' using Destructing Assignment
let [,bestee]= myFriends;
//3 copy the 'myFriends' array to a new array called 'myFriendsBackup' using the spread operators
let myFriendsBackup = [...myFriends];
//after that uncomment the next lines
myFriends.pop()
console.log(myFriendsBackup) // you should see your full friends list

//4. create an arrow function called 'restFunction' that receive unknown numbers of parameters using Rest Parameter
//& print the value of all of them
let restFunction=(...numbers) => {
    for(var i=0;i<numbers.length;i++)
    console.log(numbers[i]);

}
//after that uncomment next lines
restFunction(myName, ' is the best ', true, [434234]) //you should see all the parameters on the screen

//5. create an arrow function called 'protectedSum' that receives 3 parameters
//the third parameter has default value of callback function (try make it arrow)
//this function sum the first to parameters & pass them to the callback function
protectedSum =(pr1,pr2,callback = () => {}) => {
var sum = pr1 + pr2;
callback(sum)
}
//after that uncomment the next lines
protectedSum(19, 39) // you should  see an error on the console

/** Thanks you, I hope you had fun */
