// loadResources.js
function loadResources() {
    // Load Bootstrap CSS first
    const bootstrapCSS = document.createElement('link');
    bootstrapCSS.rel = 'preload';
    bootstrapCSS.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
    bootstrapCSS.as = 'style';
    bootstrapCSS.onload = () => {
        bootstrapCSS.rel = 'stylesheet';
    };
    document.head.appendChild(bootstrapCSS);

    // Load Bootstrap bundle JS
    const bootstrapJS = document.createElement('script');
    bootstrapJS.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    bootstrapJS.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz'; // Optional
    bootstrapJS.crossOrigin = 'anonymous'; // Optional
    bootstrapJS.defer = true; // Load after the document has been parsed
    document.body.appendChild(bootstrapJS);
}

// Call the function to load resources
loadResources();
