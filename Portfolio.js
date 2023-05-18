// اضافة درك مود
let moon = document.querySelector(".fa-moon");

moon.onclick = function () {
  document.body.classList.toggle("dark-mood");

  if (document.body.classList.contains("dark-mood")) {
    moon.className = "fa-solid fa-sun";
    localStorage.setItem("them", "dark");
  } else {
    moon.className = "fa-regular fa-moon";
    localStorage.setItem("them", "light");
  }
};

//لما اعمل ريفيرش للصفحة مود  يتحفظ

if (localStorage.getItem("them") === "dark") {
  document.body.classList.add("dark-mood");
  moon.className = "fa-solid fa-sun";
} else {
  document.body.classList.remove("dark-mood");
  moon.className = "fa-regular fa-moon";
}

//typed in sec 2
var typed = new Typed(".element", {
  strings: ["EMAN ELBASHIR", "Front end developer "],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

//arrow in footer
//whatapp in footer
let arrow = document.querySelector("#arrow");
let whatsapp = document.querySelector("#whatsapp");

arrow.onclick = function () {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

window.onscroll = function () {
  if (scrollY >= 300) {
    arrow.style.opacity = "1";
    //  whatsapp.style.opacity = "1";
  } else {
    arrow.style.opacity = "0";
  }
};


//emailjs

function sendmails() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("textarea").value
  };
  
  emailjs.send("service_1vhcfdi", "template_wgrw66p", params)
    .then(function(response) {

      document.querySelector(".alert").style.display= 'block';

         setTimeout(function() {
      
          document.querySelector(".alert").style.display= 'none';
         }, 3000);
         document.getElementById("sendform").reset();
      
    }, function(error) {
      console.error("Error sending message:", error);
    });
}
