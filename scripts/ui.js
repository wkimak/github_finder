

// Create Div for profile information
let profileDiv = document.createElement('div');
container.appendChild(profileDiv);

//Repos Div
let reposDiv = document.createElement('div');
container.appendChild(reposDiv);


class UI {

displayProfile(data){

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
}


displayRepos(data){


 let output = "<h1 class='reposTitle'> Latest Repos </h1>";

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


}



static userFound(){
	errorMessage.style.display="none";
	profileDiv.style.display = "block";
	reposDiv.style.display = "block";
}


static error(){
   errorMessage.style.display = "block";
   profileDiv.style.display = "none";
   reposDiv.style.display = "none";
}


}









