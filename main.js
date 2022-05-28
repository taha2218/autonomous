window.addEventListener('scroll', ()=> {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 100);
})

function goToYoloV2() {
    window.location = "./pages/yolov2/index.html"
}

function goToYoloV3() {
    window.location = "./pages/yolov3/index.html"
}

function goToMask() {
    window.location = "./pages/mask/index.html"
}

function goToHough() {
    window.location = "./pages/hough/index.html"
}

function goToSteer() {
    window.location = "./pages/steering/index.html"
}

function goToSent() {
    window.location = "./pages/sentiment/index.html"
}