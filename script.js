// Unsplash API
let count = 5;
let query = '';

const body = document.body;

let lastScroll = 0;

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader-container');
const filterButton = document.getElementById('filter-button');
const searchFieldInput = document.getElementById('search-input');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
let isInitialLoad = true;


function updateAPIURLWithNewParameters(picCount, picQuery) {
    count = picCount;
    query = picQuery;
}

// Check if all images are loaded
function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
    }
}

// Helper function to set attributes on DOM elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        });
        // Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });
        // Event Listeners, check when each photo is finished loading
        img.addEventListener('load', imageLoaded);
        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}

function removeChildrenFromImageContainer() {
    while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
    }
    // imageContainer.textContent = '';
}

function applyFilterToQuery() {
    const filter = searchFieldInput.value.trimStart();
    query = filter;
    updateAPIURLWithNewParameters(30, query);
    removeChildrenFromImageContainer();
    getPhotos();
}

// Get photos from Unsplash API
async function getPhotos() {
    try {
        // throw new Error('Pass API');
        const response = await fetch(`/.netlify/functions/unsplashapi?filterName=${query}&randomCounter=${count}`);
        const data = await response.json();
        photosArray = data.response;
        displayPhotos();
        if (isInitialLoad) {
            updateAPIURLWithNewParameters(30, '');
            isInitialLoad = false;
        }
    } catch (error) {
        console.log('Error calling api: ', error);
        photosArray = localPhotos;
        displayPhotos();
    }
}

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll <= 0) {
        body.classList.remove('scroll-up');
        body.classList.remove('fixed');
    }

    if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-up');
        body.classList.add('scroll-down');
        body.classList.add('fixed');
    }

    if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
        body.classList.add('scroll-up');
        body.classList.remove('scroll-down');
    }

    lastScroll = currentScroll;

    // Check to see if scrolling near bottom of page, Load More Photos
    if (window.innerHeight + currentScroll >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotos();
    }
})

// Filter Button
filterButton.addEventListener('click', applyFilterToQuery);
searchFieldInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        applyFilterToQuery();
    }
});

// On Load
getPhotos();