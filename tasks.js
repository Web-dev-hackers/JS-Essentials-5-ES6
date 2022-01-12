console.log("tasks file is linked, happy coding");
//using ES6 syntax
//0.a create a variable called 'myName' & give it your name
let myName = "zahra";
//0.b create an array called 'myFriends' give it at least 5 friends
const myFriends = ["loj","hhgs","gfydb","hgudd","tdgsy"];
//0.c create an object called 'person' has keys (name: myName, friends: myFriends)const person = {name:myname, friends: myFriends};
const person= {name: myName, friends:myFriends};
//1 get the value of 'name' from person object & using Destructing Assignment
const {name}=person ;
//2 get the second value of 'myFriends' array & assign it to 'bestee' using Destructing Assignment
let [,bestie] = myFriends;
//3 copy the 'myFriends' array to a new array called 'myFriendsBackup' using the spread operators
let myFriendsBackup = [...myFriends];

//after that uncomment the next lines
myFriends.pop()
console.log(myFriendsBackup) // you should see your full friends list

//4. create an arrow function called 'restFunction' that receive unknown numbers of parameters using Rest Parameter
//& print the value of all of them
let restFunction= (...args) => {
    for(let i=0;i<=args.length ;i++){
        console.log(args[i]);
    }  

}

//after that uncomment next lines
restFunction(myName, ' is the best ', true, [434234]) //you should see all the parameters on the screen

//5. create an arrow function called 'protectedSum' that receives 3 parameters
//the third parameter has default value of callback function (try make it arrow)
//this function sum the first to parameters & pass them to the callback function
let protectedSum= (args1=55, args2=85,callback= ()=>{
    console.log("no callback function");
})=> {
let sum = args1 + args2;
callback()
}
//after that uncomment the next lines
protectedSum(19, 39) // you should  see an error on the console

/** Thanks you, I hope you had fun */
