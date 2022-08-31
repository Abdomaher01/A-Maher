// Welcome Effect
document.addEventListener("DOMContentLoaded",function(){
  setTimeout(() => {
    document.getElementById("splash").classList.add("display-none");
  }, 2000);
})    
// Load Animations
var width=window.innerWidth
if (width>991){
  window.onscroll = function() {scrollIndictor(),reveal()}
}
else{
  window.onscroll = function() {scrollIndictor(),CollapsingOnScroll(),reveal()}
}
// Scroll Indictor Animation On Scroll
function scrollIndictor() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
// Collapsing The NavBar Toggle When Scrolling
function CollapsingOnScroll(){
  document.getElementById("toggle").classList.add("collapsed");
  document.getElementById("navContent").classList.add("collapsing");
  document.getElementById("navContent").classList.remove("show")
  document.getElementById("toggle").setAttribute("aria-expanded",'false')
}
// Animation On Scroll
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 120;
    if (elementTop < windowHeight - elementVisible){
      reveals[i].classList.add("active");
    }
  }
}
// Fix Animation
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
if(scrolled>10){
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    reveals[i].classList.add("active");
  }
};
// Copy Email
function copytext(){
  navigator.clipboard.writeText("dr.abdalrahmanmaher@gmail.com");
  document.getElementById("btn").innerText="Copied";
};
// Color Change Animation
window.addEventListener("DOMContentLoaded",function change(){
  var i=0;
  color=["#7DCE13",'#CA955C',"#cc1a2f","yellow"];
  setInterval(function ColorChange(){
    document.getElementById("color_change").style.color = color[i];
    i++;
    if(i==color.length){
      change();
    }
  },1000)
})    
// Load Pages To The General HTML File
fetch("home.html")
.then(res=>res.text())
.then(data=>{document.getElementById("Home").innerHTML=data})
fetch("skills.html")
.then(res=>res.text())
.then(data=>{document.getElementById("Skills").innerHTML=data;})
fetch("projects.html")
.then(res=>res.text())
.then(data=>{document.getElementById("Projects").innerHTML=data;})
fetch("certifcates.html")
.then(res=>res.text())
.then(data=>{document.getElementById("Certificates").innerHTML=data;})
fetch("contact_us.html")
.then(res=>res.text())
.then(data=>{document.getElementById("Contact_us").innerHTML=data;})
