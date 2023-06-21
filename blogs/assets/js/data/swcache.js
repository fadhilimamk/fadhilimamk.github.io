const resource = [
    /* --- CSS --- */
    '/blogs/assets/css/style.css',

    /* --- PWA --- */
    '/blogs/app.js',
    '/blogs/sw.js',

    /* --- HTML --- */
    '/blogs/index.html',
    '/blogs/404.html',

    
        '/blogs/categories/',
    
        '/blogs/tags/',
    
        '/blogs/archives/',
    
        '/blogs/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/blogs/assets/img/favicons/android-chrome-192x192.png',
        '/blogs/assets/img/favicons/android-chrome-512x512.png',
        '/blogs/assets/img/favicons/apple-touch-icon.png',
        '/blogs/assets/img/favicons/favicon-16x16.png',
        '/blogs/assets/img/favicons/favicon-32x32.png',
        '/blogs/assets/img/favicons/favicon.ico',
        '/blogs/assets/img/favicons/mstile-150x150.png',
        '/blogs/assets/img/favicons/safari-pinned-tab.svg',
        '/blogs/assets/js/dist/categories.min.js',
        '/blogs/assets/js/dist/commons.min.js',
        '/blogs/assets/js/dist/home.min.js',
        '/blogs/assets/js/dist/misc.min.js',
        '/blogs/assets/js/dist/page.min.js',
        '/blogs/assets/js/dist/post.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'fadhil.id/blog',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

