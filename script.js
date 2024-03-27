document.addEventListener("DOMContentLoaded", function() {
    const years = document.querySelectorAll(".year");
    const popup = document.getElementById("popup");
    const popupYear = document.getElementById("popup-year");
    const popupContent = document.getElementById("popup-content");

    years.forEach(year => {
        year.addEventListener("click", function() {
            const yearValue = year.getAttribute("data-year");
            popupYear.textContent = yearValue;
            popupContent.innerHTML = "This is the popup content for year " + yearValue;
            popup.style.display = "block";
        });
    });
});

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
