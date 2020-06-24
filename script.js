var database = [

{
	username:  "abhaygoyal",
	password:  "Abhay12@"
}
              
];
var newsfeed = 
[
   {
    username: "Bobby",
    timeline: "Gymming/Muscling in Corona-Period"
   },
   {
   	username: "Ayush",
   	timeline: "Eating and Sleeping in Corona KAL"
   }
   ]

var usernameprompt = prompt("Enter your username");
var passwordprompt = prompt("Enter your Password");

function signIN(user,pass){
    if (user===database[0].username && pass===database[0].password){
    	console.log(newsfeed);
    }
    else{
    	alert("Invalid Username/Password");
    }

}
signIN(usernameprompt, passwordprompt);







