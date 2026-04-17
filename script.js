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

function teaAnimation(){
     
document.querySelectorAll(".listelem")
.forEach(function(el){
     el.addEventListener("mousemove", function(dets){
        gsap.to(this.querySelector(".picture"), {opacity: 1, x:gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX) ,ease: Power4, duration: .5})
     })
     el.addEventListener("mouseleave", function(dets){
       gsap.to(this.querySelector(".picture"), {opacity: 0, ease: Power4, duration: .5})

     })


})
}

function paraAnimation(){
     var clutter = "";
document.querySelector(".textpara")
.textContent.split("")
.forEach(function(e){
  if(e ===" ") clutter += `<span>&nbsp;</span>`
  clutter += `<span>${e}</span>`

})
document.querySelector(".textpara").innerHTML = clutter;

gsap.set(".textpara span", {opacity: .1})
gsap.to(".textpara span",{
     scrollTrigger: {
          trigger: ".para",
          start: "top 60%",
          end: "button 90%",
          scrub: 1,
        
     },
     opacity: 1,
     stagger: .03,
     ease: Power4
})
}

paraAnimation();
teaAnimation();
realpageAnimation();
homepageAnimation();