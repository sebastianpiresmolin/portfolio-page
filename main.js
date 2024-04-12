// IDs of the elements
const ids = ['home', 'projects', 'info', 'contact'];

// Store the original innerHTML of the elements
const originalHTML = {};

// Function to handle click event
function handleClick(id) {
  let element = document.getElementById(id);
  let containerElementHome = document.getElementsByClassName(
    'container__right__home'
  )[0];
  let containerElementProject = document.getElementsByClassName(
    'container__right__projects'
  )[0];
  let containerElementInfo = document.getElementsByClassName('info__links')[0];
  let containerElementInfoBottom = document.getElementsByClassName(
    'info__links__bottom'
  )[0];
  let containerElementContact = document.getElementsByClassName(
    'container__right__contact'
  )[0];

  if (element.classList.contains('active')) {
    location.reload();
  } else {
    element.classList.add('active');

    // Add 'active' class to 'container__right__home' if 'home' is active
    if (id === 'home') {
      containerElementHome.id = 'active';
    } else {
      containerElementHome.id = '';
    }

    if (id === 'projects') {
      containerElementProject.id = 'active';
    } else {
      containerElementProject.id = '';
    }

    if (id === 'info') {
      containerElementInfo.id = 'active';
      containerElementInfoBottom.id = 'active';
    } else {
      containerElementInfo.id = '';
      containerElementInfoBottom.id = '';
    }

    if (id === 'contact') {
      containerElementContact.id = 'active';
    } else {
      containerElementContact.id = '';
    }

    // Remove 'active' class from other elements and restore their original innerHTML
    ids
      .filter((otherId) => otherId !== id)
      .forEach((otherId) => {
        let otherElement = document.getElementById(otherId);
        otherElement.classList.remove('active');
        if (originalHTML[otherId]) {
          otherElement.innerHTML = originalHTML[otherId];
        }
      });

    // Store the original innerHTML if it's not already stored
    if (!originalHTML[id]) {
      originalHTML[id] = element.innerHTML;
    }

    // Set the innerHTML of the element
    element.innerHTML = '<i class="fa-solid fa-circle fa-2xs"></i>';
  }

  // Remove 'active' class from 'container__right__home' if 'home' is not active
  if (ids !== 'home' && containerElementHome.id === 'active') {
  }
}

// Add event listeners
ids.forEach((id) => {
  document.getElementById(id).addEventListener('click', () => handleClick(id));
});

// Handle the 'home' element which has the 'active' class by default
let homeElement = document.getElementById('home');
originalHTML['home'] = homeElement.innerHTML;
homeElement.innerHTML = '<i class="fa-solid fa-circle fa-2xs"></i>';

let containerLeftH1 = document.querySelector('.container__left h1');
let containerLeftH2 = document.querySelector('.container__left h2');
let containerLeftLinks = document.querySelectorAll('.container__left__links');
let containerThemes = document.querySelector('.container__themes');
let containerThemesA = document.querySelector('.container__themes a');
let themeActive = document.querySelector('.themeActive');

document.getElementById('dark').addEventListener('click', () => {
  let lightElement = document.getElementById('light');
  let darkElement = document.getElementById('dark');
  let monoElement = document.getElementById('mono');

  if (darkElement.classList.contains('themeActive')) {
    darkElement.classList.remove('themeActive');
    darkElement.classList.add('themeInactive');
    lightElement.classList.add('themeActive');
    lightElement.classList.remove('themeInactive');
    monoElement.classList.add('monoWhite');
    document.documentElement.style.setProperty('--color-particle', 'black');

    document.getElementsByClassName('container')[0].classList.add('lightmode');
    document
      .getElementsByClassName('container__left')[0]
      .classList.add('lightmode');
    document
      .getElementsByClassName('container__left__links')[0]
      .classList.add('lightmode');
    document
      .getElementsByClassName('container__right')[0]
      .classList.add('lightmode');
    document
      .getElementsByClassName('container__right__projects')[0]
      .classList.add('lightmode');
    document
      .getElementsByClassName('container__left__info')[0]
      .classList.add('lightmode');
    document
      .querySelector('.container__right__projects h3')
      .classList.add('lightmode');
    document
      .getElementsByClassName('container__right__contact')[0]
      .classList.add('lightmode');
    document
      .getElementsByClassName('container__themes')[0]
      .classList.add('lightmode');
  } else {
    lightElement.classList.remove('themeActive');
    lightElement.classList.remove('themeActive');
    lightElement.classList.add('themeInactive');
    darkElement.classList.add('themeActive');
    darkElement.classList.remove('themeInactive');
    monoElement.classList.remove('monoWhite');
    document.documentElement.style.setProperty('--color-particle', 'white');

    document
      .getElementsByClassName('container')[0]
      .classList.remove('lightmode');
    document
      .getElementsByClassName('container__left')[0]
      .classList.remove('lightmode');
    document
      .getElementsByClassName('container__left__links')[0]
      .classList.remove('lightmode');
    document
      .getElementsByClassName('container__right')[0]
      .classList.remove('lightmode');
    document
      .getElementsByClassName('container__right__projects')[0]
      .classList.remove('lightmode');
    document
      .querySelector('.container__right__projects h3')
      .classList.remove('lightmode');
    document
      .querySelector('.container__right__projects h3')
      .classList.remove('lightmode');
    document
      .getElementsByClassName('container__left__info')[0]
      .classList.remove('lightmode');
    document
      .getElementsByClassName('container__right__contact')[0]
      .classList.remove('lightmode');
    document
      .getElementsByClassName('container__themes')[0]
      .classList.remove('lightmode');
  }
});

document.getElementById('light').addEventListener('click', () => {
  let lightElement = document.getElementById('light');
  let darkElement = document.getElementById('dark');
  let monoElement = document.getElementById('mono');

  if (lightElement.classList.contains('themeActive')) {
    lightElement.classList.remove('themeActive');
    lightElement.classList.add('themeInactive');
    darkElement.classList.add('themeActive');
    darkElement.classList.remove('themeInactive');
    monoElement.classList.remove('monoWhite');
    document.documentElement.style.setProperty('--color-particle', 'white');

    document
      .getElementsByClassName('container')[0]
      .classList.remove('lightmode');
    document
      .getElementsByClassName('container__left')[0]
      .classList.remove('lightmode');
    document
      .getElementsByClassName('container__left__links')[0]
      .classList.remove('lightmode');
    document
      .getElementsByClassName('container__right')[0]
      .classList.remove('lightmode');
    document
      .getElementsByClassName('container__right__projects')[0]
      .classList.remove('lightmode');
    document
      .querySelector('.container__right__projects h3')
      .classList.remove('lightmode');
    document
      .querySelector('.container__right__projects h3')
      .classList.remove('lightmode');
    document
      .getElementsByClassName('container__left__info')[0]
      .classList.remove('lightmode');
    document
      .getElementsByClassName('container__right__contact')[0]
      .classList.remove('lightmode');
    document
      .getElementsByClassName('container__themes')[0]
      .classList.remove('lightmode');
  } else {
    darkElement.classList.remove('themeActive');
    darkElement.classList.remove('themeActive');
    darkElement.classList.add('themeInactive');
    lightElement.classList.add('themeActive');
    lightElement.classList.remove('themeInactive');
    monoElement.classList.add('monoWhite');
    document.documentElement.style.setProperty('--color-particle', 'black');
    document.getElementsByClassName('container')[0].classList.add('lightmode');
    document
      .getElementsByClassName('container__left')[0]
      .classList.add('lightmode');
    document
      .getElementsByClassName('container__right')[0]
      .classList.add('lightmode');
    document
      .getElementsByClassName('container__right__projects')[0]
      .classList.add('lightmode');
    document
      .getElementsByClassName('container__left__info')[0]
      .classList.add('lightmode');
    document
      .querySelector('.container__right__projects h3')
      .classList.add('lightmode');
    document
      .getElementsByClassName('container__right__contact')[0]
      .classList.add('lightmode');
    document
      .getElementsByClassName('container__themes')[0]
      .classList.add('lightmode');
  }
});

document.getElementById('mono').addEventListener('click', () => {
  let monoElement = document.getElementById('mono');

  if (monoElement.classList.contains('themeActive')) {
    document.documentElement.style.setProperty(
      '--font-light',
      'NeueMontreal-Light'
    );
    document.documentElement.style.setProperty(
      '--font-bold',
      'NeueMontreal-Bold'
    );
    document.documentElement.style.setProperty(
      '--font-regular',
      'NeueMontreal-Regular'
    );
    monoElement.classList.remove('themeActive');
  } else {
    document.documentElement.style.setProperty(
      '--font-light',
      'NeueMontrealMono-Light'
    );
    document.documentElement.style.setProperty(
      '--font-bold',
      'NeueMontrealMono-bold'
    );
    document.documentElement.style.setProperty(
      '--font-regular',
      'NeueMontrealMono-Regular'
    );

    monoElement.classList.add('themeActive');
  }
});
