
const formData = {
  email: "",
  message: ""
};


function saveFormDataToLocalStorage() {
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}


function loadFormDataFromLocalStorage() {
  const savedData = localStorage.getItem("feedback-form-state");
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
  }
}


function updateFormFields() {
  document.querySelector('input[name="email"]').value = formData.email;
  document.querySelector('textarea[name="message"]').value = formData.message;
}


function validateForm() {
  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return false;
  }
  return true;
}


function handleInputChange(event) {
  const { name, value } = event.target;
  formData[name] = value;
  saveFormDataToLocalStorage();
}

function handleSubmit(event) {
  event.preventDefault();
  if (validateForm()) {
    console.log("Form data:", formData);
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    updateFormFields();
  }
}
loadFormDataFromLocalStorage();
updateFormFields();

document.querySelectorAll('.feedback-form input, .feedback-form textarea').forEach(input => {
  input.addEventListener('input', handleInputChange);
});
document.querySelector('.feedback-form').addEventListener('submit', handleSubmit);
