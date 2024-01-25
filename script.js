function init(){
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
init()




//nav shadow animation

gsap.to(".nav",{
    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.75)", 
    scrollTrigger:{
        scrub:1,
        trigger:"nav",
        scroller:"#main",
        start:"120% bottom",

        end:"65% top"
    }
})

//nav PSQUARE COMPANY Opacity 1 to 0 animation
gsap.to(".nav .pc",{
   opacity:0, 
    scrollTrigger:{
        scrub:2,
        trigger:"nav",
        scroller:"#main",
        start:"120% bottom",
    
        end:"55% top"
    }
})


//nav CONTACT US Opacity 0 to 1 animation
gsap.to(".nav .contact",{
    opacity:1,
  
     scrollTrigger:{
         scrub:2,
         trigger:"nav",
         scroller:"#main",
         start:"155% bottom",
        
         end:"110% top"
     }
 })


 //PIN SIMPLIFYING  animation
 gsap.to(".text h1", {
    textShadow: "0px 3px 12px #00000080",
    color: '#FAF2FF',
    duration: 2, 
    ease: "power2.out", 
    scrollTrigger: {
      pin: true,
      trigger: ".text h1",
      scroller: "#main",

      scrub: true,
      start: '200% 102%',
    }
  });
  


  //Shadow and opcatiy animation success
  
 gsap.to(".hero h2", {
    textShadow: "0px 3px 12px #00000080",
    color: '#FAF2FF',
    duration: 2, 
    ease: "power2.out", 
    opacity:0,
    scrollTrigger: {
      trigger: ".hero h2",
      scroller: "#main",
      scrub: true,
      start: '200% 70%',
      end:"50% 20%"
    }
  });
  
 



