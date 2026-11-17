/* @module Handle project-detail dialogs and testimonial carousel interactions. */
const projectTechnologyIcons = {
    HTML: "html-64.svg", CSS: "css-64.svg", JavaScript: "javascript-64.svg",
    Angular: "angular-64.svg", Firebase: "firebase-64.svg", TypeScript: "typescript-64.svg"
};
let activeProjectIndex = 0;
let projectReturnFocus = null;

/** @function initializePortfolioInteractions Bind project dialogs and testimonial controls. */
function initializePortfolioInteractions() {
    initializeProjectDialogs();
    initializeTestimonialSlider();
    document.addEventListener("portfolio:modalclosed", restoreProjectFocus);
}

/** @function initializeProjectDialogs Bind click and keyboard activation to every project row. */
function initializeProjectDialogs() {
    document.querySelectorAll(".project-item").forEach((item, index) => {
        item.addEventListener("click", () => openProjectDialog(index, item));
        item.addEventListener("keydown", (event) => activateProjectFromKeyboard(event, index, item));
    });
}

/** @function activateProjectFromKeyboard Open a project row with Enter or Space. */
function activateProjectFromKeyboard(event, index, item) {
    if (!["Enter", " "].includes(event.key)) return;
    event.preventDefault();
    openProjectDialog(index, item);
}

/** @function openProjectDialog Populate the shared modal with the selected project details. */
function openProjectDialog(index, trigger) {
    const items = [...document.querySelectorAll(".project-item")];
    if (!items[index]) return;
    activeProjectIndex = index;
    projectReturnFocus = trigger;
    openModal(items[index].dataset.title, buildProjectMarkup(items[index], index, items.length));
    document.querySelector(".modal-panel")?.classList.add("is-project");
    bindProjectModalControls();
    handleProjectPreview();
}

/** @function buildProjectMarkup Create the Figma-style project panel from existing row metadata. */
function buildProjectMarkup(item, index, total) {
    const language = document.documentElement.lang;
    const labels = projectModalLabels(language);
    const title = escapeProjectText(item.dataset.title);
    const preview = escapeProjectText(item.dataset.preview || "");
    const technologies = buildProjectTechnologies(item.dataset.tech || "");
    const actions = buildProjectActions(item, labels);
    const description = escapeProjectText(item.dataset[`description${language === "de" ? "De" : "En"}`] || labels.pending);
    const number = String(index + 1).padStart(2, "0");
    return `<div class="project-detail"><div class="project-detail-copy"><p class="project-number">${number}</p><h2>${title}</h2><h3>${labels.question}</h3><p class="project-description">${description}</p><div class="project-technologies">${technologies}</div><div class="project-actions">${actions}</div></div><figure class="project-preview"><img src="${preview}" alt="${title} project preview"><div class="project-preview-fallback" hidden>${labels.previewMissing}</div></figure><button class="project-next" type="button" data-project-next>${labels.next}<span aria-hidden="true">→</span><span class="visually-hidden">${index + 2 > total ? 1 : index + 2}</span></button></div>`;
}

/** @function projectModalLabels Return localized interface labels without inventing project facts. */
function projectModalLabels(language) {
    return language === "de" ? {question:"Worum geht es in diesem Projekt?",pending:"Eine Projektbeschreibung wird ergänzt, sobald die finalen Projektdetails feststehen.",linksPending:"Projektlinks werden ergänzt, sobald die finalen URLs vorliegen.",previewMissing:"Projektvorschau derzeit nicht verfügbar.",next:"Nächstes Projekt",github:"GitHub",live:"Live Test"} : {question:"What is this project about?",pending:"A project description will be added once the final project details are available.",linksPending:"Project links will be added once the final URLs are available.",previewMissing:"Project preview is currently unavailable.",next:"Next project",github:"GitHub",live:"Live Test"};
}

/** @function buildProjectTechnologies Render the technology labels and existing SVG icons. */
function buildProjectTechnologies(value) {
    return value.split("|").map((name) => name.trim()).filter(Boolean).map((name) => {
        const icon = projectTechnologyIcons[name];
        return `<span class="project-tech">${icon ? `<img src="assets/icons/${icon}" alt="">` : ""}<span>${escapeProjectText(name)}</span></span>`;
    }).join("");
}

/** @function buildProjectActions Render real project URLs or clearly disabled link placeholders. */
function buildProjectActions(item, labels) {
    const github = validProjectUrl(item.dataset.github);
    const live = validProjectUrl(item.dataset.live);
    const links = [[labels.github, github], [labels.live, live]];
    return links.map(([label, url]) => url ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>` : `<button type="button" disabled title="${labels.linksPending}">${label}</button>`).join("");
}

/** @function validProjectUrl Accept only absolute HTTP or HTTPS project destinations. */
function validProjectUrl(value) {
    try { const url = new URL(value); return ["http:", "https:"].includes(url.protocol) ? url.href : ""; }
    catch { return ""; }
}

/** @function escapeProjectText Escape metadata before inserting it into the project dialog. */
function escapeProjectText(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[character]));
}

/** @function bindProjectModalControls Bind the next-project action after each modal render. */
function bindProjectModalControls() {
    document.querySelector("[data-project-next]")?.addEventListener("click", openNextProject);
}

/** @function openNextProject Advance to the next project and wrap to the first item. */
function openNextProject() {
    const items = [...document.querySelectorAll(".project-item")];
    const nextIndex = (activeProjectIndex + 1) % items.length;
    if (items[nextIndex]) openProjectDialog(nextIndex, projectReturnFocus);
}

/** @function handleProjectPreview Show a useful fallback when the preview asset is missing. */
function handleProjectPreview() {
    const image = document.querySelector(".project-preview img");
    image?.addEventListener("error", () => { image.hidden = true; image.nextElementSibling.removeAttribute("hidden"); }, { once: true });
}

/** @function restoreProjectFocus Return focus to the project row after its dialog closes. */
function restoreProjectFocus() {
    projectReturnFocus?.focus();
    projectReturnFocus = null;
}

/** @function initializeTestimonialSlider Bind arrows and pagination buttons to the carousel state. */
function initializeTestimonialSlider() {
    const cards = [...document.querySelectorAll(".testimonial")];
    const controls = document.querySelector(".slider-controls");
    if (!controls || cards.length < 2) return;
    controls.querySelector(".prev")?.addEventListener("click", () => showTestimonial(-1));
    controls.querySelector(".next")?.addEventListener("click", () => showTestimonial(1));
    controls.querySelectorAll("[data-testimonial-index]").forEach(bindTestimonialDot);
    updateTestimonialDisplay(0);
}

/** @function bindTestimonialDot Connect one pagination button to its testimonial index. */
function bindTestimonialDot(button) {
    button.addEventListener("click", () => updateTestimonialDisplay(Number(button.dataset.testimonialIndex)));
}

/** @function showTestimonial Move one step through the testimonial carousel. */
function showTestimonial(direction) {
    const count = document.querySelectorAll(".testimonial").length;
    updateTestimonialDisplay((activeTestimonialIndex + direction + count) % count);
}

let activeTestimonialIndex = 0;

/** @function updateTestimonialDisplay Set active, previous, and next cards plus accessible states. */
function updateTestimonialDisplay(index) {
    const cards = [...document.querySelectorAll(".testimonial")];
    if (!cards.length) return;
    activeTestimonialIndex = (index + cards.length) % cards.length;
    updateTestimonialCards(cards);
    updateTestimonialDots();
}

/** @function updateTestimonialCards Assign the active card and its adjacent desktop positions. */
function updateTestimonialCards(cards) {
    cards.forEach((card, index) => {
        card.classList.toggle("active", index === activeTestimonialIndex);
        card.classList.toggle("is-prev", index === (activeTestimonialIndex - 1 + cards.length) % cards.length);
        card.classList.toggle("is-next", index === (activeTestimonialIndex + 1) % cards.length);
        card.setAttribute("aria-hidden", String(index !== activeTestimonialIndex));
    });
}

/** @function updateTestimonialDots Synchronize active pagination styling and current state. */
function updateTestimonialDots() {
    document.querySelectorAll("[data-testimonial-index]").forEach((button, index) => {
        const active = index === activeTestimonialIndex;
        button.classList.toggle("active", active);
        if (active) button.setAttribute("aria-current", "true");
        else button.removeAttribute("aria-current");
    });
}

document.addEventListener("DOMContentLoaded", initializePortfolioInteractions);
