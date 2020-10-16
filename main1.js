function loginFunction() {
  if (confirm('Do you want to login?')) {
    location.replace("page2.html")
  } else {
    location.replace("page3.html")
  }
}