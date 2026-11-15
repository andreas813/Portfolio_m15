document.addEventListener('DOMContentLoaded', () => {
    // 1. Ribbon Animation Setup
    const ribbonTrack = document.getElementById('ribbonTrack');
    if (ribbonTrack) {
        ribbonTrack.innerHTML += ribbonTrack.innerHTML;
    }

    // 2. i18n (Language Switching) Setup
    const translations = {
        en: {
            nav_about: "About me",
            nav_skills: "Skills",
            nav_projects: "Projects",
            hero_role: "Frontend Developer",
            hero_btn_work: "Check my work",
            hero_btn_contact: "Contact me",
            ribbon_1: "Available for remote work",
            ribbon_2: "Frontend Developer",
            ribbon_3: "Based in North Rhine-Westphalia",
            ribbon_4: "Open to opportunities",
            about_tag: "Who I am",
            about_title: "About me",
            about_text: "Hey there, I'm Andreas! Privacy and security minded IT generalist with many years of hands-on experience in Linux administration and self-hosting, as well as ten years of technical testing practice in an industrial setting.",
            about_li1: "Based in North Rhine-Westphalia — open to remote work in DE",
            about_li2: "Independent volunteer administration, professionally active at the intersection of web development and API integration",
            about_li3: "Analytical thinking, technical curiosity and quality-oriented approach",
            skills_title: "Skill Set",
            skills_desc: "A short introduction of my current skills. Since I'm ready to learn new things, there may well be more to come on this topic.",
            skills_btn: "Let's Talk",
            projects_title: "Featured Projects",
            projects_desc: "Explore a selection of my work — interact with projects to see details.",
            testimonials_title: "What my colleagues say about me",
            test1_quote: "Andreas has proven to be a reliable project partner. His technical skills and proactive approach were crucial to the success of our project.",
            test1_cite: "Nick J. — Project Partner",
            test2_quote: "I had the good fortune of working with Andreas on a delivery. He was calm, competent, and delightful to work with.",
            test2_cite: "Jana S. — Colleague",
            test3_quote: "Consistently delivered on time with great attention to detail and strong collaboration skills.",
            test3_cite: "Thomas S. — Frontend Developer",
            contact_title: "Let's work together",
            contact_desc: "Got a problem to solve? Feel free to reach out with a description of the role you envision for me.",
            label_name: "What's your name?",
            placeholder_name: "Your name goes here",
            label_email: "What's your email?",
            placeholder_email: "youremail@email.com",
            label_message: "Tell me about the role or project:",
            placeholder_message: "Hello Andreas, I am interested in...",
            privacy_text: "I’ve read the privacy policy and agree to the processing of my data as outlined.",
            btn_submit: "Say Hello",
            footer_role: "Web Developer — North Rhine-Westphalia Germany"
        },
        de: {
            nav_about: "Über mich",
            nav_skills: "Fähigkeiten",
            nav_projects: "Projekte",
            hero_role: "Frontend Developer",
            hero_btn_work: "Projekte ansehen",
            hero_btn_contact: "Kontakt aufnehmen",
            ribbon_1: "Verfügbar für Remotearbeit",
            ribbon_2: "Frontend Developer",
            ribbon_3: "Wohnhaft in Nordrhein-Westfalen",
            ribbon_4: "Offen für neue Möglichkeiten",
            about_tag: "Wer ich bin",
            about_title: "Über mich",
            about_text: "Hallo, ich bin Andreas! Datenschutz- und sicherheitsbewusster IT-Generalist mit langjähriger Praxiserfahrung in der Linux-Administration und im Self-Hosting sowie zehn Jahren technischer Prüfpraxis im industriellen Umfeld.",
            about_li1: "Wohnhaft in Nordrhein-Westfalen — offen für Remote-Arbeit in DE",
            about_li2: "Eigenständige ehrenamtliche Administration, beruflich aktiv an der Schnittstelle von Webentwicklung und API-Integration",
            about_li3: "Analytisches Denken, technische Neugier und qualitätsorientierter Ansatz",
            skills_title: "Fähigkeiten",
            skills_desc: "Eine kurze Einführung in meine aktuellen Skills. Da ich immer bereit bin, Neues zu lernen, kommt hier sicher noch mehr hinzu.",
            skills_btn: "Kontakt aufnehmen",
            projects_title: "Ausgewählte Projekte",
            projects_desc: "Entdecke eine Auswahl meiner Arbeiten — interagiere mit den Projekten, um Details zu sehen.",
            testimonials_title: "Was meine Kollegen über mich sagen",
            test1_quote: "Andreas hat sich als zuverlässiger Projektpartner erwiesen. Seine technischen Fähigkeiten und seine proaktive Herangehensweise waren entscheidend für den Erfolg unseres Projekts.",
            test1_cite: "Nick J. — Projektpartner",
            test2_quote: "Ich hatte das Glück, mit Andreas an einem Release zu arbeiten. Er war ruhig, kompetent und die Zusammenarbeit hat großen Spaß gemacht.",
            test2_cite: "Jana S. — Kollegin",
            test3_quote: "Hat stets termingerecht und mit großer Detailgenauigkeit sowie starken Teamkompetenzen geliefert.",
            test3_cite: "Thomas S. — Frontend Developer",
            contact_title: "Lass uns zusammenarbeiten",
            contact_desc: "Gibt es Probleme zu lösen? Kontaktiere mich gerne mit einer Beschreibung der Rolle, für die Du dir mich vorstellen kannst.",
            label_name: "Wie heißt du?",
            placeholder_name: "Dein Name hier",
            label_email: "Wie lautet deine E-Mail-Adresse?",
            placeholder_email: "deine@email.com",
            label_message: "Erzähl mir von der Rolle oder dem Projekt:",
            placeholder_message: "Hallo Andreas, ich interessiere mich für...",
            privacy_text: "Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.",
            btn_submit: "Nachricht senden",
            footer_role: "Web Developer — Nordrhein-Westfalen Deutschland"
        }
    };

    const switchEl = document.querySelector(".lang-switch");
    const options = switchEl ? switchEl.querySelectorAll(".lang-option") : [];

    function setLanguage(lang) {
        // Update active class on buttons
        options.forEach(btn => {
            const isTarget = btn.dataset.lang === lang;
            btn.classList.toggle("active", isTarget);
            btn.setAttribute("aria-pressed", isTarget ? "true" : "false");
        });

        if (switchEl) {
            switchEl.setAttribute("data-active", lang);
        }

        // Translate text elements
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Translate placeholders
        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
    }

    options.forEach(btn => {
        btn.addEventListener("click", () => {
            setLanguage(btn.dataset.lang);
        });
    });

    // Initial default language
    setLanguage("en");

    // 3. Contact Form Validation Logic (User Story 7)
    const form = document.querySelector(".contact-form");
    if (form) {
        const submitBtn = form.querySelector("button[type='submit']");
        const inputs = form.querySelectorAll("input, textarea");

        // Helper to check overall validity and toggle submit button state
        function updateFormState() {
            const isValid = form.checkValidity();
            if (submitBtn) {
                submitBtn.disabled = !isValid;
            }
        }

        // onBlur validation: add 'touched' class only when user leaves the field
        inputs.forEach(input => {
            input.addEventListener("blur", () => {
                input.classList.add("touched");
            });

            // Continuously update button state as user types/checks
            input.addEventListener("input", updateFormState);
            input.addEventListener("change", updateFormState);
        });

        // Initial check
        updateFormState();

        // Form submission feedback simulation
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            if (form.checkValidity()) {
                // Success feedback
                form.innerHTML = `<div class="alert alert-success py-4 text-center" role="alert">
                    <h4 class="alert-heading">Message sent successfully!</h4>
                    <p class="mb-0">Thank you for your message, Andreas will get back to you soon.</p>
                </div>`;
            }
        });
    }
});