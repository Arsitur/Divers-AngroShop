const slideShowContainer = document.querySelector(".slide-show-div");
const slideSection = document.querySelector("#slide-show-section");
const blackOverlay = document.querySelector(".slideshow-overlay-black");
const grayOverlay = document.querySelector(".slideshow-overlay-gray");
const slideshowSlidesDiv = document.querySelector(".slideshow-slides");
const slideshowIndicatorsDiv = document.querySelector(".slideshow-indicators");
const slideshowIndicatorAnim = document.querySelector(
  ".slideshow-indicator-anim",
);
const generalIndicator = document.querySelector(".slideshow-indicator");
const allIndicators = document.querySelectorAll(".slideshow-indicator");
const slideshowRadios = document.querySelectorAll(".slideshow-radio");

const slideSectionstyles = window.getComputedStyle(slideSection);
let MAX_TOP = parseInt(slideSectionstyles.getPropertyValue("height"));
let MAX_DISTANCE = slideSection.offsetTop + MAX_TOP;

let TOTAL_PX = MAX_TOP - slideShowContainer.offsetHeight;
let TOP = 0;
let currentScroll = 0;
let pastScroll = 0;

let MAX_WIDTH = 880;
let currentWidth = 582;
let NEEDED_WIDTH = MAX_WIDTH - currentWidth;
let widthPerFrame = NEEDED_WIDTH / TOTAL_PX;

let MAX_HEIGHT = 547;
let currentHeight = 362;
let NEEDED_HEIGHT = MAX_HEIGHT - currentHeight;
let heightPerFrame = NEEDED_HEIGHT / TOTAL_PX;

const MAX_OPACITY = 0;
let currentOpacity = 0.35;
let opacityperFrame = currentOpacity / TOTAL_PX;
let scrollDivider = 3.5;

getMaxMin();
getSlideShowValues();

window.addEventListener("resize", () => {
  getMaxMin();
  getSlideShowValues();
  preInstall_Slideshow();
  change_slideShow();
});

preInstall_Slideshow();
change_slideShow();

window.addEventListener("scroll", () => {
  change_slideShow();
});

add_EventListenerIndicator();
add_slideshowGrab();

function getSlideShowValues() {
  slideShowContainer.style.top = `0px`;
  MAX_TOP = parseInt(slideSectionstyles.getPropertyValue("height"));
  MAX_DISTANCE = slideSection.offsetTop + MAX_TOP;

  TOTAL_PX = MAX_TOP - slideShowContainer.offsetHeight;
  TOP = 0;

  currentScroll = 0;
  pastScroll = 0;

  currentWidth = slideShowContainer.offsetWidth;
  NEEDED_WIDTH = MAX_WIDTH - currentWidth;
  widthPerFrame = NEEDED_WIDTH / TOTAL_PX;

  currentHeight = slideShowContainer.offsetHeight;
  NEEDED_HEIGHT = MAX_HEIGHT - currentHeight;
  heightPerFrame = NEEDED_HEIGHT / TOTAL_PX;

  currentOpacity = 0.35;
  opacityperFrame = currentOpacity / TOTAL_PX;

  if (window.innerWidth > 1000) {
    scrollDivider = 3.5;
  }
  if (window.innerWidth < 1000 && window.innerWidth > 510) {
    scrollDivider = 1.5;
  }
  if (window.innerWidth < 510) {
    scrollDivider = 1;
  }
}

function getMaxMin() {
  if (window.innerWidth > 1000) {
    MAX_WIDTH = 880;
    MAX_HEIGHT = 547;
    currentWidth = 582;
    currentHeight = 362;
  }
  if (window.innerWidth < 1000 && window.innerWidth > 750) {
    MAX_WIDTH = 676;
    MAX_HEIGHT = 420;
    currentWidth = 447;
    currentHeight = 278;
  }
  if (window.innerWidth < 750 && window.innerWidth > 700) {
    MAX_WIDTH = 520;
    MAX_HEIGHT = 323;
    currentWidth = 343;
    currentHeight = 213;
  }
  if (window.innerWidth < 700 && window.innerWidth > 600) {
    MAX_WIDTH = 423;
    MAX_HEIGHT = 269;
    currentWidth = 285;
    currentHeight = 177;
  }
  if (window.innerWidth < 600 && window.innerWidth > 500) {
    MAX_WIDTH = 360;
    MAX_HEIGHT = 224;
    currentWidth = 237;
    currentHeight = 147;
  }
  if (window.innerWidth < 500) {
    MAX_WIDTH = 300;
    MAX_HEIGHT = 186;
    currentWidth = 197;
    currentHeight = 122;
  }
  slideShowContainer.style.width = `${currentWidth}px`;
  slideShowContainer.style.height = `${currentHeight}px`;
}

function change_slideShow() {
  let { scrollTop, scrollHeight } = document.documentElement;
  scrollTop = scrollTop / scrollDivider;

  if (scrollTop < MAX_DISTANCE) {
    pastScroll = currentScroll;
    currentScroll = scrollTop;

    let scrolled = currentScroll - pastScroll;

    TOP += scrolled;
    currentWidth += scrolled * widthPerFrame;
    currentHeight += scrolled * heightPerFrame;
    currentOpacity -= scrolled * opacityperFrame;

    if (TOP >= TOTAL_PX) {
      slideShowContainer.style.top = `${TOTAL_PX}px`;
      currentOpacity = 0;
    }

    if (TOP >= 0 && TOP < TOTAL_PX) {
      slideShowContainer.style.top = `${TOP}px`;
    }
    if (currentWidth <= MAX_WIDTH) {
      slideShowContainer.style.width = `${currentWidth}px`;
      slideshowIndicatorsDiv.style.width = `${currentWidth}px`;
    }
    if (currentHeight <= MAX_HEIGHT) {
      slideShowContainer.style.height = `${currentHeight}px`;
    }
    if (currentOpacity >= MAX_OPACITY && currentOpacity <= 1) {
      blackOverlay.style.opacity = `${currentOpacity}`;
      grayOverlay.style.opacity = `${currentOpacity}`;
    }

    slideshowIndicatorAnim.style.width = `${generalIndicator.offsetWidth}px`;
    indicatorMoveAnim();
  }
}

function preInstall_Slideshow() {
  let { scrollTop } = document.documentElement;

  if (scrollTop >= slideSection.offsetTop - slideSection.offsetHeight) {
    slideShowContainer.style.top = `${TOTAL_PX}px`;
    blackOverlay.style.opacity = 0;
    grayOverlay.style.opacity = 0;
    slideShowContainer.style.width = `${MAX_WIDTH}px`;
    slideShowContainer.style.height = `${MAX_HEIGHT}px`;
    slideshowIndicatorsDiv.style.width = `${MAX_WIDTH}px`;
  }
}

function add_EventListenerIndicator() {
  allIndicators.forEach((indicator) => {
    indicator.addEventListener("click", () => {
      setTimeout(() => {
        indicatorMoveAnim();
      }, 20);
    });
  });
}

function indicatorMoveAnim() {
  let radioIndex = get_indexCheckedRadio();
  slideshowIndicatorAnim.style.left = `${allIndicators[radioIndex].offsetLeft}px`;
}

function get_indexCheckedRadio() {
  let index = 0;
  let actualIndex;

  slideshowRadios.forEach((radio) => {
    if (!radio.checked) {
      index += 1;
    } else {
      actualIndex = index;
    }
  });

  return actualIndex;
}

function get_checkedRadio() {
  let tempRadio;

  slideshowRadios.forEach((radio) => {
    if (radio.checked) {
      tempRadio = radio;
    }
  });

  return tempRadio;
}

function add_slideshowGrab() {
  let slidesStartX = 0;
  let slidesScrollLeft = 0;

  let firstMouse = 0;
  let secondMouse = 0;

  let mouseDowned = false;
  let mouseUpped = false;

  slideshowSlidesDiv.addEventListener("mousedown", (event) => {
    slideshowSlidesDiv.style.cursor = "grab";
    slidesStartX = event.pageX - slideshowSlidesDiv.offsetLeft;
    slidesScrollLeft = slideshowSlidesDiv.scrollLeft;
    mouseDowned = true;
    firstMouse = slidesStartX;
  });

  document.addEventListener("mouseup", () => {
    slideshowSlidesDiv.style.cursor = "initial";
    slidesStartX = event.pageX - slideshowSlidesDiv.offsetLeft;
    secondMouse = slidesStartX;
    mouseUpped = true;

    if (mouseDowned == true && mouseUpped == true) {
      let direction = firstMouse - secondMouse;
      mouseDowned = false;
      mouseUpped = false;
      firstMouse = 0;
      secondMouse = 0;

      try {
        if (direction < 0) {
          let currentRadio = get_checkedRadio();
          currentRadio.previousElementSibling.checked = true;
        }
        if (direction > 0) {
          let currentRadio = get_checkedRadio();
          currentRadio.nextElementSibling.checked = true;
        }
      } catch {}

      indicatorMoveAnim();
    }
  });
}

// STATISTICS
const statisticsSection = document.querySelector("#statistics-section");
const allStatistics = document.querySelectorAll(".statistic");
const allStatisticsNum = document.querySelectorAll(".statistic-num");
const allStatisticsText = document.querySelectorAll(".statistic-text");

let incrementAnimRun = false;

const timeouts = [5000, 2200, 5000, 2200, 5000, 2200, 5000, 2200, 5000];

function timeoutLoop(index) {
  setTimeout(() => {
    if (index >= timeouts.length) {
      allStatisticsText.forEach((statisticText) => {
        statisticText.classList.remove("statisticIntervalDelete0");
        statisticText.classList.remove("statisticInterval1");
        statisticText.classList.remove("statisticIntervalDelete2");
        statisticText.classList.remove("statisticInterval3");
        statisticText.classList.remove("statisticIntervalDelete4");
        statisticText.classList.remove("statisticInterval5");
        statisticText.classList.remove("statisticIntervalDelete6");
        statisticText.classList.remove("statisticInterval7");
        statisticText.classList.remove("statisticIntervalDelete8");
      });
      allStatistics.forEach((statistic) => {
        statistic.classList.remove("current-statistic");
      });
      index = 0;
    }

    if (index == 0) {
      allStatistics[index].classList.add("current-statistic");
      allStatisticsText[index].classList.add(`statisticIntervalDelete${index}`);
    }
    if (index % 2 !== 0) {
      allStatisticsText[Math.round(index / 2)].classList.add(
        `statisticInterval${index}`,
      );
      allStatistics[Math.round(index / 2) - 1].classList.remove(
        "current-statistic",
      );
      allStatistics[Math.round(index / 2)].classList.add("current-statistic");
    }
    if (index % 2 == 0 && index !== 0) {
      allStatisticsText[Math.round(index / 2)].classList.add(
        `statisticIntervalDelete${index}`,
      );
      allStatistics[Math.round(index / 2) - 1].classList.remove(
        "current-statistic",
      );
      allStatistics[Math.round(index / 2)].classList.add("current-statistic");
    }

    index++;

    timeoutLoop(index);
  }, timeouts[index]);
}

const statisticObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (!incrementAnimRun) {
        incrementNum();
        timeoutLoop(0);
      }
    }
  });
});

statisticObserver.observe(statisticsSection);

function incrementNum() {
  let startNum = 25000;
  let maxNumber = 100000;
  incrementAnimRun = true;
  let intervalAdd = setInterval(() => {
    if (startNum >= maxNumber) {
      clearInterval(intervalAdd);
      allStatisticsNum[0].innerHTML = "100,000+";
    } else {
      startNum += 531;
      allStatisticsNum[0].innerHTML = `${startNum}+`;
    }
  }, 10);
}

// STATEMENTS / REVIEWS

const stateAreasSection = document.querySelector("#text-areas-section");
const allStatemets = document.querySelectorAll(".review:not(.static-review)");
const generalReview = document.querySelector(".review:not(.static-review)");
const reviewsDiv = document.querySelector(".reviews");
const generalTextArea = document.querySelector("#review-text-area-general");
const TextAreaStyles = getComputedStyle(generalTextArea);
const TextAreaMarginTop = parseInt(
  TextAreaStyles.getPropertyValue("margin-top"),
);

let pastStatementScroll = 0;
let currentStatementScroll = 0;
let currentStatementTop = 0;

let statementsStart = stateAreasSection.offsetTop + TextAreaMarginTop;

let statement01TopEnd = allStatemets[1].offsetTop + statementsStart;
let statement02TopEnd = allStatemets[2].offsetTop + statementsStart;

// STERGE CAND VEZI :: :: :: :: :: :: :: :: :: :: :: :: :: :: :: :: :: :: :: ::

// ... NAM NICIO IDEE DE CE MERGE PE FIREFOX DA NU PE GOOGLE
// ... offsetHeight-ul la sectiune si la al 3 statement is complet diferite pe google vs firefox si sunt foarte confuz.. ajutor :(
// Deci am decis sa pun doar valorile de la firefox si aparent merge bine.. lol ;(
// Inainte mergea perfect normal, dar cand am separat sectiunile telefon vs PC de atunci nu mere, mai uitat in comitt-uri si
// Nu este nimic ce ar putea strica balanta.. welp daca mere mere..
// Nu incerca so rezolvi.. am stat ~ 5 ore la psihometria asta, zici cai a 12-a dimensiune lol

// let statementsStop = stateAreasSection.offsetHeight - allStatemets[2].offsetHeight + statementsStart - TextAreaMarginTop;
let statementsStop = 1584 - 264 - 180 + statementsStart - TextAreaMarginTop;

let { scrollTop, scrollHeight } = document.documentElement;

if (
  scrollTop >
  stateAreasSection.offsetTop +
    stateAreasSection.offsetHeight -
    TextAreaMarginTop -
    generalReview.offsetHeight
) {
  allStatemets[0].classList.remove("current-review");
  allStatemets[1].classList.remove("current-review");
  allStatemets[2].classList.add("current-review");
  allStatemets[2].style.top = `1050px`;
}

window.addEventListener("resize", () => {
  moveStatement();
});
window.addEventListener("scroll", () => {
  moveStatement();
});

function moveStatement() {
  if (window.innerWidth > 1480) {
    let { scrollTop } = document.documentElement;

    if (scrollTop >= statementsStart) {
      if (scrollTop < statement01TopEnd) {
        let scrolled = get_scrolled();

        currentStatementTop += scrolled;

        allStatemets[0].style.top = `${currentStatementTop}px`;
      }

      if (scrollTop >= statement01TopEnd && scrollTop <= statement02TopEnd) {
        allStatemets[0].classList.remove("current-review");
        allStatemets[1].classList.add("current-review");
      }
      if (scrollTop <= statement01TopEnd) {
        allStatemets[1].classList.remove("current-review");
        allStatemets[0].classList.add("current-review");
      }

      if (scrollTop > statement01TopEnd && scrollTop < statement02TopEnd) {
        let scrolled = get_scrolled();
        currentStatementTop += scrolled;
        allStatemets[1].style.top = `${currentStatementTop}px`;
      }

      if (scrollTop >= statement02TopEnd && scrollTop < statementsStop) {
        allStatemets[1].classList.remove("current-review");
        allStatemets[2].classList.add("current-review");
      }

      if (scrollTop >= statement01TopEnd && scrollTop <= statement02TopEnd) {
        allStatemets[2].classList.remove("current-review");
        allStatemets[1].classList.add("current-review");
      }

      if (scrollTop > statement02TopEnd && scrollTop < statementsStop) {
        let scrolled = get_scrolled();
        currentStatementTop += scrolled;
        allStatemets[2].style.top = `${currentStatementTop}px`;
      }
    } else {
      allStatemets[1].classList.remove("current-review");
      allStatemets[2].classList.remove("current-review");
      allStatemets[0].style.top = `0px`;
      allStatemets[0].classList.add("current-review");
    }
  }
}

function get_scrolled() {
  let { scrollTop } = document.documentElement;

  pastStatementScroll = currentStatementScroll;
  currentStatementScroll = scrollTop;

  let scrolled = currentStatementScroll - pastStatementScroll;

  if (scrolled > 500) {
    scrolled = scrolled - statementsStart;
  }

  return scrolled;
}

// TROPHY ANIM

let trophyTimes = 0;
let scrollTopTrophies = document.documentElement.scrollTop;
const trophies = document.querySelectorAll(".trophy-icon");
const trophySection = document.querySelector("#trophy-section");

if (scrollTopTrophies > trophySection.offsetTop) {
  trophies.forEach((trophy) => {
    trophy.classList.add("trophy-anim");
  });
}

const trophiesObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      trophyTimes += 1;
      if (trophyTimes > 3) {
        entry.target.classList.add("trophy-anim");
      }
    });
  },
  {
    threshold: 0.5,
  },
);

trophies.forEach((trophy) => {
  trophiesObserver.observe(trophy);
});

// STATEMENT SHORT

const ownerRole = document.querySelector("#owner-role");

if (window.innerWidth < 350) {
  ownerRole.innerHTML = "PROPRIETARUL";
}
window.addEventListener("resize", () => {
  if (window.innerWidth < 350) {
    ownerRole.innerHTML = "PROPRIETARUL";
  } else {
    ownerRole.innerHTML = "PROPRIETARUL MAGAZINULUI";
  }
});

// LINK SHORT

const linkText = document.querySelector(".link");

if (window.innerWidth < 400) {
  linkText.innerHTML = "Contacteazăne-ne";
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 400) {
    linkText.innerHTML = "Contacteazăne-ne";
  } else {
    linkText.innerHTML = "Contacteazăne-ne pentru alte detalii";
  }
});

// RANDOM REVIEW

const staticReviews = document.querySelectorAll(".static-review");
let randReview = Math.floor(Math.random() * 2 + 1);

staticReviews[randReview].classList.add("random-review");
