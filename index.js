// Add your code here

function submitData( name_, email_ ) {            
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify({
        name: name_,
        email: email_
        })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        document.getElementById('id').innerHTML = object.id;
    })
    .catch(function(error) {
        document.getElementById('id').innerHTML = error.message;
    });
}
submitData( "Steve", "steve@steve.com" );