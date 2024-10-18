function dragOverHandler(event) {
    event.preventDefault();
    document.getElementById("dropZone").classList.add("hover");
}

function dropHandler(event) {
    event.preventDefault();
    document.getElementById("dropZone").classList.remove("hover");

    // Récupère le(s) fichier(s) déposé(s)
    var files = event.dataTransfer.files;
    
    // Vérifie si un fichier a été déposé
    if (files.length > 0) {
        var file = files[0]; // Prend le premier fichier

        // Si c'est une image, on l'affiche
        if (file.type.startsWith("image/")) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById("preview").src = e.target.result;
            }
            reader.readAsDataURL(file);
        } else {
            // Si ce n'est pas une image, affiche simplement le nom du fichier
            document.getElementById("preview").alt = "Fichier déposé : " + file.name;
            document.getElementById("preview").src = "";
        }
    }
}