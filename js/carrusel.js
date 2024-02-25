const imgs = document.getElementById("imgs")

const img = document.querySelectorAll("#imgs img")

let index = 0

let interval = setInterval(run, 4000)

function run() {
    index++
    changeImage()
}

function changeImage () {
    if(index > img.length - 1 ){
        index = 0
    } else if(index < 0){
        index = img.length -1 
    }

    imgs.style.transform = `translateX(${-index * 100}%)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 4000)
}

