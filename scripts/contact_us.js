let submitButton = document.querySelector(".form-send-button");
let form = document.querySelector(".form");
let FormButtonIconAnimDiv = document.querySelector(
  ".form-button-icon-anim-div",
);
let FormButtonIconErrorAnimDiv = document.querySelector(
  ".form-button-icon-error-anim-div",
);
let formButtonIcon = document.querySelector(".form-button-icon");
let formButtonText = document.querySelector(".form-button-text");

let emailField = document.querySelector("#email-input-text");
let nameField = document.querySelector("#name-input-text");
let messageField = document.querySelector("#message-input-text");

let errorIcon = document.querySelector(".form-button-icon-error");

// INITIAL DELETE TEXT | Firefox

emailField.value = "";
nameField.value = "";
messageField.value = "";

function sendEmail() {
  const params = {
    name: nameField.value.trim(),
    email: emailField.value.trim(),
    message: messageField.value.trim(),
  };

  const serviceId = "service_w5nij3o";
  const templateId = "template_lt3wy3w";

  return emailjs.send(serviceId, templateId, params).then(() => {
    nameField.value = "";
    emailField.value = "";
    messageField.value = "";

    formInputs.forEach((input) => {
      input.previousElementSibling.children[1].style.display = "initial";
    });
    formDescription.previousElementSibling.children[1].style.display =
      "initial";
  });
}
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sa dispara textu din inputuri cand apesi pe un input :)
let formInputs = document.querySelectorAll(".form-input");
let formDescription = document.querySelector(".form-input-description");

formInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.previousElementSibling.children[1].style.display = "none";
    input.previousElementSibling.children[0].classList.add("icon-down");
  });
  input.addEventListener("blur", () => {
    if (input.value.trim() == "") {
      input.previousElementSibling.children[1].style.display = "initial";
      input.previousElementSibling.children[0].classList.remove("icon-down");
    }
  });
});

formDescription.addEventListener("focus", () => {
  formDescription.previousElementSibling.children[1].style.display = "none";
  formDescription.previousElementSibling.children[0].classList.add("icon-down");
});
formDescription.addEventListener("blur", () => {
  if (formDescription.value.trim() == "") {
    formDescription.previousElementSibling.children[1].style.display =
      "initial";
    formDescription.previousElementSibling.children[0].classList.remove(
      "icon-down",
    );
  }
});

// FAQ

const faqs = document.querySelectorAll(".faq");
const faqIcons = document.querySelectorAll(".faq-icon");
const faqAnswers = document.querySelectorAll(".faq-answer");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    remove_currentFAQ();
    faq.children[0].children[1].classList.add("current-faq-icon");

    faq.children[1].classList.add("expand-answer");
  });
});

function remove_currentFAQ() {
  faqAnswers.forEach((answer) => {
    if (answer.classList.contains("expand-answer")) {
      answer.classList.remove("expand-answer");
    }
  });
  faqIcons.forEach((icon) => {
    if (icon.classList.contains("current-faq-icon")) {
      icon.classList.remove("current-faq-icon");
    }
  });
}

// RANDOM CURRENT FAQ

choose_currentFAQ();

function choose_currentFAQ() {
  let totalFAQ = faqs.length;
  let randomNum = Math.floor(Math.random() * totalFAQ);

  faqAnswers[randomNum].classList.add("expand-answer");
  faqIcons[randomNum].classList.add("current-faq-icon");
}

// TEST

let buttonToCircle = anime({
  targets: submitButton,
  width: ["200px", "72px"],
  borderRadius: ["16px", "100px"],
  update: function () {
    submitButton.style.pointerEvents = "none";
  },
  easing: "linear",
  autoplay: false,
  duration: 150,
});

let submitProgress = document.querySelector(".submit-progress");

let buttonProgresses = anime({
  update: function () {
    submitProgress.style.display = "initial";
  },
  targets: submitProgress,
  autoplay: false,
  background: [
    `conic-gradient(var(--fourthGreen) ${0 * 3.2}deg, var(--thirdDark) ${0 * 3.2}deg)`,
    `conic-gradient(var(--fourthGreen) ${115 * 3.2}deg, var(--thirdDark) ${0 * 3.2}deg)`,
  ],
  easing: "linear",
  duration: 2000,
});

let progressHelp = document.querySelector(".progress-helper");

let buttonProgresseHelper = anime({
  opacity: [0, 1],
  targets: progressHelp,
  autoplay: false,
  background: "var(--thirdDark)",
  borderRadius: "100%",
  width: ["0px", "72px"],
  height: ["0px", "72px"],
  easing: "linear",
  duration: 250,
});

let buttonProgresseHelperDissapear = anime({
  targets: progressHelp,
  autoplay: false,
  width: ["72px", "0px"],
  height: ["72px", "0px"],
  easing: "linear",
  duration: 150,
});

let redBackground = document.querySelector(".error-background");

let redBackgroundAnim = anime({
  targets: redBackground,
  autoplay: false,
  width: ["0px", "84px"],
  height: ["0px", "84px"],
  easing: "linear",
  duration: 150,
});

function circle_Button() {
  formButtonIcon.classList.add("content-dissapear");
  formButtonText.classList.add("content-dissapear");
  buttonToCircle.play();
}
function preAnim() {
  circle_Button();
  buttonProgresseHelper.play();
  setTimeout(() => {
    buttonProgresses.play();
  }, 350);

  setTimeout(() => {
    buttonProgresseHelperDissapear.play();
  }, 2350);
}
function succesSubmit() {
  setTimeout(() => {
    FormButtonIconAnimDiv.classList.add("show-icon-anim-div");
  }, 2600);
}

function errorSubmit() {
  setTimeout(() => {
    redBackgroundAnim.play();
  }, 2600);
  setTimeout(() => {
    FormButtonIconErrorAnimDiv.classList.add("show-form-button-icon-error");
  }, 2750);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (form.checkValidity() && isValidEmail(emailField.value)) {
    preAnim();
    setTimeout(() => {
      sendEmail()
        .then(() => succesSubmit())
        .catch(() => errorSubmit());
    }, 2250);
  } else {
    preAnim();
    errorSubmit();
  }
});
