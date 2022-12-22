function submitData(name, email){
 const users = {
        name : name,
        email : email
 };
 
 const configurationUser = {
    method : "POST",
    headers :{
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    },
    body : JSON.stringify(users)
    };
 
    return fetch("http://localhost:3000/users", configurationUser)
    .then (response => response.json())
    .then (users => {
        document.body.innerHTML = users.id 
    })
    .catch (function(error){
     alert("Ca marche pas, essaye encore !");
     document.body.innerHTML = error.message
    })
}

submitData("John", "jphn@hhkl.com")
