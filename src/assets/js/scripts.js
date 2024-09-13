/*!
 * Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project
// Fonction pour afficher l'aperçu de l'image sélectionnée

function previewImage(event) {
  var reader = new FileReader();
  var imagePreview = document.getElementById("previewImage");

  reader.onload = function () {
    if (reader.readyState == 2) {
      imagePreview.src = reader.result;
    }
  };

  reader.readAsDataURL(event.target.files[0]);
}

// Écouteur d'événement pour le champ d'entrée de l'image
var imageInput = document.getElementById("imageInput");
imageInput.addEventListener("change", previewImage);
