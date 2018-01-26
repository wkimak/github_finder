
// Error Message
 let errorMessage = document.createElement('div');
   errorMessage.innerHTML = "User Not Found";
   errorMessage.style.marginTop = "10px";
   errorMessage.style.padding = "10px 5px";
   errorMessage.style.backgroundColor = "rgba(200, 15,15,0.3)";
   errorMessage.style.display = "none";
   form.appendChild(errorMessage);

class Users {

getProfile(username){
    
 
   fetch(`https://api.github.com/users/${username}?client_id=456908874eaa6eb88431&client_secret=c1e30ac268016c52d79877bf14e4b0d63edcfb22`)
    
   .then(response => {
   	if(response.ok){	
   	UI.userFound();	
   	return response.json();
   } else{
   	return UI.error();
   }

   }) 

   .then(data => {
   	const ui = new UI();
   	ui.displayProfile(data);
   })

}

getRepos(username){

  fetch(`https://api.github.com/users/${username}/repos?client_id=456908874eaa6eb88431&client_secret=c1e30ac268016c52d79877bf14e4b0d63edcfb22`)

  .then(response => {
  	return response.json();
  })

  .then(data => {
  	const ui = new UI();
  	ui.displayRepos(data);
  })

}

}






