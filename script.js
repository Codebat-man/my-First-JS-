var database = [

{
	username:  "abhaygoyal",
	password:  "Abhay12@"
},
{
	username: "srishtygoyal",
	password: "Abhay12@"

},

{
	username: "tushargoyal",
	password: "Abhay12@"
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
function validity(username, password){
	if(username === usernameprompt && password === passwordprompt){
   	return true;
   }
   else{ return false;}

}
database.forEach(validity);




function signIN(user,pass){
    if (validity(usernameprompt, passwordprompt)){
    	console.log(newsfeed);
    }
    else{
    	alert("Invalid Username/Password");
    }

}
signIN(usernameprompt, passwordprompt);







