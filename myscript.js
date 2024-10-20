document.addEventListener("DOMContentLoaded", function() {
    const plantCards = document.querySelectorAll('.plant-card');
  
    plantCards.forEach(card => {
      const inquireLink = card.querySelector('a'); // Nuoroda aplink paveikslėlį
      const plantName = card.querySelector('h3').innerText; // Augalo pavadinimas
  
      // Pridedame įvykį paspaudus nuorodą aplink paveikslėlį
      inquireLink.addEventListener('click', function(event) {
        event.preventDefault(); // Neleisti numatytojo perėjimo
        // Išsaugoti augalo pavadinimą į localStorage
        localStorage.setItem('selectedPlant', plantName);
  
        // Pereiti į kontaktų puslapį
        window.location.href = inquireLink.href; // Naudojame jau esamą nuorodą
      });
    });
  
    // Tikriname, ar kontaktų puslapyje turime augalo pavadinimą
    const contactPage = window.location.pathname.includes('kontaktai.html');
    if (contactPage) {
      const textarea = document.querySelector('#textarea');
      const selectedPlant = localStorage.getItem('selectedPlant');
      
      if (selectedPlant && textarea) {
        // Įrašome augalo pavadinimą į textarea
        textarea.value = `Domiuosi dėl augalo: ${selectedPlant}`;
      }

      console.log("JavaScript failas įkeltas ir veikia");

    }
  });
  