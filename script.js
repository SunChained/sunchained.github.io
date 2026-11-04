const zoneAnnee = document.querySelector(".annee");
zoneAnnee.textContent = new Date().getFullYear();

const commande = "whoami";
let position = 0;
const zoneCommande = document.querySelector(".terminal-commande");
const zoneReponse = document.querySelector(".terminal-reponse");
function ecrireLettre() {
  zoneCommande.textContent = zoneCommande.textContent + commande[position];
  position = position + 1;
  if (position === commande.length) {
    clearInterval(minuteur);
    zoneReponse.textContent = "Sunchained";
  }
}
const minuteur = setInterval(ecrireLettre, 500);
