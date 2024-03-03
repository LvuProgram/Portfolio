gsap.to(".nav",{
    backgroundColor: "rgba(0, 0, 0,0.5)",
    backdropFilter: "blur(10px)",
    duration: 0.5,
    height : "100px",
    scrollTrigger : {
        trigger : ".nav",
        scroll : "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
    
})
gsap.to(".main",{
    backgroundColor: "#000",
    scrollTrigger : {
        trigger : '.main',
        scroller : "body",
        start: "top -50%",
        end: "top -100%",
        scrub: 2,
    }
    
})




gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start: "top 65%",
        end:"top 58%",
        scrub:2,

    }

})


gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start: "top 75%",
        end:"top 65%",
        scrub:2,

    }

})
gsap.from(".page-3,.right,.left",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".page-3",
        scroller:"body",
        start: "top 75%",
        end:"top 65%",
        scrub:2,

    }

})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        marker:true,
        start:"top 50%",
        end:"top 45",
        scrub:2,
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        marker:true,
        start:"top 70%",
        end:"top 50%",
        scrub:4,
    }
})

gsap.from(".page5 h1",{
    y:50,
    scrollTrigger:{
        trigger:".page5 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:4,
    }
})

//cursor


var cursor = document.querySelector(".cursor");
var cursorBlur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x+ 30 +"px"
    cursor.style.top = dets.y+"px"
    cursorBlur.style.left = dets.x - 150 +"px"
    cursorBlur.style.top = dets.y - 150 +"px"
})



var allnavitem = document.querySelectorAll(".nav h4");
allnavitem.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale = 3;
        cursor.style.border = "0.5px solid white";
        cursor.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave",function(){
        cursor.style.scale = 1;
        cursor.style.border = "0px solid white";
        cursor.style.backgroundColor = "#95C11E"
    })


})

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

function handleItemClick(item) {
    const menu = document.querySelector('.menu');
    menu.classList.remove('show');

    // Disable the menu toggle checkbox
    document.getElementById('click').checked = false;

    // Navigate to the specified link
    const link = item.getAttribute('href');
    window.location.href = link;
}









