import { getSearchURL } from "./funcs/functions.js";

window.addEventListener(`load`, () => {
  document.querySelector(`.validation-code-input`).focus();

  const backIconSelector = document.querySelector(`#back-icon`);
  backIconSelector.addEventListener(`click`, (e) => {
    e.preventDefault();
    history.back();
  });

  const userPhoneNumberSelector = document.querySelector(`#user-phone-number`);
  userPhoneNumberSelector.innerHTML = getSearchURL(`ph`);

  const verificationInputSubmitBtn = document.querySelector(
    `#verification-input-submit-btn`
  );
  let minutes = 2;
  let seconds = 0;
  verificationInputSubmitBtn.innerHTML = `${
    String(minutes).length > 1 ? minutes : `0${minutes}`
  } : ${String(seconds).length > 1 ? seconds : `0${seconds}`}`;
  let timer = setInterval(() => {
    if (seconds === 0) {
      seconds = 60;
      minutes -= 1;
    }
    seconds -= 1;
    verificationInputSubmitBtn.innerHTML = `${
      String(minutes).length > 1 ? minutes : `0${minutes}`
    } : ${String(seconds).length > 1 ? seconds : `0${seconds}`}`;
    if (minutes === 0 && seconds === 0) {
      verificationInputSubmitBtn.classList.remove(`text-direction-ltr`);
      verificationInputSubmitBtn.classList.remove(`text-white`);
      verificationInputSubmitBtn.classList.remove(`bg-[#444749]`);
      verificationInputSubmitBtn.classList.remove(`cursor-not-allowed`);
      verificationInputSubmitBtn.classList.add(`bg-[#4cd5dc]`);
      verificationInputSubmitBtn.classList.add(`text-gray-900`);
      verificationInputSubmitBtn.removeAttribute(`disabled`);
      verificationInputSubmitBtn.innerHTML = `دریافت کد جدید`;
      clearInterval(timer);
    }
  }, 1000);

  let validationInputsSelector = document.querySelectorAll(
    `.validation-code-input`
  );
  validationInputsSelector.forEach((item, index) => {
    item.addEventListener(`keyup`, (e) => {
      if (e.keyCode === 8) {
        if (index - 1 < 0) {
          return false;
        } else {
          validationInputsSelector[index - 1].focus();
        }
      } else {
        if (index + 1 >= validationInputsSelector.length) {
          return false;
        } else {
          validationInputsSelector[index + 1].focus();
        }
      }
    });

    item.addEventListener(`input`, () => {
      let inputsValues = [];
      let isValuesFull = true;
      validationInputsSelector.forEach((item) => {
        inputsValues.push(item.value.trim());
      });
      inputsValues.forEach((item) => {
        if (item.trim().length === 0) {
          isValuesFull = false;
        }
      });
      console.log(inputsValues);
      console.log(isValuesFull);
      if (isValuesFull) {
        clearInterval(timer);
        verificationInputSubmitBtn.classList.remove(`text-direction-ltr`);
        verificationInputSubmitBtn.classList.remove(`text-white`);
        verificationInputSubmitBtn.classList.remove(`bg-[#444749]`);
        verificationInputSubmitBtn.classList.remove(`cursor-not-allowed`);
        verificationInputSubmitBtn.classList.add(`bg-[#4cd5dc]`);
        verificationInputSubmitBtn.classList.add(`text-gray-900`);
        verificationInputSubmitBtn.removeAttribute(`disabled`);
        verificationInputSubmitBtn.innerHTML = ` تایید `;
      }
    });
  });
});
