
// Variable Declaration
const form = document.getElementById('form');
const input = document.getElementById('userInput');
const container = document.getElementById('container');
const avatar = document.getElementById('avatar');

let user = new Users();


input.addEventListener('keyup', getProfile);

function getProfile(){
const userText = input.value;

if(userText !== ""){
  user.getProfile(userText);
  user.getRepos(userText);
} else{
  errorMessage.style.display = "none";
}

}











