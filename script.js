function homepageAnimation(){
     gsap.set(".slidesm", {scale: 5})

var tl = gsap.timeline({
     scrollTrigger: {
          trigger:".home",
          start:"top top",
          end: "bottom bottom",
          scrub: 3
     }
})


tl
.to(".vdodiv",{
     '--clip': "0%",
     ease: Power2,  
}, 'a') 
.to(".slidesm", {
     scale: 1,
     ease: Power2,  
}, 'a') 

.to(".slidesm", {
     scale: 1,
     ease: Power2,  
}, 'a') 

.to(".lft",{
     xPercent: -10,
     stagger: .03,
     ease: Power4
},'b')

.to(".rgt",{
     xPercent: 10,
     stagger: .03,
     ease: Power4
},'b')
}


function realpageAnimation(){
gsap.to(".slide",{
     scrollTrigger: {
          trigger: ".real",
          start: "top top",
          end: "bottom bottom",
          scrub: 2
     },
     xPercent: -200,
     ease: Power4
});
}

document.querySelectoreAll(".listelem")
.forEach(function(e){
     el.addEventListener("mousemove", function(dets){
        gsap.to(this.querySelector(".picture"),{opacity: 1});
     })
     el.addEventListener("mouseleave", function(dets){})


})

realpageAnimation();
homepageAnimation();