document.addEventListener('DOMContentLoaded', () => {
    const ribbonTrack = document.getElementById('ribbonTrack');
    ribbonTrack.innerHTML += ribbonTrack.innerHTML;
});


document.addEventListener("DOMContentLoaded", () => {
    const switchEl = document.querySelector(".lang-switch");
    const options = switchEl.querySelectorAll(".lang-option");

    options.forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.dataset.lang;

            // update active state
            options.forEach(o => {
                o.classList.remove("active");
                o.setAttribute("aria-pressed", "false");
            });

            btn.classList.add("active");
            btn.setAttribute("aria-pressed", "true");

            switchEl.setAttribute("data-active", lang);

            // Placeholder for future i18n logic
            console.log("Language selected:", lang);
        });
    });

    // Set initial state
    switchEl.setAttribute("data-active", "en");
});
