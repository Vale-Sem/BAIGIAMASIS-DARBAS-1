document.addEventListener("DOMContentLoaded", function() {
  console.log("JavaScript failas įkeltas ir veikia");

  const plantCards = document.querySelectorAll('.plant-card');

  plantCards.forEach(card => {
    const inquireLink = card.querySelector('a'); // Nuoroda aplink paveikslėlį
    const plantName = card.querySelector('h3').innerText; // Augalo pavadinimas

    inquireLink.addEventListener('click', function(event) {
      event.preventDefault(); // Neleisti numatytojo perėjimo
      localStorage.setItem('selectedPlant', plantName); // Išsaugoti augalo pavadinimą į localStorage

      // Pereiti į kontaktų puslapį
      window.location.href = inquireLink.href;
    });
  });

  // Patikrinti ar esame kontaktų puslapyje
  const contactPage = window.location.pathname.includes('kontaktai.html');
  if (contactPage) {
    const textarea = document.querySelector('#textarea');
    const selectedPlant = localStorage.getItem('selectedPlant');
    
    if (selectedPlant && textarea) {
      textarea.value = `Domiuosi dėl augalo: ${selectedPlant}`;
    }
  }
});
