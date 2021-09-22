let images = ['slider1.jpg', 'slider2.jpg', 'slider3.jpg']
let count = 0
let activeSlide = images[count]
let path = 'images'
let wrapper = document.getElementsByClassName('slider-wrapper')[0]
let img = document.createElement('img')
img.setAttribute('src', path + '/' + activeSlide)
wrapper.append(img)
let nextBtn = null
let prevBtn = null
if(images.length > 1) {
    nextBtn = document.createElement('button')
    nextBtn.innerText = '>'
    nextBtn.classList.add('btn', 'next-btn')
    prevBtn = document.createElement('button')
    prevBtn.innerText = '<'
    prevBtn.classList.add('btn', 'prev-btn')
    wrapper.append(nextBtn,prevBtn)
    playBtn = document.createElement('button')
    playBtn.innerText = 'play'
    playBtn.classList.add('btn', 'play-btn')
    stopBtn = document.createElement('button')
    stopBtn.innerText = 'stop'
    stopBtn.classList.add('btn', 'stop-btn')
    wrapper.append(playBtn,stopBtn)
}
let id = null
let ifPlay = false
function nextSlide() {
    if(count === images.length - 1) {
        count = 0
    } else {
        count = count + 1
    }
    activeSlide = images[count]
    img.setAttribute('src', path + '/' + activeSlide)
    if(ifPlay) {
        clearInterval(id)
        id = setInterval(nextSlide,3000)
    }

}

function prevSlide() {
    if(count === 0) {
        count = images.length - 1
    } else {
        count = count - 1
    }
   
    activeSlide = images[count]
    img.setAttribute('src', path + '/' + activeSlide)

    if(ifPlay) {
        clearInterval(id)
        id = setInterval(nextSlide,3000)
    }
}
nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)
function play() {
    id = setInterval(nextSlide,3000)
    ifPlay = true
}
playBtn.addEventListener('click',play)

stopBtn.addEventListener('click',function() {
    ifPlay = false
    clearInterval(id)
})
