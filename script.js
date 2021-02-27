//declara as constantes
const btn1 = document.getElementById("section1-movedisplay-btn1"),
        btn2 = document.getElementById("section1-movedisplay-btn2"),
        vrImg = document.querySelector(".vr-img"),
        circ1 = document.getElementById("circ1"),
        circ2 = document.getElementById("circ2"),
        circ3 = document.getElementById("circ3"),
        array = ['./img/starvr.png', './img/vrglass2.webp','./img/vr glass.webp']

//contador de clicks
let click = 0;


const setImage = () => {
    if(click > 2){
        click = 0
    }
    vrImg.src = array[click]
    click++
    clickVerify(click)
}

const nextImage = () => {
    setInterval(()=>{
        setImage()
    }, 2000)
}


btn1.addEventListener('click', e => {
    setImage()
})

btn2.addEventListener('click', e => {
    setImage()
})

const clickVerify = (click) => {
    if(click == 1){
        circ1.style.backgroundColor = 'rgb(211, 205, 205)'
        circ2.style.backgroundColor = 'rgb(59, 59, 59)'
        circ3.style.backgroundColor = 'rgb(211, 205, 205)'
    }else if(click == 2){
        circ1.style.backgroundColor = 'rgb(211, 205, 205)'
        circ2.style.backgroundColor = 'rgb(211, 205, 205)'
        circ3.style.backgroundColor = 'rgb(59, 59, 59)'
    } else{
        circ1.style.backgroundColor = 'rgb(59, 59, 59)'
        circ2.style.backgroundColor = 'rgb(211, 205, 205)'
        circ3.style.backgroundColor = 'rgb(211, 205, 205)'
    }
}   

window.addEventListener("load", nextImage)

