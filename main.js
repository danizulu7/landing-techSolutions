document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navList = document.getElementById("nav-list");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  hamburger.addEventListener("click", function () {
    navList.classList.toggle("active");
  });

  portfolioItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const imageUrl = item.getAttribute("data-image");
      item.style.setProperty("--hover-background-image", `url(${imageUrl})`);
    });
  });
});

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "service_f0e93l7";
  const templateID = "template_s96r3jo";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
