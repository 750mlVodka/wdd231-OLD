document.addEventListener("DOMContentLoaded", function() {
    //Current Date
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    //Last Modified
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
})