const gallery = document.querySelector('#gallery');
const hardskill = document.querySelector('#icone');


const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const linkGithub = document.querySelector('.link-github')
const linkSite = document.querySelector('.link-site')

/* script header */
const navItems = document.querySelectorAll('.header_li');

    // Parcourez chaque élément et ajoutez des écouteurs d'événements pour gérer le clic
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Ajoutez la classe "active" à l'élément cliqué
            item.classList.add('active');
            
            // Parcourez les autres éléments et supprimez la classe "active" sauf pour l'élément cliqué
            navItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
/*section travaux */
async function loadProjects() {
  try {
    const response = await fetch("./data/projects.json");
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
  projectElement.classList.add("container_project")
  projectElement.appendChild(imgElement);
  projectElement.appendChild(titleElement);
  gallery.appendChild(projectElement);
//gestion de clic pour modal // 
  projectElement.addEventListener('click', () => {
    modalImage.src = project.imageUrl;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    linkGithub.href = project.code;
    if (project.site) {
      linkSite.href = project.site;
      linkSite.style.display = 'inline-block'; // Afficher le lien seulement s'il existe
    } else {
      linkSite.style.display = 'none'; // Masquer le lien s'il n'existe pas
    }
    modal.style.display = 'block';
  });
}

// Gestionnaire d'événement pour fermer le modal
modal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Appel de la fonction pour charger les projets
loadProjects();

async function loadskill() {
  try {
    const response = await fetch("./data/hardskill.json");
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
  const iconelist= document.createElement('li');
  const iconecontainer =document.createElement('div');
  const titleElement = document.createElement('p');
  titleElement.innerText = icone.name;
  iconelist.classList.add("icone-list");
  iconecontainer.classList.add("colored");
  iconecontainer.classList.add(icone.class);
  iconecontainer.classList.add("style-icone");
  titleElement.classList.add('name-icone');
  iconelist.appendChild(iconecontainer)
  iconelist.appendChild(titleElement)
  hardskill.appendChild(iconelist)

}
loadskill()


