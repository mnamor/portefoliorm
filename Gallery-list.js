document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery-container");

  // Liste des images (en réalité, vous devrez remplacer ceci par un appel à votre serveur)
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    // Ajoutez les autres images de votre dossier ici
  ];

  images.forEach(image => {
    const imgElement = document.createElement("img");
    imgElement.src = `./images/${image}`;  // Le chemin des images dans votre dossier
    imgElement.alt = `Image ${image}`;
    galleryContainer.appendChild(imgElement);
  });
});
