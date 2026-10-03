// RANDOM ICONITE

const balonIcon = document.querySelector("#ballon-random-icon");
const focIcon = document.querySelector("#fire-random-icon");
const flagIcon = document.querySelector("#flag-random-icon");
const casaIcon = document.querySelector("#casa-random-icon");
const mouseIcon = document.querySelector("#mouse-random-icon");
const creionIcon = document.querySelector("#creion-random-icon");
const maicaIcon = document.querySelector("#maica-random-icon");
const sapunIcon = document.querySelector("#sapun-random-icon");
const tenisIcon = document.querySelector("#tenis-random-icon");
const umbrelaIcon = document.querySelector("#umbrela-random-icon");

let randomIcons = [balonIcon, focIcon, flagIcon, casaIcon, mouseIcon, creionIcon, maicaIcon, sapunIcon, tenisIcon, umbrelaIcon];

let randomIconsResize = 0;
let oldWindow = 0;
let nowWindow;

// Pozitii | left | top | display |

let position01 = [6.5, 105, 'initial'];
let position02 = [15.75, -50, 'initial'];
let position03 = [19.9, 164, 'initial'];
let position04 = [32.35, 64, 'initial'];
let position05 = [42.44, 173, 'initial'];
let position06 = [53.77, 179, 'initial'];
let position07 = [64.45, 62, 'initial'];
let position08 = [74.28, 176, 'initial'];
let position09 = [81.5, -45, 'initial'];
let position10 = [87.69, 100, 'initial'];

let coordinates = [position01, position02, position03, position04, position05, position06, position07, position08, position09, position10];

let numOfIcons = randomIcons.length;

let assignPositionTimeout;

assignPosition();

//1536

window.addEventListener('resize', () =>
  {
    resize_assignPosition();
  });


function resize_assignPosition()
{
  clearTimeout(assignPositionTimeout);

  assignPositionTimeout = setTimeout(assignPosition, 200); 
}

function randomIcons_responsive()
{
  if(window.innerWidth <= 1320)
  {
    position01[2] = 'none';
    position02[2] = 'none';
    position09[2] = 'none';
    position10[2] = 'none';

    // coordinates = [position01, position02, position03, position04, position05, position06, position07, position08, position09, position10];
  }
  else
  {
    position01[2] = 'initial';
    position02[2] = 'initial';
    position09[2] = 'initial';
    position10[2] = 'initial';
  }
}

function assignPosition()
{

  randomIcons_responsive();

  let randIconNumArray = [];
  let randCoordNumArray = []

  for(let i = 0; i < numOfIcons; i++)
  {

    let numOfIcons = randomIcons.length;
    let numOfPositions = coordinates.length;
    
    let numIconFound = false;
    let numPositionFound = false;
    

    let randomIconNum = Math.floor(Math.random() * numOfIcons);
  
    while(!numIconFound)
    {
      let result = randIconNumArray.every(icon => icon !== randomIconNum);

      if(result)
      {
        randIconNumArray.push(randomIconNum);
        numIconFound = true;
      }
      else
      {
        randomIconNum = Math.floor(Math.random() * numOfIcons);
      }
    }

    let randomPositionNum = Math.floor(Math.random() * numOfPositions);

    while(!numPositionFound)
    {
      let result = randCoordNumArray.every(coord => coord !== randomPositionNum);

      if(result)
      {
        randCoordNumArray.push(randomPositionNum);
        numPositionFound = true;
      }
      else
      {
        randomPositionNum = Math.floor(Math.random() * numOfPositions);
      }
    }

    randomIcons[randomIconNum].style.left = `${coordinates[randomPositionNum][0]}vw`;
    
    randomIcons[randomIconNum].style.top = `${coordinates[randomPositionNum][1]}px`;
    randomIcons[randomIconNum].style.display = coordinates[randomPositionNum][2];
 
  }

}

// SCROLL LA CATEGORII

const allCategoryDivs = document.querySelector('.category-scrollable-space');
const allCategorys = document.querySelectorAll('.category-link');
const allCategoryAchors = document.querySelectorAll('.category-anchor');
let categoryIsDragging = false;
let anchorTimeout;
let categoryCickTimeout;
let categoryStartX = 0;
let categoryScrollLeft = 0;

function add_clickTimeout(category)
{
  clearTimeout(categoryCickTimeout);
  categoryCickTimeout = setTimeout(() => 
    {
      category.style.cursor = 'grab'
    }, 5000);
}

allCategoryDivs.addEventListener('mousedown', (event) => {
  allCategorys.forEach((category) =>
  {
    add_clickTimeout(category);
  })
  categoryIsDragging = true;
  categoryStartX = event.pageX - allCategoryDivs.offsetLeft;
  categoryScrollLeft = allCategoryDivs.scrollLeft;
});

allCategoryDivs.addEventListener('mousemove', (event) => {
  if (!categoryIsDragging) return;
  event.preventDefault();
  const x = event.pageX - allCategoryDivs.offsetLeft;
  const walk = (x - categoryStartX) * 2;
  allCategoryDivs.scrollLeft = categoryScrollLeft - walk;
});

document.addEventListener('mouseup', () => {
  allCategorys.forEach((category) =>
  {
    category.style.cursor = 'pointer';
  })
  categoryIsDragging = false;
});

allCategoryDivs.addEventListener('mouseleave', () => {
  categoryIsDragging = false;
});

allCategoryDivs.addEventListener('scroll', (event) => {
  
  clearTimeout(anchorTimeout);

  allCategoryAchors.forEach((achor) =>
  {
    achor.style.pointerEvents = 'none';
  })

  anchorTimeout = setTimeout(() =>
  {
    allCategoryAchors.forEach((achor) =>
    {
      achor.style.pointerEvents = 'initial';
      achor.style.cursor = 'pointer';
    })
  }, 150)

  if (categoryIsDragging) {
    event.preventDefault();
    event.stopPropagation();
  }
}, { passive: false });

//RANDOM EXEMPLE
let categoryLinks = Array.from(document.querySelector('.category-links').children);

let generalCategoryLink = document.querySelector('.category-link');
let generalCategoryFlex = document.querySelector('.category-text-flex');
let generalExamplesDiv = document.querySelector('#aniversare-examples');

let categoryExamplesAniversare = Array.from(document.querySelector('#aniversare-examples').children);
let categoryExamplesJucarii = Array.from(document.querySelector('#jucarii-examples').children);
let categoryExamplesRechizite = Array.from(document.querySelector('#rechizite-examples').children);
let categoryExamplesSuvenire = Array.from(document.querySelector('#suvenire-examples').children);
let categoryExamplesAccesorii = Array.from(document.querySelector('#accesorii-examples').children);
let categoryExamplesImbracaminte = Array.from(document.querySelector('#imbracaminte-examples').children);
let categoryExamplesBucatarie = Array.from(document.querySelector('#bucatarie-examples').children);
let categoryExamplesElectronice = Array.from(document.querySelector('#electronice-examples').children);
let categoryExamplesGospodarie = Array.from(document.querySelector('#gospodarie-examples').children);
let categoryExamplesIgiena = Array.from(document.querySelector('#igiena-examples').children);


let allExamples = [categoryExamplesAniversare, categoryExamplesJucarii, categoryExamplesRechizite, 
  categoryExamplesSuvenire, categoryExamplesAccesorii, categoryExamplesImbracaminte, categoryExamplesBucatarie, 
  categoryExamplesElectronice, categoryExamplesGospodarie, categoryExamplesIgiena];


for(let i = 0; i < allExamples.length; i++)
{
  shuffle_examples(i);
}

if(window.innerWidth > 1150)
{

  unShowAllExamples();
  assign_showExample();

}
else
{
  unShowAllExamples();
}


window.addEventListener('resize', () =>
{
  if(window.innerWidth > 1150)
  {

    unShowAllExamples();
    assign_showExample();

  }
  else
  {
    unShowAllExamples();
  }
 
  
})

function get_exampleDivWidth()
{
  let left = generalCategoryFlex.offsetLeft;
  let examplesWidth = generalCategoryLink.offsetWidth;

  let containerStyle = window.getComputedStyle(generalExamplesDiv);
  let rightPadding = parseFloat(containerStyle.paddingRight);
  let exampleDivWidth = examplesWidth - rightPadding - left;

  return exampleDivWidth;

}
function get_examplesGap()
{
  let computedStyle = window.getComputedStyle(generalExamplesDiv);
  let generalGap = computedStyle.getPropertyValue('gap');
  generalGap = parseInt(generalGap);

  return generalGap;
}

function assign_showExample()
{

  let generalGap = get_examplesGap();

  for(let i = 0; i < allExamples.length; i++)
  {
    let totalWidth = 0;
    let examplesWidth = get_exampleDivWidth();
    examplesWidth = examplesWidth -60;
    for(let j = 0; j < allExamples[i].length; j++)
    {
      if(totalWidth < examplesWidth)
      {
        let example = allExamples[i][j];
        example.classList.add('show-category-example');
        let exampleWidth = example.offsetWidth;
        let exampleSpace = exampleWidth + generalGap;
        totalWidth = totalWidth + exampleSpace;
      }
      if(totalWidth > examplesWidth)
      {
        allExamples[i][j].classList.remove('show-category-example');
      }
    }
    
  }

}

function unShowAllExamples()
{
  for(let i = 0; i < allExamples.length; i++)
  {
    for(let j = 0; j < allExamples[i].length; j++)
    {
      if(allExamples[i][j].classList.contains("show-category-example"))
      {
        allExamples[i][j].classList.remove("show-category-example");
      }
      
    }
  }
}

function shuffle_examples(arrayIndex)
{
  let temp;
 
   for (let i = 0; i < allExamples.length-2; i++) 
   {
    let randomItemIndex = Math.floor(Math.random() * (i));
    let temp = allExamples[arrayIndex][i];
    allExamples[arrayIndex][i] = allExamples[arrayIndex][randomItemIndex];
    allExamples[arrayIndex][randomItemIndex] = temp;
    }
}


// CARUSELE :(
class Carousel
{
  constructor(allSlidersDiv, generalSlide, carouselIndicatorsDiv, carouselIndicators, indicatorAnimator,
   leftArrow, rightArrow, carouselFlex, allActualSliders)
  {

    this.allSlidersDiv = allSlidersDiv;
    this.generalSlide = generalSlide;
    this.carouselIndicatorsDiv = carouselIndicatorsDiv;
    this.carouselIndicators = carouselIndicators;
    this.indicatorAnimator = indicatorAnimator;
    this.leftArrow = leftArrow;
    this.rightArrow = rightArrow;
    this.carouselFlex = carouselFlex;
    this.allActualSliders = allActualSliders;

    this.fixedValues = [];
    this.grabTimeout;
    this.scrolled;
    this.currentIndicator = 0;
    this.switchToPhone = 1200;
    this.totalShownSlides = 3;
    this.totalActiveIndicators = 0;

  }

  // MULTIPLE
  responsive_fix()
  {
    window.addEventListener('resize', () =>
    {
      this.currentIndicator = 0;
      this.get_shownSlides();
      this.set_carousel_dimensions();
      this.set_Indicators();
      this.apply_inactive_Arrow();
      this.get_fixedValues();
      this.set_indicatorAnim();
    });
  }

  get_shownSlides()
  {
    let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if(windowWidth > this.switchToPhone)
    {
      this.totalShownSlides = 3;
    }
    if(windowWidth <= this.switchToPhone)
    {
      this.totalShownSlides = 2;
    }

  }
  set_carousel_dimensions()
  {
    let sliderDimension = this.get_slideDimension();
    let generalGap = this.get_slidesGap();

    let allShowedSpace = sliderDimension * this.totalShownSlides - generalGap;

    this.carouselFlex.style.gridTemplateColumns = `1fr ${allShowedSpace}px 1fr`;
    this.carouselIndicatorsDiv.style.width = `${allShowedSpace}px`;

    this.allSlidersDiv.scrollLeft = 0;
  }

  set_Indicators()
  {
    this.indicatorAnimator.style.left = `0px`;
    this.remove_activeIndicator()
    this.remove_currentIndicator();
    this.remove_lastIndicator()
    let numofIndicatorsNeeded = this.get_numOfIndicator_needed();

    for(let i = 0; i < numofIndicatorsNeeded; i++)
    {
      this.carouselIndicators[i].classList.add('show-indicator');
    }
    this.calc_all_active_Indicators();
    this.carouselIndicators[0].classList.add('first-indicator');
    this.carouselIndicators[0].classList.add('current-indicator');
    this.carouselIndicators[this.totalActiveIndicators-1].classList.add('last-indicator');
  }

  apply_inactive_Arrow()
  {
    this.calc_all_active_Indicators();

    if(this.currentIndicator <= 0)
    {
      this.leftArrow.classList.add('carousel-arrow-inactive');
    }
    else
    {
      this.leftArrow.classList.remove('carousel-arrow-inactive');
    }
    if(this.currentIndicator >= this.totalActiveIndicators-1)
    {
      this.rightArrow.classList.add('carousel-arrow-inactive');
    }
    else
    {
      this.rightArrow.classList.remove('carousel-arrow-inactive');
    }

  }

  get_fixedValues()
  {
    this.fixedValues = [0];
    let generalGap = this.get_slidesGap();
    this.calc_all_active_Indicators();
    let shownWidth = this.calc_shownSliders_width();
    
    let totalSlidesValues = 0;

    for(let i = 0; i < this.totalActiveIndicators-1; i++)
    {
      totalSlidesValues += shownWidth + generalGap;
      this.fixedValues.push(totalSlidesValues);
    }
    
  }

  set_indicatorAnim()
  {
    let generalIndicatorWidth = this.carouselIndicators[0].offsetWidth;
    this.indicatorAnimator.style.width = `${generalIndicatorWidth}px`;
    let currentLeft = this.carouselIndicators[this.currentIndicator].offsetLeft;
    this.indicatorAnimator.style.left = `${currentLeft}px`;
  }

  //INITIAL
  add_grab()
  {
    let slidesStartX = 0;
    let slidesScrollLeft = 0;

    let firstMouse = 0;
    let secondMouse = 0;

    let mouseDowned = false;
    let mouseUpped = false;

    this.allSlidersDiv.addEventListener('mousedown', (event) => 
    {
      this.allSlidersDiv.style.cursor = 'grab';
      slidesStartX = event.pageX - this.allSlidersDiv.offsetLeft;
      slidesScrollLeft = this.allSlidersDiv.scrollLeft;
      mouseDowned = true;
      firstMouse = slidesStartX;
    });

    document.addEventListener('mouseup', () => 
    {
      this.allSlidersDiv.style.cursor = 'initial';
      slidesStartX = event.pageX - this.allSlidersDiv.offsetLeft;
      secondMouse = slidesStartX;
      mouseUpped = true;

      if(mouseDowned == true && mouseUpped == true)
      {
        let direction = firstMouse - secondMouse;
        mouseDowned = false;
        mouseUpped = false;
        firstMouse = 0;
        secondMouse = 0;

        this.calc_all_active_Indicators()

        if(direction < 0)
        {
          if(this.currentIndicator >= 0)
          {
            this.currentIndicator -= 1;
          }
          
          this.scroll();
          this.update_Indicator();
          this.set_indicatorAnim();
        }
        if(direction > 0)
        {

          if(this.currentIndicator < this.totalActiveIndicators-1)
          {
            this.currentIndicator += 1;
          }

          this.scroll();
          this.update_Indicator();
          this.set_indicatorAnim();
        }
      }
      

    });
  }
  add_eventListener_Arrows()
  {
    this.rightArrow.addEventListener('click', (e) =>
    {
      this.currentIndicator += 1;
      this.scroll();
      this.update_Indicator();
      this.set_indicatorAnim();
    })

    this.leftArrow.addEventListener('click', (e) =>
    {
      this.currentIndicator -= 1;
      this.scroll();
      this.update_Indicator();
      this.set_indicatorAnim();
      
    })
  }

  add_eventListener_Indicators()
  {
      this.carouselIndicators.forEach(indicator =>
      {
        indicator.addEventListener('click', (e) =>
        {

          this.remove_currentIndicator();
          indicator.classList.add('current-indicator');
          let clickedCurrentIndicatorIndex = this.get_currentIndicator();
          this.currentIndicator = clickedCurrentIndicatorIndex;

          this.scroll();
          this.set_indicatorAnim();
        })
      })
  }
  add_grabMobile()
  {
    this.allSlidersDiv.addEventListener('scroll', () =>
    {

      clearTimeout(this.grabTimeout);

      this.grabTimeout = setTimeout(() =>
      {
        this.scrolled = this.allSlidersDiv.scrollLeft;
        this.update_Indicator_Dynamic(this.scrolled);
      }, 250)
      
    })
  }

  update_Indicator_Dynamic(scrolled)
  {
    if(window.innerWidth < 900)
    {
      let end;
      let slideWidth = this.get_slideDimension();
      let generalGap = this.get_slidesGap();
      this.remove_currentIndicator();
      let areas = this.fixedValues.length;
      let totalSlidesWidth = slideWidth * this.allActualSliders.length - generalGap;
      
      

      if(areas == 3)
      {
        end = totalSlidesWidth - this.fixedValues[1];
        if(this.scrolled >= this.fixedValues[0] && this.scrolled < this.fixedValues[1] - generalGap)
        {
          this.carouselIndicators[0].classList.add('current-indicator');
          this.currentIndicator = 0;
        }
        if(this.scrolled >= this.fixedValues[1] - generalGap && this.scrolled < end)
        {
          this.carouselIndicators[1].classList.add('current-indicator');
          this.currentIndicator = 1;
        }
        if(this.scrolled >= end)
        {
          this.carouselIndicators[2].classList.add('current-indicator');
          this.currentIndicator = 2;
        }
      }
      if(areas == 4)
      {

        if(this.scrolled >= this.fixedValues[0] && this.scrolled < this.fixedValues[1] - generalGap)
        {
          this.carouselIndicators[0].classList.add('current-indicator');
          this.currentIndicator = 0;
        }
        if(this.scrolled >= this.fixedValues[1] - generalGap && this.scrolled < this.fixedValues[2] - generalGap)
        {
          this.carouselIndicators[1].classList.add('current-indicator');
          this.currentIndicator = 1;
        }
        if(this.scrolled >= this.fixedValues[2] - generalGap && this.scrolled < this.fixedValues[3] - generalGap)
        {
          this.carouselIndicators[2].classList.add('current-indicator');
          this.currentIndicator = 2;
        }
        if(this.scrolled >= this.fixedValues[3] - generalGap)
        {
          this.carouselIndicators[3].classList.add('current-indicator');
          this.currentIndicator = 3;
        }
      }
      this.apply_inactive_Arrow();
      this.set_indicatorAnim();
    }
    
  }

  update_Indicator()
  {
    this.remove_currentIndicator();
    this.carouselIndicators[this.currentIndicator].classList.add('current-indicator')
  }
  get_currentIndicator()
  {

    let currentIndicatorIndex = 0;
    let temp = 0;

    for(let i = 0; i < this.carouselIndicators.length; i++)
    {
      if(!this.carouselIndicators[i].classList.contains('current-indicator'))
      {
        temp += 1;
      }
      else
      {
        currentIndicatorIndex = temp;
      }
    }

    return currentIndicatorIndex;
  }
  remove_currentIndicator()
  {
    for(let i = 0; i < this.carouselIndicators.length; i++)
    {
      if(this.carouselIndicators[i].classList.contains('current-indicator'))
      {
        this.carouselIndicators[i].classList.remove('current-indicator');
      }
    }
  }
  remove_activeIndicator()
  {
    for(let i = 0; i < this.carouselIndicators.length; i++)
    {
      if(this.carouselIndicators[i].classList.contains('show-indicator'))
      {
        this.carouselIndicators[i].classList.remove('show-indicator');
      }
    }
    
  }
  remove_lastIndicator()
  {
    for(let i = 0; i < this.carouselIndicators.length; i++)
    {
      if(this.carouselIndicators[i].classList.contains('last-indicator'))
      {
        this.carouselIndicators[i].classList.remove('last-indicator');
      }
    }
  }
  get_slideDimension()
  {
    let generalSlideWidth = this.generalSlide.offsetWidth;
    let generalGap = this.get_slidesGap();

    let slideWidth = generalSlideWidth + generalGap;

    return slideWidth;
  }
  get_numOfIndicator_needed()
  {
    let numofSlides = this.allActualSliders.length;
    let numofIndicatorsNeeded = Math.ceil(numofSlides / this.totalShownSlides);

    return numofIndicatorsNeeded;
  }
  scroll()
  {
    this.allSlidersDiv.scrollLeft = this.fixedValues[this.currentIndicator];
    this.apply_inactive_Arrow();
  }
  calc_all_active_Indicators()
  {
    this.totalActiveIndicators = 0;
    for(let i = 0; i < this.carouselIndicators.length; i++)
    {
      if(this.carouselIndicators[i].classList.contains('show-indicator'))
      {
        this.totalActiveIndicators += 1;
      }
    }
  }
  calc_shownSliders_width()
  {
    let slideGap = this.get_slidesGap();
    let slideWidth = this.get_slideDimension();
    let allShowedSpace = this.totalShownSlides * slideWidth - slideGap;

    return allShowedSpace;
  }
  get_slidesGap()
  {
    let firstSlide = this.allActualSliders[0];
    let secondSlide = this.allActualSliders[1];
    let generalGap = secondSlide.offsetLeft - (firstSlide.offsetLeft + firstSlide.offsetWidth);

    return generalGap;
  }

  
}

// Universal
const generalSlide = document.querySelector('.carousel-slide');

// CAROUSEL01

const allSlidersDiv01 = document.querySelector('#carousel-sliders01');
const carouselIndicatorsDiv01 = document.querySelector('#carousel-indicators01');

const carouselIndicators01 = Array.from(carouselIndicatorsDiv01.children);
carouselIndicators01.filter(child => child.classList.contains('carousel-indicator'));
const indicatorAnimator01 = document.querySelector('#carousel-indicator-anim01');

const leftArrow01 = document.querySelector("#left-arrow01");
const rightArrow01 = document.querySelector("#right-arrow01");
const carouselFlex01 = document.querySelector("#carousel-flex01");

const allActualSliders01 = allSlidersDiv01.children;

const carousel01 = new Carousel(allSlidersDiv01, generalSlide, carouselIndicatorsDiv01, carouselIndicators01, indicatorAnimator01,
  leftArrow01, rightArrow01, carouselFlex01, allActualSliders01);


carousel01.get_shownSlides();
carousel01.set_carousel_dimensions();
carousel01.set_Indicators();
carousel01.apply_inactive_Arrow(); 
carousel01.get_fixedValues();


carousel01.add_eventListener_Arrows();
carousel01.add_eventListener_Indicators();

carousel01.add_grab();
carousel01.add_grabMobile()

carousel01.responsive_fix();

carousel01.set_indicatorAnim();


// CAROUSEL02

const allSlidersDiv02 = document.querySelector('#carousel-sliders02');
const carouselIndicatorsDiv02 = document.querySelector('#carousel-indicators02');

const carouselIndicators02 = Array.from(carouselIndicatorsDiv02.children);
carouselIndicators02.filter(child => child.classList.contains('carousel-indicator'));
const indicatorAnimator02 = document.querySelector('#carousel-indicator-anim02');

const leftArrow02 = document.querySelector("#left-arrow02");
const rightArrow02 = document.querySelector("#right-arrow02");
const carouselFlex02 = document.querySelector("#carousel-flex02");

const allActualSliders02 = allSlidersDiv02.children;

const carousel02 = new Carousel(allSlidersDiv02, generalSlide, carouselIndicatorsDiv02, carouselIndicators02, indicatorAnimator02,
  leftArrow02, rightArrow02, carouselFlex02, allActualSliders02);


carousel02.get_shownSlides();
carousel02.set_carousel_dimensions();
carousel02.set_Indicators();
carousel02.apply_inactive_Arrow(); 
carousel02.get_fixedValues();


carousel02.add_eventListener_Arrows();
carousel02.add_eventListener_Indicators();

carousel02.add_grab();
carousel02.add_grabMobile()

carousel02.responsive_fix();

carousel02.set_indicatorAnim();



// CAROUSEL03

const allSlidersDiv03 = document.querySelector('#carousel-sliders03');
const carouselIndicatorsDiv03 = document.querySelector('#carousel-indicators03');

const carouselIndicators03 = Array.from(carouselIndicatorsDiv03.children);
carouselIndicators03.filter(child => child.classList.contains('carousel-indicator'));
const indicatorAnimator03 = document.querySelector('#carousel-indicator-anim03');

const leftArrow03 = document.querySelector("#left-arrow03");
const rightArrow03 = document.querySelector("#right-arrow03");
const carouselFlex03 = document.querySelector("#carousel-flex03");

const allActualSliders03 = allSlidersDiv03.children;

const carousel03 = new Carousel(allSlidersDiv03, generalSlide, carouselIndicatorsDiv03, carouselIndicators03, indicatorAnimator03,
  leftArrow03, rightArrow03, carouselFlex03, allActualSliders03);


carousel03.get_shownSlides();
carousel03.set_carousel_dimensions();
carousel03.set_Indicators();
carousel03.apply_inactive_Arrow(); 
carousel03.get_fixedValues();


carousel03.add_eventListener_Arrows();
carousel03.add_eventListener_Indicators();

carousel03.add_grab();
carousel03.add_grabMobile()

carousel03.responsive_fix();

carousel03.set_indicatorAnim();

// CAROUSEL04

const allSlidersDiv04 = document.querySelector('#carousel-sliders04');
const carouselIndicatorsDiv04 = document.querySelector('#carousel-indicators04');

const carouselIndicators04 = Array.from(carouselIndicatorsDiv04.children);
carouselIndicators04.filter(child => child.classList.contains('carousel-indicator'));
const indicatorAnimator04 = document.querySelector('#carousel-indicator-anim04');

const leftArrow04 = document.querySelector("#left-arrow04");
const rightArrow04 = document.querySelector("#right-arrow04");
const carouselFlex04 = document.querySelector("#carousel-flex04");

const allActualSliders04 = allSlidersDiv04.children;

const carousel04 = new Carousel(allSlidersDiv04, generalSlide, carouselIndicatorsDiv04, carouselIndicators04, indicatorAnimator04,
  leftArrow04, rightArrow04, carouselFlex04, allActualSliders04);


carousel04.get_shownSlides();
carousel04.set_carousel_dimensions();
carousel04.set_Indicators();
carousel04.apply_inactive_Arrow(); 
carousel04.get_fixedValues();


carousel04.add_eventListener_Arrows();
carousel04.add_eventListener_Indicators();

carousel04.add_grab();
carousel04.add_grabMobile()

carousel04.responsive_fix();

carousel04.set_indicatorAnim();


// CAROUSEL05

const allSlidersDiv05 = document.querySelector('#carousel-sliders05');
const carouselIndicatorsDiv05 = document.querySelector('#carousel-indicators05');

const carouselIndicators05 = Array.from(carouselIndicatorsDiv05.children);
carouselIndicators05.filter(child => child.classList.contains('carousel-indicator'));
const indicatorAnimator05 = document.querySelector('#carousel-indicator-anim05');

const leftArrow05 = document.querySelector("#left-arrow05");
const rightArrow05 = document.querySelector("#right-arrow05");
const carouselFlex05 = document.querySelector("#carousel-flex05");

const allActualSliders05 = allSlidersDiv05.children;

const carousel05 = new Carousel(allSlidersDiv05, generalSlide, carouselIndicatorsDiv05, carouselIndicators05, indicatorAnimator05,
  leftArrow05, rightArrow05, carouselFlex05, allActualSliders05);


carousel05.get_shownSlides();
carousel05.set_carousel_dimensions();
carousel05.set_Indicators();
carousel05.apply_inactive_Arrow(); 
carousel05.get_fixedValues();


carousel05.add_eventListener_Arrows();
carousel05.add_eventListener_Indicators();

carousel05.add_grab();
carousel05.add_grabMobile()

carousel05.responsive_fix();

carousel05.set_indicatorAnim();


// CAROUSEL06

const allSlidersDiv06 = document.querySelector('#carousel-sliders06');
const carouselIndicatorsDiv06 = document.querySelector('#carousel-indicators06');

const carouselIndicators06 = Array.from(carouselIndicatorsDiv06.children);
carouselIndicators06.filter(child => child.classList.contains('carousel-indicator'));
const indicatorAnimator06 = document.querySelector('#carousel-indicator-anim06');

const leftArrow06 = document.querySelector("#left-arrow06");
const rightArrow06 = document.querySelector("#right-arrow06");
const carouselFlex06 = document.querySelector("#carousel-flex06");

const allActualSliders06 = allSlidersDiv06.children;

const carousel06 = new Carousel(allSlidersDiv06, generalSlide, carouselIndicatorsDiv06, carouselIndicators06, indicatorAnimator06,
  leftArrow06, rightArrow06, carouselFlex06, allActualSliders06);


carousel06.get_shownSlides();
carousel06.set_carousel_dimensions();
carousel06.set_Indicators();
carousel06.apply_inactive_Arrow(); 
carousel06.get_fixedValues();


carousel06.add_eventListener_Arrows();
carousel06.add_eventListener_Indicators();

carousel06.add_grab();
carousel06.add_grabMobile()

carousel06.responsive_fix();

carousel06.set_indicatorAnim();


// CAROUSEL07

const allSlidersDiv07 = document.querySelector('#carousel-sliders07');
const carouselIndicatorsDiv07 = document.querySelector('#carousel-indicators07');

const carouselIndicators07 = Array.from(carouselIndicatorsDiv07.children);
carouselIndicators07.filter(child => child.classList.contains('carousel-indicator'));
const indicatorAnimator07 = document.querySelector('#carousel-indicator-anim07');

const leftArrow07 = document.querySelector("#left-arrow07");
const rightArrow07 = document.querySelector("#right-arrow07");
const carouselFlex07 = document.querySelector("#carousel-flex07");

const allActualSliders07 = allSlidersDiv07.children;

const carousel07 = new Carousel(allSlidersDiv07, generalSlide, carouselIndicatorsDiv07, carouselIndicators07, indicatorAnimator07,
  leftArrow07, rightArrow07, carouselFlex07, allActualSliders07);


carousel07.get_shownSlides();
carousel07.set_carousel_dimensions();
carousel07.set_Indicators();
carousel07.apply_inactive_Arrow(); 
carousel07.get_fixedValues();


carousel07.add_eventListener_Arrows();
carousel07.add_eventListener_Indicators();

carousel07.add_grab();
carousel07.add_grabMobile()

carousel07.responsive_fix();

carousel07.set_indicatorAnim();



// CAROUSEL08

const allSlidersDiv08 = document.querySelector('#carousel-sliders08');
const carouselIndicatorsDiv08 = document.querySelector('#carousel-indicators08');

const carouselIndicators08 = Array.from(carouselIndicatorsDiv08.children);
carouselIndicators08.filter(child => child.classList.contains('carousel-indicator'));
const indicatorAnimator08 = document.querySelector('#carousel-indicator-anim08');

const leftArrow08 = document.querySelector("#left-arrow08");
const rightArrow08 = document.querySelector("#right-arrow08");
const carouselFlex08 = document.querySelector("#carousel-flex08");

const allActualSliders08 = allSlidersDiv08.children;

const carousel08 = new Carousel(allSlidersDiv08, generalSlide, carouselIndicatorsDiv08, carouselIndicators08, indicatorAnimator08,
  leftArrow08, rightArrow08, carouselFlex08, allActualSliders08);


carousel08.get_shownSlides();
carousel08.set_carousel_dimensions();
carousel08.set_Indicators();
carousel08.apply_inactive_Arrow(); 
carousel08.get_fixedValues();


carousel08.add_eventListener_Arrows();
carousel08.add_eventListener_Indicators();

carousel08.add_grab();
carousel08.add_grabMobile()

carousel08.responsive_fix();

carousel08.set_indicatorAnim();


// CAROUSEL09

const allSlidersDiv09 = document.querySelector('#carousel-sliders09');
const carouselIndicatorsDiv09 = document.querySelector('#carousel-indicators09');

const carouselIndicators09 = Array.from(carouselIndicatorsDiv09.children);
carouselIndicators09.filter(child => child.classList.contains('carousel-indicator'));
const indicatorAnimator09 = document.querySelector('#carousel-indicator-anim09');

const leftArrow09 = document.querySelector("#left-arrow09");
const rightArrow09 = document.querySelector("#right-arrow09");
const carouselFlex09 = document.querySelector("#carousel-flex09");

const allActualSliders09 = allSlidersDiv09.children;

const carousel09 = new Carousel(allSlidersDiv09, generalSlide, carouselIndicatorsDiv09, carouselIndicators09, indicatorAnimator09,
  leftArrow09, rightArrow09, carouselFlex09, allActualSliders09);


carousel09.get_shownSlides();
carousel09.set_carousel_dimensions();
carousel09.set_Indicators();
carousel09.apply_inactive_Arrow(); 
carousel09.get_fixedValues();


carousel09.add_eventListener_Arrows();
carousel09.add_eventListener_Indicators();

carousel09.add_grab();
carousel09.add_grabMobile()

carousel09.responsive_fix();

carousel09.set_indicatorAnim();



// CAROUSEL10

const allSlidersDiv10 = document.querySelector('#carousel-sliders10');
const carouselIndicatorsDiv10 = document.querySelector('#carousel-indicators10');

const carouselIndicators10 = Array.from(carouselIndicatorsDiv10.children);
carouselIndicators10.filter(child => child.classList.contains('carousel-indicator'));
const indicatorAnimator10 = document.querySelector('#carousel-indicator-anim10');

const leftArrow10 = document.querySelector("#left-arrow10");
const rightArrow10 = document.querySelector("#right-arrow10");
const carouselFlex10 = document.querySelector("#carousel-flex10");

const allActualSliders10 = allSlidersDiv10.children;

const carousel10 = new Carousel(allSlidersDiv10, generalSlide, carouselIndicatorsDiv10, carouselIndicators10, indicatorAnimator10,
  leftArrow10, rightArrow10, carouselFlex10, allActualSliders10);


carousel10.get_shownSlides();
carousel10.set_carousel_dimensions();
carousel10.set_Indicators();
carousel10.apply_inactive_Arrow(); 
carousel10.get_fixedValues();


carousel10.add_eventListener_Arrows();
carousel10.add_eventListener_Indicators();

carousel10.add_grab();
carousel10.add_grabMobile()

carousel10.responsive_fix();

carousel10.set_indicatorAnim();


// PROGRESS FUNCTIONS
class Product_Progress
{
  constructor(section, progressDiv, circularProgress, sectionIcon)
  {

    this.section = section;
    this.progressDiv = progressDiv;
    this.circularProgress = circularProgress;
    this.sectionIcon = sectionIcon;

    this.start;
    this.end;
  }

  add_Progress()
  {
    window.addEventListener('scroll', () =>
    {
      let scrollPercent = this.get_scrollPercent();
      this.circularProgress.style.background = `conic-gradient(var(--fourthGreen) ${scrollPercent * 3.9}deg, var(--secondDark) ${scrollPercent * 3.9}deg)`;
    })
  }

  get_sectionParameters()
  {
    let start = this.section.offsetTop-400;
    let end = this.section.offsetTop + this.section.offsetHeight + 128;

    this.start = start;
    this.end = end;
  }

  add_remove_Progress()
  {
    window.addEventListener('scroll', () =>
    {
      let {scrollTop} = document.documentElement;

      if(scrollTop >= this.start && scrollTop <= this.end)
      {
        if(!this.progressDiv.classList.contains('progress-div-show'))
        {
          this.progressDiv.classList.add('progress-div-show');
        }
      }
      if(scrollTop >= this.end || scrollTop <= this.start)
      {
        if(this.progressDiv.classList.contains('progress-div-show'))
        {
          this.progressDiv.classList.remove('progress-div-show');
        }
      }

    })
  }

  get_scrollPercent()
  {
    let {scrollTop, scrollHeight} = document.documentElement
    let headHeight = 1600;
    let bottomHeight = 800;
    let scrollPercent = ((scrollTop-headHeight)*100)/(scrollHeight-(headHeight + bottomHeight));

    return scrollPercent;
  }
}

const aniversare = document.querySelector('#aniversare');
let productSectionProgressDiv01 = document.querySelector('#product-section-progress-div01');
let circularProgress01 = document.querySelector('#product-section-progress01');
let productSectionIcon01 = document.querySelector('#product-section-icon01');

const productProgress01 = new Product_Progress(aniversare, productSectionProgressDiv01, circularProgress01, productSectionIcon01)


productProgress01.add_Progress();
productProgress01.get_sectionParameters();
productProgress01.add_remove_Progress();

// SECTION02

const jucarii = document.querySelector('#jucarii');

let productSectionProgressDiv02 = document.querySelector('#product-section-progress-div02');
let circularProgress02 = document.querySelector('#product-section-progress02');
let productSectionIcon02 = document.querySelector('#product-section-icon02');

const productProgress02 = new Product_Progress(jucarii, productSectionProgressDiv02, circularProgress02, productSectionIcon02)

productProgress02.add_Progress();
productProgress02.get_sectionParameters();
productProgress02.add_remove_Progress();

// SECTION03

const rechizite = document.querySelector('#rechizite');

let productSectionProgressDiv03 = document.querySelector('#product-section-progress-div03');
let circularProgress03 = document.querySelector('#product-section-progress03');
let productSectionIcon03 = document.querySelector('#product-section-icon03');

const productProgress03 = new Product_Progress(rechizite, productSectionProgressDiv03, circularProgress03, productSectionIcon03)

productProgress03.add_Progress();
productProgress03.get_sectionParameters();
productProgress03.add_remove_Progress();


// SECTION04

const suvenire = document.querySelector('#suvenire');

let productSectionProgressDiv04 = document.querySelector('#product-section-progress-div04');
let circularProgress04 = document.querySelector('#product-section-progress04');
let productSectionIcon04 = document.querySelector('#product-section-icon04');

const productProgress04 = new Product_Progress(suvenire, productSectionProgressDiv04, circularProgress04, productSectionIcon04)

productProgress04.add_Progress();
productProgress04.get_sectionParameters();
productProgress04.add_remove_Progress();

// SECTION05

const accesorii = document.querySelector('#accesorii');

let productSectionProgressDiv05 = document.querySelector('#product-section-progress-div05');
let circularProgress05 = document.querySelector('#product-section-progress05');
let productSectionIcon05 = document.querySelector('#product-section-icon05');

const productProgress05 = new Product_Progress(accesorii, productSectionProgressDiv05, circularProgress05, productSectionIcon05)

productProgress05.add_Progress();
productProgress05.get_sectionParameters();
productProgress05.add_remove_Progress();

// SECTION06

const imbracaminte = document.querySelector('#imbracaminte');

let productSectionProgressDiv06 = document.querySelector('#product-section-progress-div06');
let circularProgress06 = document.querySelector('#product-section-progress06');
let productSectionIcon06 = document.querySelector('#product-section-icon06');

const productProgress06 = new Product_Progress(imbracaminte, productSectionProgressDiv06, circularProgress06, productSectionIcon06)

productProgress06.add_Progress();
productProgress06.get_sectionParameters();
productProgress06.add_remove_Progress();

// SECTION07

const bucatarie = document.querySelector('#bucatarie');

let productSectionProgressDiv07 = document.querySelector('#product-section-progress-div07');
let circularProgress07 = document.querySelector('#product-section-progress07');
let productSectionIcon07 = document.querySelector('#product-section-icon07');

const productProgress07 = new Product_Progress(bucatarie, productSectionProgressDiv07, circularProgress07, productSectionIcon07)

productProgress07.add_Progress();
productProgress07.get_sectionParameters();
productProgress07.add_remove_Progress();

// SECTION08

const electronice = document.querySelector('#electronice');

let productSectionProgressDiv08 = document.querySelector('#product-section-progress-div08');
let circularProgress08 = document.querySelector('#product-section-progress08');
let productSectionIcon08 = document.querySelector('#product-section-icon08');

const productProgress08 = new Product_Progress(electronice, productSectionProgressDiv08, circularProgress08, productSectionIcon08)

productProgress08.add_Progress();
productProgress08.get_sectionParameters();
productProgress08.add_remove_Progress();

// SECTION09

const gospodarie = document.querySelector('#gospodarie');

let productSectionProgressDiv09 = document.querySelector('#product-section-progress-div09');
let circularProgress09 = document.querySelector('#product-section-progress09');
let productSectionIcon09 = document.querySelector('#product-section-icon09');

const productProgress09 = new Product_Progress(gospodarie, productSectionProgressDiv09, circularProgress09, productSectionIcon09)

productProgress09.add_Progress();
productProgress09.get_sectionParameters();
productProgress09.add_remove_Progress();


// SECTION10

const igiena = document.querySelector('#igiena');

let productSectionProgressDiv10 = document.querySelector('#product-section-progress-div10');
let circularProgress10 = document.querySelector('#product-section-progress10');
let productSectionIcon10 = document.querySelector('#product-section-icon10');

const productProgress10 = new Product_Progress(igiena, productSectionProgressDiv10, circularProgress10, productSectionIcon10)

productProgress10.add_Progress();
productProgress10.get_sectionParameters();
productProgress10.add_remove_Progress();




// CURRENT PRODUCT ICON

const productIcons = document.querySelectorAll('.product-icon');

window.addEventListener('scroll', () =>
{
  for(let i = 0; i < productIcons.length; i++)
  {
    apply_afterIcon(productIcons[i]);
  }
})



function apply_afterIcon(icon)
{
  let scrollTop = document.documentElement.scrollTop;
  let scrollTopOffset;
  if(window.innerWidth < 900)
  {
    scrollTopOffset = window.innerWidth;
  }
  else
  {
    scrollTopOffset = window.innerWidth / 11;
  }
  
  scrollTop = scrollTop + scrollTopOffset;
  let iconScrollTop = icon.getBoundingClientRect().top + window.scrollY;

  if(scrollTop > iconScrollTop)
  {
    let iconGroups = icon.getElementsByTagName("g");

    let childOutline = iconGroups[0];
    let childFill = iconGroups[1];

    childOutline.classList.remove('product-icon-show');
    childFill.classList.add('product-icon-show');
    icon.classList.add('shake-icon')
  }
  else
  {
    let iconGroups = icon.getElementsByTagName("g");

    let childOutline = iconGroups[0];
    let childFill = iconGroups[1];

    childOutline.classList.add('product-icon-show');
    childFill.classList.remove('product-icon-show');
    icon.classList.remove('shake-icon')
  }

}
