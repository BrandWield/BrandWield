// document.head.textContext += `
    
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyAPuMZxmsEfVmwrFhVNrpbVkbudksJQWxM",
    authDomain: "labate-firestore.firebaseapp.com",
    databaseURL: "https://labate-firestore-default-rtdb.firebaseio.com",
    projectId: "labate-firestore",
    storageBucket: "labate-firestore.appspot.com",
    messagingSenderId: "544978849115",
    appId: "1:544978849115:web:c3d13f876cbc58ec1cde7e",
    measurementId: "G-SC3X25RVX1"
};
initializeApp(firebaseConfig);

// set brand to reference
const brandRef = 'Labate Group';
console.log('Log: Reading Brand: ' + brandRef);

// read current firestore brand variables
const dbRef = ref(getDatabase());
get(child(dbRef, 'brands/' + brandRef)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("Log: No data available for brand: " + brandRef);
    }
});

get(child(dbRef, 'brands/' + brandRef)).then((snapshot) => {

let brand = {
    charset: 'UTF-8',
    ContentLanguage: snapshot.val().basic.language2letter,
    language: snapshot.val().basic.language2letter,
    name: snapshot.val().company.name,
    color: {
        primary: snapshot.val().css.color.primary,
        secondary: snapshot.val().css.color.secondary,
        tertiary: snapshot.val().css.color.tertiary,
    },
    fonts: {
        primary: snapshot.val().css.fonts.primary,
        secondary: snapshot.val().css.fonts.secondary,
        tertiary: snapshot.val().css.fonts.tertiary,
    },
    url: snapshot.val().contact.website,
    description: snapshot.val().company.description,
    keywords: snapshot.val().company.keywords,
    themeColor: snapshot.val().css.color.primary,
    phone: snapshot.val().contact.phone,
    email: snapshot.val().contact.email,
    address: {
        street: snapshot.val().contact.address.street1 + ' ' + snapshot.val().contact.address.street2,
        locality: snapshot.val().contact.address.city,
        region: snapshot.val().contact.address.state,
        country: snapshot.val().contact.address.country,
        postalCode: snapshot.val().contact.address.zip,
        latitude: snapshot.val().contact.address.latitude,
        longitude: snapshot.val().contact.address.longitude
    },
    logos: {
        svg: snapshot.val().media.logos.logoSvg,
        width160: snapshot.val().media.logos.logoWidth160,
        width500: snapshot.val().media.logos.logoWidth500,
        width800: snapshot.val().media.logos.logoWidth800,
        width1000: snapshot.val().media.logos.logoWidth1000,
    },
    legal: {
        dba: snapshot.val().legal.dba,
        legalName: snapshot.val().legal.legalName,
    },
    ogImage: snapshot.val().media.ogImage,
    socialMedia: {
        facebook:
            {
                url: snapshot.val().socialMedia.facebook.url,
                username: snapshot.val().socialMedia.facebook.username,
                pageId: snapshot.val().socialMedia.facebook.pageId,
            },
        instagram:
            {
                url: snapshot.val().socialMedia.instagram.url,
                username: snapshot.val().socialMedia.instagram.username
            },
        linkedin:
            {
                url: snapshot.val().socialMedia.linkedin.url,
                username: snapshot.val().socialMedia.linkedin.username
            },
        twitter:
            {
                url: snapshot.val().socialMedia.twitter.url,
                username: snapshot.val().socialMedia.twitter.username
            },
        tiktok:
            {
                url: snapshot.val().socialMedia.tiktok.url,
                username: snapshot.val().socialMedia.tiktok.username
            },
        youtube:
            {
                url: snapshot.val().socialMedia.youtube.url,
                username: snapshot.val().socialMedia.youtube.username
            }
    },
    fbPageId: snapshot.val().socialMedia.facebook.pageId,
    favicons: {
        favicon16: snapshot.val().media.favicons._16x16,
        favicon32: snapshot.val().media.favicons._32x32,
        favicon96: snapshot.val().media.favicons._96x96,
        favicon192: snapshot.val().media.favicons._192x192,
    },
    callToAction: snapshot.val().company.callToAction,
    foundingDate: snapshot.val().company.foundingDate,
    mission: snapshot.val().company.mission,
    openingHours: snapshot.val().company.openingHours,
    priceRange: snapshot.val().company.priceRange,
    schemaType: snapshot.val().company.schemaType,
    slogan: snapshot.val().company.slogan,
    valueProposition: snapshot.val().company.valueProposition,
    rating: {
        value: snapshot.val().company.rating.value,
        highest: snapshot.val().company.rating.highest,
        count: snapshot.val().company.rating.count,
    }
};

// Set <title>{{title}}</title>
document.getElementsByTagName('title')[0].innerHTML = brand.name + ' | ' + brand.description;

// Set <base href="{{url}}" />
document.getElementsByTagName('base')[0].href = brand.url;

// Set <link rel="canonical" href="{{url}}" />
document.getElementsByTagName('link')[0].href = brand.url;

// Set <meta charset="{{charset}}" />
document.getElementsByTagName('meta')[0].charset = brand.charset;

// Set <meta name="Content-Language" content="{{ContentLanguage}}" />
document.getElementsByTagName('meta')[1].content = brand.ContentLanguage;

// Meta Tags
document.getElementsByTagName('meta').namedItem('language').setAttribute('content', brand.language);
document.getElementsByTagName('meta').namedItem('url').setAttribute('content', brand.url);
document.getElementsByTagName('meta').namedItem('description').setAttribute('content',brand.description);
document.getElementsByTagName('meta').namedItem('keywords').setAttribute('content',brand.keywords);
document.getElementsByTagName('meta').namedItem('theme-color').setAttribute('content', brand.themeColor);
document.getElementsByTagName('meta').namedItem('copyright').setAttribute('content', brand.copyright);
document.getElementsByTagName('meta').namedItem('reply-to').setAttribute('content', brand.email);
document.getElementsByTagName('meta').namedItem('identifier-URL').setAttribute('content', brand.url);

// Open Graph Tags
document.getElementsByTagName('meta').namedItem('og:url').setAttribute('content', brand.url);
document.getElementsByTagName('meta').namedItem('og:phone_number').setAttribute('content', brand.phone);
document.getElementsByTagName('meta').namedItem('og:email').setAttribute('content', brand.email);
document.getElementsByTagName('meta').namedItem('og:street-address').setAttribute('content', brand.address.street);
document.getElementsByTagName('meta').namedItem('og:locality').setAttribute('content', brand.address.locality);
document.getElementsByTagName('meta').namedItem('og:region').setAttribute('content', brand.address.region);
document.getElementsByTagName('meta').namedItem('og:postal-code').setAttribute('content', brand.address.postalCode);
document.getElementsByTagName('meta').namedItem('og:country-name').setAttribute('content', brand.address.country);
document.getElementsByTagName('meta').namedItem('og:latitude').setAttribute('content', brand.address.latitude);
document.getElementsByTagName('meta').namedItem('og:longitude').setAttribute('content', brand.address.longitude);

// Facebook Tags
document.getElementsByTagName('meta').namedItem('fb:page_id').setAttribute('content', brand.fbPageId);

// Twitter Tags
document.getElementsByTagName('meta').namedItem('twitter:site').setAttribute('content', brand.name);
document.getElementsByTagName('meta').namedItem('twitter:creator').setAttribute('content', brand.socialMedia.twitter);

// Favicons
document.getElementsByTagName('link')[3].href = brand.favicons.favicon16;
document.getElementsByTagName('link')[4].href = brand.favicons.favicon32;
document.getElementsByTagName('link')[5].href = brand.favicons.favicon96;
document.getElementsByTagName('link')[6].href = brand.favicons.favicon192;
document.getElementsByTagName('link')[7].href = brand.favicons.favicon32;
document.getElementsByTagName('link')[8].href = brand.favicons.favicon32;

// Google Font API
document.getElementsByTagName('link')[1].href = 'https://fonts.googleapis.com/css?family=' + brand.font.primary + '|' + brand.font.secondary + '|' + brand.font.tertiary;

let facebookUrl = brand.socialMedia.facebook.url;
let instagramUrl = brand.socialMedia.instagram.url;
let linkedinUrl = brand.socialMedia.linkedin.url;
let twitterUrl = brand.socialMedia.twitter.url;
let tiktokUrl = brand.socialMedia.tiktok.url;
let youtubeUrl = brand.socialMedia.youtube.url;

document.getElementById('facebook').href = facebookUrl;
document.getElementById('instagram').href = instagramUrl;
document.getElementById('linkedin').href = linkedinUrl;
document.getElementById('twitter').href = twitterUrl;
document.getElementById('tiktok').href = tiktokUrl;
document.getElementById('youtube').href = youtubeUrl;

document.getElementById('footerPhone').innerHTML = brand.phone;
document.getElementById('footerPhone').href = brand.phone;
document.getElementById('footerEmail').innerHTML = brand.email;
document.getElementById('footerEmail').href = brand.email;
document.getElementById('footerAddress').innerHTML = brand.address.street + ', ' + brand.address.locality + ', ' + brand.address.region + ' ' + brand.address.postalCode + ', ' + brand.address.country;
document.getElementById('footerAddress').href = brand.address.street + ', ' + brand.address.locality + ', ' + brand.address.region + ' ' + brand.address.postalCode + ', ' + brand.address.country;

document.getElementById('navLogo').src = brand.favicons.favicon96;
document.getElementById('navLogo').alt = brand.name + ' Logo';

document.getElementById('h1').innerHTML = brand.slogan + brand.valueProposition;

document.getElementById('topCta').href = "mailto:" + brand.email;
document.getElementById('missionP').innerHTML = brand.mission;

document.getElementById('utmSite').href = 'https://www.brandwield.com?utm=' + brand.url;

function showSocialIfExists(facebookUrl, instagramUrl, linkedinUrl, twitterUrl, tiktokUrl, youtubeUrl) {
    if(facebookUrl !== null) {
        document.getElementById("facebook").style.display = "none";
    } else { document.getElementById("facebook").style.display = "block"; }

    if(instagramUrl !== null) {
        document.getElementById("instagram").style.display="none";
    } else { document.getElementById("instagram").style.display="block"; }

    if(linkedinUrl !== null) {
        document.getElementById("linkedin").style.display="none";
    } else { document.getElementById("linkedin").style.display="block"; }

    if(twitterUrl !== null) {
        document.getElementById("twitter").style.display="none";
    } else { document.getElementById("twitter").style.display="block"; }

    if(tiktokUrl !== null) {
        document.getElementById("tiktok").style.display="none";
    } else { document.getElementById("tiktok").style.display="block"; }

    if(youtubeUrl !== null) {
        document.getElementById("youtube").style.display="none";
    } else { document.getElementById("youtube").style.display="block"; }
}

});

