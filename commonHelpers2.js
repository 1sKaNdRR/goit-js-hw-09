import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:""};function m(){localStorage.setItem("feedback-form-state",JSON.stringify(e))}function l(){const a=localStorage.getItem("feedback-form-state");if(a){const t=JSON.parse(a);e.email=t.email,e.message=t.message}}function o(){document.querySelector('input[name="email"]').value=e.email,document.querySelector('textarea[name="message"]').value=e.message}function n(){return!e.email||!e.message?(alert("Fill please all fields"),!1):!0}function s(a){const{name:t,value:r}=a.target;e[t]=r,m()}function c(a){a.preventDefault(),n()&&(console.log("Form data:",e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",o())}l();o();document.querySelectorAll(".feedback-form input, .feedback-form textarea").forEach(a=>{a.addEventListener("input",s)});document.querySelector(".feedback-form").addEventListener("submit",c);
//# sourceMappingURL=commonHelpers2.js.map
