// võta_minuga_yhendust.js

function saada() {
    // Võtab vormi sisu
    var nimi = document.getElementById("name").value;
    var telefon = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var kiri = document.getElementById("message").value;

    // Kontrollib, kas kõik väljad on täidetud ja kui ei ole, siis annab märguande, et palun täida kõik väljad
    if (!nimi || !telefon || !email || !kiri) {
        alert("Palun täida kõik väljad enne meili saatmist!");
        return;
    }

    // Loob meili lingi vastavate väärtustega
    var meililink = "mailto:charlotte.pree@gmail.com?subject=Kontaktivorm&body=";
    meililink += "Nimi: " + nimi + "%0D%0A";
    meililink += "Telefon: " + telefon + "%0D%0A";
    meililink += "E-post: " + email + "%0D%0A";
    meililink += "Kiri: " + kiri;

    // Avab meilirakenduse
    window.location.href = meililink;

    // Liigub kinnituslehele
    window.location.href = "kinnitusleht.html";
}

// allikas: https://www.w3schools.com/jsref/prop_text_value.asp
// allikas: https://www.w3schools.com/jsref/prop_loc_href.asp
// allikas: https://mailtrap.io/blog/mailto-links-explained/