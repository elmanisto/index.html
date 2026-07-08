// Animation d'apparition des cartes produits

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.6s ease";
  observer.observe(card);
});

// Bouton WhatsApp flottant

const whatsapp = document.createElement("a");

whatsapp.href = "https://wa.me/33761666226";
whatsapp.target = "_blank";
whatsapp.innerHTML = "💬";

whatsapp.style.position = "fixed";
whatsapp.style.bottom = "20px";
whatsapp.style.right = "20px";
whatsapp.style.width = "60px";
whatsapp.style.height = "60px";
whatsapp.style.background = "#25D366";
whatsapp.style.color = "white";
whatsapp.style.borderRadius = "50%";
whatsapp.style.display = "flex";
whatsapp.style.justifyContent = "center";
whatsapp.style.alignItems = "center";
whatsapp.style.fontSize = "30px";
whatsapp.style.textDecoration = "none";
whatsapp.style.boxShadow = "0 0 20px rgba(0,0,0,.4)";
whatsapp.style.zIndex = "9999";

document.body.appendChild(whatsapp);
