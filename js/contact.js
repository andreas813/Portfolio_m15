/* @module Validate contact fields on blur and submit through the PHP endpoint. */
const contactMessages = {
    en: { required: "Please complete this field.", email: "Please enter a valid email address.", name: "Please enter at least two characters.", message: "Please enter at least ten characters.", sending: "Sending message…", success: "Your message was handed over to the mail server.", failure: "The message could not be sent. Please try again later or use another contact method.", config: "The contact form is not configured yet. Please contact the site owner directly." },
    de: { required: "Bitte fülle dieses Feld aus.", email: "Bitte gib eine gültige E-Mail-Adresse ein.", name: "Bitte gib mindestens zwei Zeichen ein.", message: "Bitte gib mindestens zehn Zeichen ein.", sending: "Nachricht wird gesendet…", success: "Deine Nachricht wurde an den Mailserver übergeben.", failure: "Die Nachricht konnte nicht versendet werden. Bitte versuche es später erneut oder nutze einen anderen Kontaktweg.", config: "Das Kontaktformular ist noch nicht vollständig konfiguriert. Bitte kontaktiere den Seitenbetreiber auf anderem Weg." }
};

document.addEventListener("DOMContentLoaded", initializeContactForm);

/** @function initializeContactForm Attach blur validation and real form submission. */
function initializeContactForm() {
    const form = document.querySelector(".contact-form");
    if (!form) return;
    form.querySelectorAll("input:not([name='website']), textarea").forEach(bindContactField);
    form.addEventListener("input", () => updateContactButton(form));
    form.addEventListener("change", () => updateContactButton(form));
    form.addEventListener("submit", submitContactForm);
    updateContactButton(form);
}

/** @function bindContactField Validate a field only after it has been blurred. */
function bindContactField(field) {
    field.addEventListener("blur", () => validateContactField(field));
}

/** @function validateContactField Update one field's error text and accessibility state. */
function validateContactField(field) {
    field.classList.add("touched");
    const error = document.getElementById(`error-${field.name}`);
    const message = getContactError(field);
    field.setAttribute("aria-invalid", String(Boolean(message)));
    if (error) error.textContent = message;
}

/** @function getContactError Return a localized message for the current field validity. */
function getContactError(field) {
    const messages = contactMessages[document.documentElement.lang] || contactMessages.en;
    if (field.validity.valueMissing) return messages.required;
    if (field.name === "email" && field.validity.typeMismatch) return messages.email;
    if (field.name === "name" && field.validity.tooShort) return messages.name;
    if (field.name === "message" && field.validity.tooShort) return messages.message;
    return "";
}

/** @function updateContactButton Enable the submit button only when the full form is valid. */
function updateContactButton(form) {
    const button = form.querySelector("button[type='submit']");
    if (button) button.disabled = !form.checkValidity();
}

/** @function submitContactForm Send validated values to the configured same-origin PHP endpoint. */
async function submitContactForm(event) {
    event.preventDefault();
    const form = event.currentTarget;
    validateAllContactFields(form);
    if (!form.checkValidity()) return;
    await sendContactRequest(form);
}

/** @function validateAllContactFields Show field messages when a valid submission is attempted. */
function validateAllContactFields(form) {
    form.querySelectorAll("input:not([name='website']), textarea").forEach(validateContactField);
}

/** @function sendContactRequest Post form data and show the server's actual result. */
async function sendContactRequest(form) {
    setContactStatus("sending", false);
    const button = form.querySelector("button[type='submit']");
    button.disabled = true;
    try { await handleContactResponse(await fetchContactResponse(form)); }
    catch { setContactStatus("failure", true); }
    finally { updateContactButton(form); }
}

/** @function fetchContactResponse Submit form fields as multipart data with a JSON response expectation. */
async function fetchContactResponse(form) {
    return fetch(form.action, { method: "POST", body: new FormData(form), headers: { "Accept": "application/json" } });
}

/** @function handleContactResponse Interpret server response without assuming that mail was sent. */
async function handleContactResponse(response) {
    const result = await response.json();
    if (response.ok && result.ok) return setContactStatus("success", true);
    setContactStatus(result.code === "CONFIG_MISSING" ? "config" : "failure", true);
}

/** @function setContactStatus Display localized sending, success, or error feedback. */
function setContactStatus(key, isError) {
    const status = document.getElementById("contact-status");
    const messages = contactMessages[document.documentElement.lang] || contactMessages.en;
    if (!status) return;
    status.textContent = messages[key];
    status.classList.toggle("is-error", isError && key !== "success");
    status.classList.toggle("is-success", key === "success");
}
