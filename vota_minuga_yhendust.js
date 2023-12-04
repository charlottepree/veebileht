// võta_minuga_yhendust.js

function saadaMeil() {
    // Võtab vormi sisu
    var nimi = document.getElementById("name").value;
    var telefon = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var kiri = document.getElementById("message").value;

    // Kontrollib, kas kõik väljad on täidetud
    if (!nimi || !telefon || !email || !kiri) {
        alert("Palun täida kõik väljad enne meili saatmist!");
        return;
    }

    // Loob meili lingi vastavate väärtustega
    var meiliLink = "mailto:charlotte.pree@gmail.com?subject=Kontaktivorm&body=";
    meiliLink += "Nimi: " + nimi + "%0D%0A";
    meiliLink += "Telefon: " + telefon + "%0D%0A";
    meiliLink += "E-post: " + email + "%0D%0A";
    meiliLink += "Kiri: " + kiri;

    // Avab meilirakenduse
    window.location.href = meiliLink;

    // Liigub kinnituslehele
    window.location.href = "kinnitusleht.html";
}
