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
  