import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
let formData = {};

feedbackForm.addEventListener("submit", onSubmitBtnClick);
feedbackForm.addEventListener("input", throttle(onInput, 500));
const currentValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
try {
        feedbackForm.elements.message.value = currentValue.message || "";
        feedbackForm.elements.email.value = currentValue.email || "";
    }
    catch (error) {
        console.log(error.name)
}
    
function onInput(evt) {
    if (currentValue) { formData = currentValue; }
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY , JSON.stringify(formData));
}



function onSubmitBtnClick(evt) {
    evt.preventDefault();
    console.log(currentValue)
    localStorage.removeItem(LOCALSTORAGE_KEY );
    feedbackForm.reset()
}