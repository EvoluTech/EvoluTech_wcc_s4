var a1 = document.querySelector(".avatar1");
var a2 = document.querySelector(".avatar2");
var b0= document.querySelector('.btn-appel');
var a3 = document.querySelector(".avt-img");
var a4 = document.querySelector(".log");

a1.addEventListener("mouseleave" , () =>{
    a1.style.animation="resetXD 0.3s ease-out forwards ";
})

a1.addEventListener("mouseover" , () =>{
    a1.style.animation="allXd2 0.5s ease-in-out forwards";
})

a2.addEventListener("mouseleave" , () =>{
    a2.style.animation="resetXD 0.3s ease-out forwards ";
})

a2.addEventListener("mouseover" , () =>{
    a2.style.animation="allXd2 0.5s ease-in-out  forwards";
})

a3.addEventListener("mouseleave" , () =>{
    a3.style.animation="resetXD 0.3s ease-out forwards ";
})

a3.addEventListener("mouseover" , () =>{
    a3.style.animation="allXd2 0.5s ease-in-out forwards";
})

a4.addEventListener("mouseleave" , () =>{
    a4.style.animation="resetXD2 0.3s ease-out forwards ";
})

a4.addEventListener("mouseover" , () =>{
    a4.style.animation="allXd4 0.4s ease-in-out forwards  , anim-neon2  0.4s ease-out ";
})

b0.addEventListener("mouseleave" , () =>{
    b0.style.animation="resetXD 0.3s ease-out forwards ";
})

b0.addEventListener("mouseover" , () =>{
    b0.style.animation="allXd3 0.4s ease-in-out  forwards";
})


/*back moving xD */

document.addEventListener("mousemove" , backmove);
function backmove(e){
    this.querySelectorAll(".layerx").forEach(layer => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX*speed)/1000;
        const y = (window.innerWidth - e.pageX*speed)/1000;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        
        // cubexD.style.transform = `translateX(${x}px) translateY(${y}px)`;

    });

}

/*fin back moving xD */