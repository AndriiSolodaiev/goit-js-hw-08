import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
let formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};

feedbackForm.addEventListener("submit", onSubmitBtnClick);
feedbackForm.addEventListener("input", throttle(onInput, 500));


feedbackForm.elements.message.value = formData.message || "";
feedbackForm.elements.email.value = formData.email || "";
    
    
function onInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY , JSON.stringify(formData));
}



function onSubmitBtnClick(evt) {
    evt.preventDefault();
    console.log(formData);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    feedbackForm.reset();
    formData = {};
}