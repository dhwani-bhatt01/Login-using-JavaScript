var name =  document.getElementById("name")
var password =  document.getElementById("password")

function userVerification() { 
  if (name == "ashish" && password == "123") {
      location.replace("page4.html")
  } else {
      alert("Enter a valid name and password")
  }
}