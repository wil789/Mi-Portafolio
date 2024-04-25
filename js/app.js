import { validaInputs, validaTextAreas } from "./validaciones.js";


const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");


inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validaInputs(input.target);
  });
});

textareas.forEach((textarea) => {
  textarea.addEventListener("blur", (textarea) => {
    validaTextAreas(textarea.target);
  });
});





