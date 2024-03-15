let words= document.querySelectorAll(".word");
words.forEach( (word)=> {
    let letters= word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span= document.createElement("span");
        span.textContent= letter;
        span.className= "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex= words.length -1; 
words[currentWordIndex].style.opacity= "1";

let changeText = ()=>{
    let currentWord= words[currentWordIndex];
    let nextWord= currentWordIndex === maxWordIndex ? words[0]: words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
      setTimeout(()=>{
        letter.className= "letter out";
      },i*80);
     });
     nextWord.style.opacity="1";
     Array.from(nextWord.children).forEach((letter,i)=>{
      letter.className="letter behind";
      setTimeout(()=>{
        letter.className= "letter in";
      },340 + i*80);
    }); 
    currentWordIndex= currentWordIndex === maxWordIndex ? 0: currentWordIndex +1;
    };

    changeText();
    setInterval(changeText,3000)
    
  
//circle skill ///////////////////////////////////////////
const circles =document.querySelectorAll('.circle');
circles.forEach(elem=>{
  var dots= elem.getAttribute("data-dots");
  var marked= elem.getAttribute("data-percent");
  var percent= Math.floor(dots*marked/100);
  var points= "";
  var rotate= 360 / dots;



  for(let i = 0 ; i < dots ; i++){
    points += '<div class="points" style="--i:${i}; --rot:${rotate}deg"> </div>';
  }
  elem.innerHTML = points;

  const pointsMarked= elem.querySelectorAll('.points');
  for(let i=0; i<percent ; i++){
    pointsMarked[i].classList.add('marked')

  }

  

})

//MixItUp portfolio section/////////////////////////
var mixer = mixitup('.portfolio-gallery');




//Active menu///////////////////////////////////////
let menuLi = document.querySelectorAll('header ul li a');
let section =document.querySelectorAll('section');

function activeMenu(){
  let len= section.length;
  while(--len && window.scrollY + 97<section[len].offsetTop){}
  menuLi.forEach(sec => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);



//Sticky navbar///////////////////////////////////////
const header= document.querySelector("header");
window.addEventListener("scroll",function(){
  header.classList.toggle("sticky",window.scrollY>50)
})


//toggle icon navbar///////////////////////////////////////
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
}

window.onscroll = ()=>{
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
}


// For Mail Transferring //////////////////////////////////////
const form = document.querySelector("form");
const nameInput = document.getElementById("name"); // Renamed from "name" to "nameInput"
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

function sendEmail() {
    // Use backticks for string interpolation
    const bodyMessage = `Name: ${nameInput.value}<br> Email: ${emailInput.value}  <br> Phone Number: ${phoneInput.value}<br> Message: ${messageInput.value}`;

    // You cannot directly send emails from browser JavaScript like this
    // This code will not work, you need a server-side component or API for sending emails
    /*
    email.send({
        Host: "smtp.elasticemail.com",
        Username: "thamodsandeepa@gmail.com",
        Password: "2B6866E79D9A99387EBFA5D2A7B5CF6D47F0",
        To: 'thamodsandeepa@gmail.com',
        From: "thamodsandeepa@gmail.com",
        Subject: subjectInput.value,
        Body: bodyMessage
    }).then(
        message => alert(message)
    );
    */
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});
