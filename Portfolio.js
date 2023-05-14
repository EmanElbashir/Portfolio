// اضافة درك مود 
let moon = document.querySelector(".fa-moon");

moon.onclick = function() {

    document.body.classList.toggle("dark-mood");

    if (document.body.classList.contains("dark-mood")) {
        moon.className = "fa-solid fa-sun";
        localStorage.setItem("them", "dark");
    } else {
        moon.className = "fa-regular fa-moon";
        localStorage.setItem("them", "light");
    }

}

//لما اعمل ريفيرش للصفحة مود  يتحفظ

if (localStorage.getItem("them") === "dark") {
    document.body.classList.add("dark-mood");
    moon.className = "fa-solid fa-sun";

} else {
    document.body.classList.remove("dark-mood");
    moon.className = "fa-regular fa-moon";
}



//typed in sec 2
var typed = new Typed('.element', {
    strings: ["EMAN ELBASHIR", "Front end developer "],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});


//arrow in footer
//whatapp in footer
let arrow = document.querySelector("#arrow");
let whatsapp = document.querySelector("#whatsapp");



arrow.onclick = function() {
    scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
}


window.onscroll = function() {
    if (scrollY >= 300) {
        arrow.style.opacity = "1";
      //  whatsapp.style.opacity = "1";
    } else {
        arrow.style.opacity = "0";
    }

}




//firebase

const firebaseConfig = {
  apiKey: "AIzaSyCSVpnHP0crqO7hvJw9opRtd7nMX0cifVQ",
  authDomain: "project-form-b001a.firebaseapp.com",
  databaseURL: "https://project-form-b001a-default-rtdb.firebaseio.com",
  projectId: "project-form-b001a",
  storageBucket: "project-form-b001a.appspot.com",
  messagingSenderId: "1098558962590",
  appId: "1:1098558962590:web:d075f6c5a0bf4cd3e9748f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//refrence your database

var contactform = firebase.database().ref('project-form');

document.getElementById("sendform").addEventListener("submit", submitform);


function submitform (e){
  e.preventDefault();

  var namee= getelementvalue("name");
  var email= getelementvalue("email");
  var textarea= getelementvalue("textarea");


  savemassadge(namee, email, textarea);
  //enable allert

  document.querySelector(".alert").style.display= 'block';

  setTimeout(function() {
  
    document.querySelector(".alert").style.display= 'none';
  }, 3000);

  //reset form
  document.getElementById("sendform").reset();


}



const savemassadge= (namee, email, textarea)=>{
var newcontactform= contactform.push();

newcontactform.set({

namee:namee,
email: email,
textarea:textarea,

})

};


const getelementvalue=(id)=>{
return document.getElementById(id).value;

}












