/* @data Keep all interface translations in one maintainable dictionary. */
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

/* @data Keep legal copy separate from modal behavior. */
const legalTexts = {
    imprint: {
        title: "Impressum",
        content: `
            <p><strong>Angaben gemäß § 5 TMG / Pflichtangaben:</strong></p>
            <p><strong>Name:</strong> Andreas<br>
            <strong>Wohnhaft in:</strong> Nordrhein-Westfalen, Deutschland<br>
            <strong>Kontakt:</strong> E-Mail über das Kontaktformular dieser Website</p>
            <hr class="my-3">
            <p><strong>Hinweis zum Projekt:</strong><br>
            Diese Website ist ein studentisches Übungsprojekt im Rahmen einer Weiterbildung zum Frontend Developer. Es handelt sich hierbei um ein nicht-kommerzielles Portfolio ohne redaktionelle Inhalte oder den Verkauf von Waren und Dienstleistungen.</p>
            <p><strong>Streitbeilegung:</strong><br>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>`
    },
    privacy: {
        title: "Datenschutzerklärung",
        content: `
            <p><strong>1. Datenschutz auf einen Blick</strong></p>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
            <p><strong>2. Hosting & Kontaktformular</strong></p>
            <p>Diese Website wird im Rahmen eines Weiterbildungsprojekts betrieben. Wenn Sie mir per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert und nicht an Dritte weitergegeben.</p>`
    }
};

document.addEventListener("DOMContentLoaded", initializePortfolio);

/** @function initializePortfolio Start all page-level behavior after the DOM is ready. */
function initializePortfolio() {
    initializeRibbon();
    initializeLanguageSwitcher();
    initializeContactForm();
    initializeLegalModals();
}

/** @function initializeRibbon Duplicate the ribbon items for a continuous animation. */
function initializeRibbon() {
    const track = document.getElementById("ribbonTrack");
    if (track) track.insertAdjacentHTML("beforeend", track.innerHTML);
}

/** @function initializeLanguageSwitcher Bind language buttons and apply English initially. */
function initializeLanguageSwitcher() {
    const buttons = document.querySelectorAll(".lang-option");
    buttons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
    setLanguage("en");
}

/** @function setLanguage Apply translations and update the document language. */
function setLanguage(language) {
    if (!translations[language]) return;
    document.documentElement.lang = language;
    updateLanguageButtons(language);
    updateTranslatedText(language);
    updateTranslatedPlaceholders(language);
}

/** @function updateLanguageButtons Synchronize selected state and accessibility attributes. */
function updateLanguageButtons(language) {
    document.querySelectorAll(".lang-option").forEach((button) => {
        const active = button.dataset.lang === language;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });
    document.querySelector(".lang-switch")?.setAttribute("data-active", language);
}

/** @function updateTranslatedText Replace content for keys present in the dictionary. */
function updateTranslatedText(language) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const value = translations[language][element.dataset.i18n];
        if (value) element.textContent = value;
    });
}

/** @function updateTranslatedPlaceholders Translate form placeholders. */
function updateTranslatedPlaceholders(language) {
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        const value = translations[language][element.dataset.i18nPlaceholder];
        if (value) element.placeholder = value;
    });
}

/** @function initializeContactForm Bind validation and the current demo submission feedback. */
function initializeContactForm() {
    const form = document.querySelector(".contact-form");
    if (!form) return;
    form.querySelectorAll("input, textarea").forEach((field) => field.addEventListener("blur", markFieldTouched));
    form.addEventListener("input", () => updateFormState(form));
    form.addEventListener("change", () => updateFormState(form));
    form.addEventListener("submit", handleFormSubmit);
    updateFormState(form);
}

/** @function markFieldTouched Mark a field after the visitor leaves it. */
function markFieldTouched(event) {
    event.currentTarget.classList.add("touched");
}

/** @function updateFormState Enable submission only while native form validation passes. */
function updateFormState(form) {
    const button = form.querySelector("button[type='submit']");
    if (button) button.disabled = !form.checkValidity();
}

/** @function handleFormSubmit Show the existing front-end demo feedback for valid input. */
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) return;
    showFormSuccess(form);
}

/** @function showFormSuccess Replace the form with its current demo success message. */
function showFormSuccess(form) {
    form.innerHTML = `<div class="alert alert-success py-4 text-center" role="alert">
        <h4 class="alert-heading">Message sent successfully!</h4>
        <p class="mb-0">Thank you for your message, Andreas will get back to you soon.</p>
    </div>`;
}

/** @function initializeLegalModals Connect legal links, close controls, and Escape handling. */
function initializeLegalModals() {
    ["modal-close", "modal-close-2", "modal-backdrop"].forEach(bindModalClose);
    ["link-imprint", "link-privacy"].forEach(bindLegalLink);
    document.addEventListener("keydown", handleModalKeydown);
}

/** @function bindModalClose Bind one close control when it exists. */
function bindModalClose(id) {
    document.getElementById(id)?.addEventListener("click", closeModal);
}

/** @function bindLegalLink Bind one legal footer link when it exists. */
function bindLegalLink(id) {
    document.getElementById(id)?.addEventListener("click", openLegalText);
}

/** @function openLegalText Resolve the selected legal text and open its modal. */
function openLegalText(event) {
    event.preventDefault();
    const key = event.currentTarget.id.replace("link-", "");
    const text = legalTexts[key];
    if (text) openModal(text.title, text.content);
}

/** @function openModal Populate and reveal the modal above the blurred backdrop. */
function openModal(title, content) {
    const modal = document.getElementById("project-modal");
    if (!modal) return;
    document.getElementById("project-modal-title").textContent = title;
    document.getElementById("project-modal-body").innerHTML = content;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    document.getElementById("modal-close")?.focus();
}

/** @function closeModal Hide the modal and restore normal page scrolling. */
function closeModal() {
    const modal = document.getElementById("project-modal");
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

/** @function handleModalKeydown Close the active modal when Escape is pressed. */
function handleModalKeydown(event) {
    const modal = document.getElementById("project-modal");
    if (event.key === "Escape" && modal?.classList.contains("open")) closeModal();
}
