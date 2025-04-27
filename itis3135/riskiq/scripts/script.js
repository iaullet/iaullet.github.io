function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("title").value,
        message : document.getElementById("message").value
    };

    emailjs.send("service_owgvin7","template_mvw5y3m",parms).then(
        () => alert("Email sent!").catch(() => alert("Email not sent!"))
    );
}

function loadContact(){
    window.location.href = "contact.html";
}

function loadServices(){
    window.location.href = "services.html";
}

function toggleDropdown(id) {
    const dropdowns = document.querySelectorAll(".dropdownContent");
  
    dropdowns.forEach((drop) => {
      if (drop.id === id) {
        drop.classList.toggle("show");
        drop.parentElement.toggle("show");
      } else {
        drop.classList.remove("show");
      }
    });
  }
  
  let slideIndex = 1;

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  } 
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

