// Welcome Effect
document.addEventListener("DOMContentLoaded",function(){
  setTimeout(() => {
    document.getElementById("splash").classList.add("display-none");
  }, 2000);
})    
// Fix Skills Bars
function fixSkills(){
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
if(scrolled>10 && scrolled<30){
  document.getElementById("py").classList.add("py");
  document.getElementById("ps").classList.add("ps");
  document.getElementById("algo").classList.add("algo");
  document.getElementById("dt").classList.add("dt");
  document.getElementById("html").classList.add("html");
  document.getElementById("css").classList.add("css");
  document.getElementById("js").classList.add("js");
  document.getElementById("rd").classList.add("rd");
  document.getElementById("wb").classList.add("wb");
  document.getElementById("sqlite").classList.add("sqlite");
  document.getElementById("hc").classList.add("hc");
}}
document.addEventListener("scroll",function(){fixSkills()})
// Load Animations
var width=window.innerWidth
if (width>991){
  window.onscroll = function() {scrollIndictor(),navbarAnimation(),reveal()}
}
else{
  window.onscroll = function() {scrollIndictor(),navbarAnimation(),CollapsingOnScroll(),reveal()}
}
// Nav Bar Scroll Animation
const navbar= document.getElementById("navbar");
var lastscrolly=window.scrollY;
function navbarAnimation(){
  if (lastscrolly<window.scrollY) {
    navbar.classList.add("nav_hidden");
  }
  else{
    navbar.classList.remove("nav_hidden");
  }
  lastscrolly=window.scrollY;
};
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
fetch("contact_us.html")
.then(res=>res.text())
.then(data=>{document.getElementById("Contact_us").innerHTML=data;})
