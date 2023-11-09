const gallery = document.querySelector('#gallery');
const hardskill = document.querySelector('#icone');

async function loadProjects() {
  try {
    const response = await fetch("./projects.json");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    data.forEach(project => {
      createProjectElement(project);
    });
  } catch (error) {
    console.error("Erreur de chargement du fichier JSON : " + error);
  }
}

function createProjectElement(project) {
  const projectElement = document.createElement('div');
  const imgElement = document.createElement('img');
  const titleElement = document.createElement('h3');
  imgElement.src = project.imageUrl;
  titleElement.innerText = project.title;
  projectElement.appendChild(imgElement);
  projectElement.appendChild(titleElement);
  gallery.appendChild(projectElement);
}

// Appel de la fonction pour charger les projets
loadProjects();

async function loadskill() {
  try {
    const response = await fetch("./hardskill.json");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const dataIcone = await response.json();

    dataIcone.forEach(icone => {
      createSkillElement(icone);
    });
  } catch (error) {
    console.error("Erreur de chargement du fichier JSON : " + error);
  }
}

function createSkillElement(icone) {
  const iconelist= document.createElement('li')
  const iconecontainer =document.createElement('div')
  const titleElement = document.createElement('p');
  titleElement.innerText = icone.name;
  iconecontainer.classList.add(icone.class);
  iconecontainer.classList.add("style-icone");
  titleElement.classList.add('name-icone');
  iconelist.appendChild(iconecontainer)
  iconelist.appendChild(titleElement)
  hardskill.appendChild(iconelist)

}
loadskill()




document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
      e.preventDefault(); // Empêche l'envoi par défaut du formulaire

      // Récupération des valeurs du formulaire
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Vous pouvez traiter ces valeurs comme vous le souhaitez, par exemple, les envoyer à un serveur via une requête AJAX.

      // Réinitialiser le formulaire
      form.reset();

      // Afficher un message de confirmation
      alert("Merci pour votre message ! Nous vous répondrons bientôt.");
  });
});