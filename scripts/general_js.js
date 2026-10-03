// BACKUP BUTTON

const backupButtons = document.querySelectorAll('.backup-button');
const backUpButton = document.querySelector('.backup-div');
const actualBackupButton = document.querySelector('.backup-button');
buttonMoved = false;
const endSectionStart = document.querySelector('.end-section-start');
const endSection = document.querySelector('.end-section');
const backupButtonStart = document.querySelector('.backup-start');

window.addEventListener('scroll', () => {
    
	let {scrollTop} = document.documentElement;
	let top = backupButtonStart.offsetTop;

	if (scrollTop >= top) 
	{
		backUpButton.classList.add('display-backup-button-div');
	}
	else
	{
		backUpButton.classList.remove('display-backup-button-div');
	}
})

// Cand apesi te duce sus 
backupButtons.forEach(button =>
{
	button.addEventListener('click', () => {
	  window.scrollTo({
	    top: 0,
	    behavior: 'smooth'
	  });
	  dezactivate_backupButton(button);
	});
})

function dezactivate_backupButton(button)
{
	button.classList.add('backup-button-inactive');
	setTimeout(() =>
	{
		button.classList.remove('backup-button-inactive');
	}, 1000);
}

// Cand vede ultima sectiune sa dispara

function getScrollPercent()
{
  const {scrollTop, scrollHeight} = document.documentElement;

  const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100;

  return scrollPercent;
}

function get_buttonCoordinates()
{
		let offsetStartEndSect = endSectionStart.offsetTop;
	  let endStartHeight = endSectionStart.offsetHeight;
	  let buttonHeight = actualBackupButton.offsetHeight;

    offsetStartEndSect = offsetStartEndSect + endStartHeight - buttonHeight;

    return offsetStartEndSect;
}

function setBackupButton()
{
			offsetStartEndSect = get_buttonCoordinates();
      
      backupbuttontopVar = offsetStartEndSect + 'px';

      backUpButton.classList.add('postion-backup-button-div');
      backUpButton.style.setProperty('--top', backupbuttontopVar);

      buttonMoved = true;
}

function unsetBackupButton()
{
      backUpButton.classList.remove('postion-backup-button-div');
      buttonMoved = false;
}

const backUpbuttonObserver = new IntersectionObserver((entries) =>
{
	entries.forEach((entry) =>
	{

		const {scrollTop} = document.documentElement;
  	const scrollpixels = Math.round(scrollTop);

  	offsetStartEndSect = get_buttonCoordinates();

    if(entry.isIntersecting && buttonMoved == false)
    {
      setBackupButton();
    }
    if(!entry.isIntersecting && buttonMoved == true && scrollTop <= offsetStartEndSect)
    {
      unsetBackupButton();
    }
  
  })
})

backUpbuttonObserver.observe(endSection);

// Tablet Haburger Menu

const hamburgerMenuDiv = document.querySelector('.hamburger-menu-div');
const tabletNav = document.querySelector('.tablet-nav');
const tabletOverlay = document.querySelector('.tablet-overlay');
let hamburgerMenuDivClicked = false;

window.addEventListener('resize', () =>
{
	if(window.innerWidth > 900 || window.innerWidth < 510)
	{
		tabletNav.classList.remove('show-tablet-nav');
		tabletOverlay.classList.remove('show-tablet-overlay');
		hamburgerMenuDivClicked = false;
		hamburgerMenuDiv.classList.remove('intoX');
	}
	
})

hamburgerMenuDiv.addEventListener('click', () =>
{
	if(!hamburgerMenuDivClicked)
	{
		tabletNav.classList.add('show-tablet-nav');
		tabletOverlay.classList.add('show-tablet-overlay');
		hamburgerMenuDivClicked = true;
		hamburgerMenuDiv.classList.add('intoX');
	}
})

tabletOverlay.addEventListener('click', () =>
{
	if(hamburgerMenuDivClicked)
	{
		tabletNav.classList.remove('show-tablet-nav');
		tabletOverlay.classList.remove('show-tablet-overlay');
		hamburgerMenuDivClicked = false;
		hamburgerMenuDiv.classList.remove('intoX');
	}
})

// DISCLAIMER

const copyrightDiv = document.querySelector('.copyright-div');
const disclaimer = document.querySelector('.disclaimer-div');
const disclaimerButton = document.querySelector('.disclaimer-button');
const disclaimerContent = document.querySelector('.disclaimer-content');
const disclaimerText = document.querySelector('.disclaimer');
const disclaimerIcon = document.querySelector('.disclaimer-icon');
const overlay = document.querySelector('.overlay');
let disclaimerWidth;
let disclaimerHeight;
let disclaimerBorder;

get_disclaimerValues()

window.addEventListener('resize', get_disclaimerValues);

let disclaimerDissapear = anime({
	targets: disclaimer,
	autoplay: false,
	borderRadius: [disclaimerBorder, '1000px'],
  width: [disclaimerWidth, '0rem'],
  height: [disclaimerHeight, '0rem'],
  easing: 'linear',
  duration: 150
})

let disclaimerFill = anime({
	targets: disclaimer,
	autoplay: false,
	borderRadius: ['1000px', disclaimerBorder],
  width: ['0rem', disclaimerWidth],
  height: ['0rem',disclaimerHeight],
  easing: 'linear',
  duration: 150
})

let overlayDissapear = anime({
	targets: overlay,
	autoplay: false,
	opacity: [1, 0],
  easing: 'linear',
  duration: 150
})

let overlayAppear = anime({
	targets: overlay,
	autoplay: false,
	opacity: [0, 1],
  easing: 'linear',
  duration: 150
})



copyrightDiv.addEventListener('click', () =>
{
	disclaimer.style.display = 'initial';
	overlay.style.display = 'initial';

	disclaimerFill.play();
	overlayAppear.play();
	setTimeout(() =>
	{
		disclaimerContent.style.display = 'flex';
		disclaimerText.style.display = 'initial';
		disclaimerIcon.style.display = 'initial';
		disclaimerButton.style.display = 'flex';
	}, 150)

})

disclaimerButton.addEventListener('click', () =>
{
	removeDisclaimer()
})

overlay.addEventListener('click', () =>
{
	removeDisclaimer()
})


function removeDisclaimer()
{
	disclaimerContent.style.display = 'none';
	disclaimerText.style.display = 'none';
	disclaimerIcon.style.display = 'none';
	disclaimerButton.style.display = 'none';
	disclaimerDissapear.play();
	overlayDissapear.play();
	setTimeout(() =>
	{
		disclaimer.style.display = 'none';
		overlay.style.display = 'none';
	}, 150)
}

function get_disclaimerValues()
{
	if(window.innerWidth >= 750)
	{
		disclaimerWidth = '40rem';
		disclaimerHeight = '30rem';
		disclaimerBorder = '64px';
	}
	if(window.innerWidth < 750 && window.innerWidth >= 650)
	{
		disclaimerWidth = '30rem';
		disclaimerHeight = '25rem';
		disclaimerBorder = '64px';
	}
	if(window.innerWidth < 650 && window.innerWidth >= 550)
	{
		disclaimerWidth = '100%';
		disclaimerHeight = '30rem';
		disclaimerBorder = '64px';
	}
	if(window.innerWidth < 550 && window.innerWidth >= 450)
	{
		disclaimerWidth = '100%';
		disclaimerHeight = '30rem';
		disclaimerBorder = '48px';
	}
	if(window.innerWidth < 450)
	{
		disclaimerWidth = '100%';
		disclaimerHeight = '30rem';
		disclaimerBorder = '32px';
	}

}