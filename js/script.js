document.addEventListener("DOMContentLoaded", () => {

    // Create tooltip box
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    document.body.appendChild(tooltip);

    // Add hover events to each card
    document.querySelectorAll(".card").forEach(card => {

        card.addEventListener("mousemove", (e) => {
            tooltip.textContent = card.dataset.info;  // Show unique message
            tooltip.style.left = (e.pageX + 15) + "px";
            tooltip.style.top = (e.pageY + 15) + "px";
            tooltip.style.opacity = 1;
        });

        card.addEventListener("mouseleave", () => {
            tooltip.style.opacity = 0;
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {

    // DATA FOR EACH SECTION
    const cityData = {
        bestCities: ["Raipur", "Bilaspur", "Korba"],
        bestVisibility: ["Ambikapur", "Jashpur", "Kanker"],
        bestCloud: ["Dhamtari", "Mahasamund", "Raigarh"],
        leastLight: ["Sukma", "Bijapur", "Narayanpur"]
    };

    // INSERT DATA INTO HTML BOXES
    document.getElementById("best-cities-box").textContent =
        cityData.bestCities.join(", ");

    document.getElementById("best-visibility-box").textContent =
        cityData.bestVisibility.join(", ");

    document.getElementById("best-cloud-box").textContent =
        cityData.bestCloud.join(", ");

    document.getElementById("least-light-box").textContent =
        cityData.leastLight.join(", ");
});


