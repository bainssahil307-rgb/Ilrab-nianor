const stories = [

    {
        title: "The Beginning ❤️",
        label: "16 JANUARY • 4:13 AM 🌷",
        text: `Shayad us tym mne bhi koni pata tha
ki ek chota sa purpose meri zindagi ka
itna khoobsurat hissa ban jega. ❤️`,
        photo: "photos/Screenshot_20260915_164419_Gallery.jpg"
    },

    {
        title: "8 Months Later 🌸",
        label: "16 SEPTEMBER • 8 MONTHS",
        text: `Aaj 16 September hai…
or dekhte dekhte 8 months ho gee. 🌷`,
        photo: "photos/Screenshot_20260916_145232_Gallery.jpg"
    },

    {
        title: "No Name, Yet So Special 🫀",
        label: "UNDERSTANDING • CARE • RESPECT",
        text: `Laddi is rishte ka koi naam beshak na ho
lekin jo understanding, care, respect,
love or sukoon isme milaa hai…
mere vaste vo kisi naam se kam koni. ❤️`,
        photo: "photos/Screenshot_20260916_145721_Gallery.jpeg"
    },

    {
        title: "You Understood Me 🫂",
        label: "A LITTLE CONFESSION",
        text: `Kade bhi meri kmi ginakr glt koni btaya..
mujhe samjha.. sambhala or apnaya.

Sach me aap mne merte bhi jyada samjho ho. 🥺❤️`,
        photo: "photos/Screenshot_20260916_145732_Gallery.jpg"
    },

    {
        title: "Your Smile 🌻",
        label: "ONE SIMPLE WISH",
        text: `Mai bss nyu chahu tham hamesha nyue haste
khush rhte mere samne raho.

Thari smile mere liye bahut special hai. 🫂`,
        photo: "photos/Screenshot_20260916_145800_Gallery.jpg"
    },

    {
        title: "Happy 8 Months ❤️",
        label: "16 SEPTEMBER 2026 🌸",
        text: `Happy 8 Months anniversary to us
meri sabse special person. 🌸🥳

I love youu, I really miss uu nd 🥹

I will choose u today, tomorrow and every day. 🧿🌸`,
        photo: "photos/Screenshot_20260916_150103_Gallery.jpg"
    }

];

let currentStory = 0;


function startStory() {

    document.querySelector(".hero").style.display = "none";

    document.getElementById("story").style.display = "flex";

    updateStory();

}


function nextStory() {

    currentStory++;

    if (currentStory >= stories.length) {
        currentStory = 0;
    }

    updateStory();

}


function updateStory() {

    const story = stories[currentStory];

    const card = document.querySelector(".story-card");

    card.style.animation = "none";

    void card.offsetWidth;

    card.style.animation = "storyAppear 0.7s ease";


    document.getElementById("storyLabel").textContent =
        story.label;

    document.getElementById("storyTitle").textContent =
        story.title;

    document.getElementById("storyText").textContent =
        story.text;

    document.getElementById("storyCounter").textContent =
        `${currentStory + 1} / ${stories.length}`;


    const photo = document.getElementById("storyImage");

    photo.src = story.photo;

    photo.alt = story.title;

}/* =========================
   MEMORY ALBUM SLIDESHOW
========================= */

const albumPhotos = [

    {
        photo: "photos/Screenshot_20260916_150103_Gallery.jpg",
        caption: "One of those special moments ❤️"
    },

    {
        photo: "photos/Screenshot_20260916_145732_Gallery.jpg",
        caption: "A little memory 🌸"
    },

    {
        photo: "photos/Screenshot_20260916_145721_Gallery.jpeg",
        caption: "Some moments stay forever 🫀"
    },

    {
        photo: "photos/Screenshot_20260916_145432_Video Player.jpg",
        caption: "Another beautiful memory ✨"
    },

    {
        photo: "photos/Screenshot_20260916_145422_Video Player.jpg",
        caption: "A moment worth remembering 🌷"
    },

    {
        photo: "photos/Screenshot_20260916_145313_Gallery.jpg",
        caption: "Our little memories ❤️"
    },

    {
        photo: "photos/Screenshot_20260916_145304_Gallery.jpg",
        caption: "Just a beautiful moment 🥹"
    },

    {
        photo: "photos/Screenshot_20260916_145232_Gallery.jpg",
        caption: "A memory to keep 🌻"
    },

    {
        photo: "photos/Screenshot_20260916_144749_Gallery.jpg",
        caption: "That little smile ❤️"
    },

    {
        photo: "photos/Screenshot_20260916_144840_Gallery.jpg",
        caption: "Moments like these 🫂"
    },

    {
        photo: "photos/Screenshot_20260916_144802_Gallery.jpg",
        caption: "A beautiful memory 🌸"
    },

    {
        photo: "photos/Screenshot_20260916_145028_Gallery.jpg",
        caption: "Some memories need no words ✨"
    },

    {
        photo: "photos/Screenshot_20260916_145046_Gallery.jpg",
        caption: "Still one of my favourites ❤️"
    }

];


let currentAlbumPhoto = 0;


function updateAlbumPhoto() {

    const image =
        document.getElementById("albumImage");

    const caption =
        document.getElementById("albumCaption");

    const counter =
        document.getElementById("albumCounter");


    if (!image || !caption || !counter) {
        return;
    }


    image.style.opacity = "0";

    image.style.transform =
        "scale(0.96)";


    setTimeout(function () {

        image.src =
            albumPhotos[currentAlbumPhoto].photo;

        caption.textContent =
            albumPhotos[currentAlbumPhoto].caption;

        counter.textContent =
            (currentAlbumPhoto + 1)
            + " / "
            + albumPhotos.length;


        image.style.opacity = "1";

        image.style.transform =
            "scale(1)";

    }, 300);

}


function nextAlbumPhoto() {

    currentAlbumPhoto++;

    if (
        currentAlbumPhoto >=
        albumPhotos.length
    ) {

        currentAlbumPhoto = 0;

    }

    updateAlbumPhoto();

}


function previousAlbumPhoto() {

    currentAlbumPhoto--;

    if (currentAlbumPhoto < 0) {

        currentAlbumPhoto =
            albumPhotos.length - 1;

    }

    updateAlbumPhoto();

}


/* AUTO CHANGE EVERY 3 SECONDS */

setInterval(function () {

    nextAlbumPhoto();

}, 3000);