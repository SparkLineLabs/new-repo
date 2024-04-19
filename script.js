function locomotiveanim(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
locomotiveanim();


function navAnimation(){
    var nav = document.querySelector("nav");
nav.addEventListener("mouseenter", function(){
    let tl = gsap.timeline()

    tl.to("#nav-bottom", {
        height:"21vh"
    })
    tl.to(".nav-part2 h5",{
        display:"block"
    })
    tl.to(".nav-part2 h5 span", {
        y:0,
        stagger:{
            amount:0.6
        }
    })
})
nav.addEventListener("mouseleave", function(){
    let tl = gsap.timeline()
    tl.to(".nav-part2 h5 span", {
        y:25,
        stagger:{
            amount:0.2
        }
    })
    tl.to(".nav-part2 h5",{
        display:"none",
        duration:0.1
    })
    tl.to("#nav-bottom", {
        height:0,
        duration:0.2
    })
})
}
navAnimation();

function scrollanim(){
    var relem = document.querySelectorAll(".right-elem")

relem.forEach(function(elem){
   elem.addEventListener("mouseenter", function(){
      gsap.to(elem.childNodes[3], {
        opacity:1,
        scale:1
      })
   })
   elem.addEventListener("mouseleave", function(){
      gsap.to(elem.childNodes[3], {
        opacity:0,
        scale:0
      })
   })
   elem.addEventListener("mousemove", function(dets){
      gsap.to(elem.childNodes[3],{
        x:dets.x - elem.getBoundingClientRect().x - 90,
        y:dets.y - elem.getBoundingClientRect().y - 210
      })
   })
})
}
scrollanim();

function videoanim(){
    var page3cntr = document.querySelector(".page3-center")
var video = document.querySelector("#page3 video")

page3cntr.addEventListener("click", function(){
    video.play()
    gsap.to(video, {
        transform: "scaleX(1) scaleY(1)",
        opacity:1,
        borderRadius:0
    })
})
video.addEventListener("click", function(){
    video.pause()
    gsap.to(video, {
        transform: "scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px"
    })
})
}
videoanim();

function videoplay(){
    var  section = document.querySelectorAll(".sec-right")
    section.forEach(function(elem){
        elem.addEventListener("mouseenter", function(){
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function(){
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })
}
videoplay();

function page6anim() {
    gsap.from("#btm6-part2 h4",{
    x:0,
    duration:1,
    scrollTrigger:{
        trigger:"#btm6-part2",
        scroller:"#main",
        start:"top 80%",
        end:"top 10%",
        scrub:true
    }
})
}
page6anim();

function loadanim(){
    var tl = gsap.timeline()
    tl.from("#page1",{
        opacity:0,
        duration:0.2,
        delay:0.2
    })
    tl.from("#page1",{
      transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
      duration:2,
      borderRadius:"80%",
      ease:"expo.out"
    })
    tl.from("nav",{
        opacity:0
    })
    tl.from("#page1 h1, #page1 p, #page1 div",{
        opacity:0,
        duration:0.5,
        stagger:0.2
    })
}
loadanim();


var menu = document.querySelector(".nav-elem h4, h5");
var othr = document.querySelector(".nav-item");
othr.addEventListener("click", function(){
    othr.style.display = "block";
})
