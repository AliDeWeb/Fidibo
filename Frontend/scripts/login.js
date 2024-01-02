import { iranianPhoneNumbersRegex, emailRegex } from "./funcs/regex.js";

const phoneNumberInputSelector = document.querySelector(`#phone-email-input`);
const phoneNumberInputWrapperSelector = document.querySelector(
  `#phone-email-input-wrapper`
);
const phoneNumberInputSubmitBtn = document.querySelector(
  `#phone-email-input-submit-btn`
);

// <!================ Change Input Border Color On Focus Event ================!>
phoneNumberInputSelector.addEventListener(`focus`, () => {
  phoneNumberInputWrapperSelector.classList.remove(`border-[#c5c7c9]`);
  phoneNumberInputWrapperSelector.classList.add(`border-[#28c4cc]`);
});
phoneNumberInputSelector.addEventListener(`blur`, () => {
  phoneNumberInputWrapperSelector.classList.remove(`border-[#28c4cc]`);
  phoneNumberInputWrapperSelector.classList.add(`border-[#c5c7c9]`);
});

let isPhoneNumberMatch = null;
let isEmailMatch = null;
// <!================ Change Submit Btn Status When Regex Matched ================!>
phoneNumberInputSelector.addEventListener(`keyup`, () => {
  isPhoneNumberMatch = phoneNumberInputSelector.value
    .trim()
    .match(iranianPhoneNumbersRegex);

  isEmailMatch = phoneNumberInputSelector.value.trim().match(emailRegex);

  if (isPhoneNumberMatch || isEmailMatch) {
    phoneNumberInputSubmitBtn.removeAttribute(`disabled`);
    phoneNumberInputSubmitBtn.classList.remove(`cursor-not-allowed`);
    phoneNumberInputSubmitBtn.classList.remove(`bg-[#444749]`);
    phoneNumberInputSubmitBtn.classList.add(`bg-[#28c4cc]`);
  } else {
    phoneNumberInputSubmitBtn.setAttribute(`disabled`, ``);
    phoneNumberInputSubmitBtn.classList.add(`cursor-not-allowed`);
    phoneNumberInputSubmitBtn.classList.remove(`bg-[#28c4cc]`);
    phoneNumberInputSubmitBtn.classList.add(`bg-[#444749]`);
  }
});

phoneNumberInputSubmitBtn.addEventListener(`click`, (e) => {
  e.preventDefault();
  if (isPhoneNumberMatch) {
    location.href = `login_validation.html?ph=${phoneNumberInputSelector.value.trim()}`;
  } else if (isEmailMatch) {
    location.href = `login_validation.html?em=${phoneNumberInputSelector.value.trim()}`;
  }
});
