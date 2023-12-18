
// IDs of the elements
const ids = ['home', 'projects', 'info', 'contact'];

// Store the original innerHTML of the elements
const originalHTML = {};

// Function to handle click event
function handleClick(id) {
    let element = document.getElementById(id);
    let containerElementHome = document.getElementsByClassName('container__right__home')[0];
    let containerElementProject = document.getElementsByClassName('container__right__projects')[0];
    let containerElementInfo = document.getElementsByClassName('info__links')[0];
    let containerElementInfoBottom = document.getElementsByClassName('info__links__bottom')[0];
    let containerElementContact = document.getElementsByClassName('container__right__contact')[0];

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
        ids.filter(otherId => otherId !== id).forEach(otherId => {
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
    if (id !== 'home' && containerElement.id === 'active') {
        containerElement.id = '';
    }
}

// Add event listeners
ids.forEach(id => {
    document.getElementById(id).addEventListener('click', () => handleClick(id));
});

// Handle the 'home' element which has the 'active' class by default
let homeElement = document.getElementById('home');
originalHTML['home'] = homeElement.innerHTML;
homeElement.innerHTML = '<i class="fa-solid fa-circle fa-2xs"></i>';

document.getElementById('dark').addEventListener('click', () => {
    let lightElement = document.getElementById('light');
    let darkElement = document.getElementById('dark');
    
    if (darkElement.classList.contains('themeActive')) {
        darkElement.classList.remove('themeActive');
        lightElement.classList.add('themeActive');
    } else {
        lightElement.classList.remove('themeActive');
        darkElement.classList.add('themeActive');
    }
});

document.getElementById('light').addEventListener('click', () => {
    let lightElement = document.getElementById('light');
    let darkElement = document.getElementById('dark');
    
    if (lightElement.classList.contains('themeActive')) {
        lightElement.classList.remove('themeActive');
        darkElement.classList.add('themeActive');
    } else {
        darkElement.classList.remove('themeActive');
        lightElement.classList.add('themeActive');
    }
});