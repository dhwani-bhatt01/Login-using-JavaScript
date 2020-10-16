var name =  document.getElementById("name") 
var password =  document.getElementById("password")

function loginFunction() {
if (confirm('Do you want to login?')) {
    location.replace("page2.html")
  } else {
    location.replace("page3.html")
  }
}

function userVerification() { 
  if (name ==="ashish" && password === "a123") {
      location.replace("page4.html")
  } else {
      alert("Enter a valid name and password")
  }
}