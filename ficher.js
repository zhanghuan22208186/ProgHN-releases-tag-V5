function direBonjour() {
  const nom = document.getElementById("nom").value;
  alert("Bonjour " + nom + " !");
}

function toggleAide() {
  const divAide = document.getElementById("aide");
  const bouton = document.getElementById("btnAide");

  if (divAide.style.display === "none") {
    divAide.style.display = "block";
    bouton.textContent = "Cacher l’aide";
  } else {
    divAide.style.display = "none";
    bouton.textContent = "Afficher l’aide";
  }
}