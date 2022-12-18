import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');
const submitBtn = document.querySelector('.submit-btn');
const formData = {};

submitBtn.addEventListener("click", onSubmitBtnClick);
feedbackForm.addEventListener("input", throttle(onInput, 500));

try {
        const currentValue = JSON.parse(localStorage.getItem("feedback-form-state"));
        feedbackForm.elements.message.value = currentValue.message || "";
        feedbackForm.elements.email.value = currentValue.email || "";
    }
    catch (error) {
        console.log(error.name)
}

    
function onInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}


function onSubmitBtnClick(evt) {
    evt.preventDefault();
    console.log(formData)
    localStorage.removeItem("feedback-form-state");
    feedbackForm.reset()
}