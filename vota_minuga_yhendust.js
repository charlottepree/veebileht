// võta_minuga_yhendust.js

// See on JavaScriptis kirjutatud funktsioon, mille ülesanne on pärast nupu vajutust võtta täidetud vormi 
// sisu ja anda need väärtused edasi funktsioonile mailto:, mis avab meilirakenduse ja vormistab kirja.
// Lisaks on tal ülesanne liikuda kinnituslehele pärast nupu vajutust
function saadaMeil() {
    // Võtab vormi sisu
    var nimi = document.getElementById("name").value;
    var telefon = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var kiri = document.getElementById("message").value;

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
