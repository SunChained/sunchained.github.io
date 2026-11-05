const zoneAnnee = document.querySelector(".annee");
zoneAnnee.textContent = new Date().getFullYear();

const commandes = ["whoami", "cat role.txt", "echo $PASSION"];
const reponses = [
  "Sunchained",
  "Développeur web en formation",
  "Tout ce qui touche à la création",
];
let numero = 0;
let position = 0;
const zonesCommande = document.querySelectorAll(".terminal-commande");
const zonesReponse = document.querySelectorAll(".terminal-reponse");
const zonesDollar = document.querySelectorAll(".terminal-dollar");
function ecrireLettre() {
  if (position === 0) {
    zonesDollar[numero].textContent = "$";
  }
  zonesCommande[numero].textContent =
    zonesCommande[numero].textContent + commandes[numero][position];
  position = position + 1;
  if (position === commandes[numero].length) {
    zonesReponse[numero].textContent = reponses[numero];
    numero = numero + 1;
    position = 0;
    if (numero === commandes.length) {
      clearInterval(minuteur);
    }
  }
}
const minuteur = setInterval(ecrireLettre, 90);
