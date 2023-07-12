hamburger=document.querySelector(".hamburger");
hamburger.onclick=function(){
navBar=document.querySelector(".nav-bar");
navBar.classList.toggle("active");
}


// home
const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

var sectionIndex = 0;

leftArrow.addEventListener('click',function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1:0;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 +'%)';
});

rightArrow.addEventListener('click',function() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1:3;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 +'%)';
});


// form
const form = document.getElementById("form");
let a1 =document.getElementById("name");
let a2=document.getElementById("n-error")

function validname(){
    if(a1.value===""){
        a2.innerHTML="Enter Your First Name"
        a1.style.border="3px solid red"
        return false;
    }
    else if(a1.value.length<3 ||a1.value.length>15){
        a2.innerHTML="character must contain minimum 3 to maximum 15";
        a1.style.border="3px solid red";
        return false;
    }
    else{
        a2.innerHTML="";
        a1.style.border="3px solid green";
        return true;
    }
}
let b1=document.getElementById("number")
let b2=document.getElementById("pn-error")
 
    function validnumber(){
        if(b1.value===""){
            b2.innerHTML="Enter Your Mobile Number"
            b1.style.border="3px solid red"
            return false;
            }
        else if(isNaN(b1.value) || b1.value.length<10 || b1.value.length>10){
             b2.innerHTML="Enter a Valid Number";
             b1.style.border="3px solid red";
             return false;
            }
        else{
            b2.innerHTML="";
            b1.style.border="3px solid green";
            return true;
            }
}
let c1=document.getElementById("gmail");
let c2=document.getElementById("g-error");
 
    function validgmail(){
        if(c1.value===""){
            c2.innerHTML="Enter Your gmail"
            c1.style.border="3px solid red"
            return false;
        }
        else if(!c1.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            c2.innerHTML="Enter Your valid gmail"
            c1.style.border="3px solid red";
            return false;
        }
        else{
            c2.innerHTML="";
            c1.style.border="3px solid green";
            return true;
        }
}
let d1=document.getElementById("message")
let d2=document.getElementById("m-error")
     function validmessage(){
        if(d1.value===""){
            d2.innerHTML="Enter Your message";
            d1.style.border="3px solid red";
            return false;
        }
        else if(!d1.value.match(/^[a-z A-Z 0-9 , . /]*$/)){
            d2.innerHTML="Enter a valid message";
            d1.style.border="3px solid red";
            return false;
        }
        else{
            d2.innerHTML="";
            d1.style.border="3px solid green";
            return true;
        }
}
form.addEventListener('submit',e=>{
    e.preventDefault();
    checkinput();
    })
    function checkinput() {
        const namevalue = a1.value.trim();
        const mobilevalue= b1.value.trim();
        const emailvalue = c1.value.trim();
        const messagevalue = d1.value.trim();
    
    document.write("Name:"+" "+namevalue+"<br>");
    document.write("Phone Number:"+" " +mobilevalue + "<br>");
    document.write("Email id:"+" " + emailvalue + "<br>");
    document.write("Message:"+" " + messagevalue + "<br>");
}






