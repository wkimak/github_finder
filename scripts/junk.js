// API Key: 456908874eaa6eb88431

// Variable Declaration
const form = document.getElementById('form');
const input = document.getElementById('userInput');
const container = document.getElementById('container');
const avatar = document.getElementById('avatar');

// Create Div for profile information
let profileDiv = document.createElement('div');
container.appendChild(profileDiv);

//Error Message
let errorMessage = document.createElement('div');
errorMessage.innerHTML = "User Not Found";
errorMessage.style.marginTop = "10px";
errorMessage.style.padding = "10px 5px";
errorMessage.style.backgroundColor = "rgba(200, 15,15,0.3";
errorMessage.style.display = "none";
form.appendChild(errorMessage);


//Repos Div
let reposDiv = document.createElement('div');
container.appendChild(reposDiv);


//Event Listener
input.addEventListener('keyup', getProfile);



// Get User Profile function
function getProfile(){

let user = input.value;

fetch(`https://api.github.com/users/${user}?client_id=456908874eaa6eb88431&client_secret=c1e30ac268016c52d79877bf14e4b0d63edcfb22`)

.then(response => {
  if(response.ok){
    profileDiv.style.display = "block";
    reposDiv.style.display = "block";
    errorMessage.style.display = "none";
    getRepos();
	return response.json();
} else{
  profileDiv.style.display = "none";  
  reposDiv.style.display = "none";
  errorMessage.style.display = "block";
}
})

//attach data to output
.then(data => {

  console.log(data);
   let output = '';
    
   output = 
   `<div class="row justify-content-center mt-5">
      
         <div class="col-3" id="image-container">
           <img id="avatar" class="img-fluid rounded" src=${data.avatar_url} alt="avatar">
           <button class="btn btn-primary btn-md offset-3 mt-2"> <a class="profile-link" target="_blank" href=${data.html_url}> View Profile </a> </button>
         </div>    
 
        <div class="col-sm-6">
          <button class="btn btn-outline-success mt-2"> Public Repos: ${data.public_repos} </button>
          <button class="btn btn-outline-secondary mt-2"> Public Gists: ${data.public_gists} </button>
          <button class="btn btn-outline-info mt-2"> Followers: ${data.followers} </button>
          <button class="btn btn-outline-danger mt-2"> Following: ${data.following} </button>  

          <div class="info mt-3"> Company: ${data.company} </div>
          <div class="info mt-2"> Website/blog: ${data.blog} </div>
          <div class="info mt-2"> Location: ${data.location} </div>
          <div class="info mt-2"> Member Since: ${data.created_at} </div>
        </div> 
   </div>`;

    profileDiv.innerHTML = output;
})

.catch(error => {
if(input.value == ''){
  errorMessage.style.display = "none";
}
console.log(error);
})

}


// Get Repos Function
function getRepos(){

  let user = input.value;

fetch(`https://api.github.com/users/${user}/repos?client_id=456908874eaa6eb88431&client_secret=c1e30ac268016c52d79877bf14e4b0d63edcfb22`)

.then(response => {
    return response.json();

})

.then(data => {

let output = '';

 output = "<h1 class='reposTitle'> Latest Repos </h1>";

data.forEach((val,index) => {

if(index < 5){
output += 

  `<div class="row justify-content-center">
    <ul class="col-sm-8 list">
      <li class="col-sm-7"> ${val.name} </li>
      <li> <button class="btn btn-sm btn-outline-success "> Stars: ${val.stargazers_count} </button> </li>
      <li> <button class="btn btn-sm btn-outline-warning"> Watchers: ${val.watchers} </button> </li>
      <li> <button class="btn btn-sm btn-outline-info"> Forks: ${val.forks} </button> </li>
    </ul>
  </div>`;
  }

});

reposDiv.innerHTML = output;

})

}
