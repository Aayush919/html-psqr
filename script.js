// locomotive allow gsap to run
function init() {
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
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

}

init();



//timeline for opactiy 0 to 1 and 1 to 0 of contact and psquare company
// const navTimeline = gsap.timeline();

// navTimeline.to(".nav .pc", {
//   opacity: 0,
//   duration: 2,
//   scrollTrigger: {
//     scrub: 2,
//     trigger: ".nav",
//     scroller: "#main",
//     start: "400vh 40vh",
//     markers:true,
//     end: "59% top"
//   }
// })
//   .to(".nav .contact", {
//     opacity: 1,
//     duration: 2,
//     scrollTrigger: {
//       scrub: 3,
//       trigger: ".nav",
//       scroller: "#main",
//       start: "400% 40%",
//       end: "70% top"
//     }
//   }, "-=2");


// navTimeline.play();

// nav shadow animation
gsap.to(".nav", {
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.75)",
  scrollTrigger: {
    scrub: 1,
    trigger: ".nav",
    scroller: "#main",
    start: "200vh 190vh",
    end: "300vh 100vh",
  
  }
});



// //PIN success animation
gsap.to(".hero h2", {
  textShadow: "0px 3px 12px #00000080",
  color: '#FAF2FF',
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    pin: true,
    trigger: ".hero h2",
    scroller: "#main",
    scrub: true,
    start: '184vh 407vh',
    end: "20vh top"
  }
});

// move animation simplyfying
gsap.to(".hero h1", {
  textShadow: "0px 3px 12px #00000080",
  color: '#FAF2FF',
  top: '252vh',
  ease: "power2.out",
  duration:2, // Set the duration for the first animation
  scrollTrigger: {
    trigger: ".hero",
    scroller: "#main",
    scrub: true,
    start: '1vh top',
    end: "1885vh top",
 
  }
});


gsap.to(".page2 h1", {
  top: '20vh',
  ease: "power2.out",
  duration: '2', // Set the duration for the first animation
  scrollTrigger: {
    trigger: ".hero",
    scroller: "#main",
    scrub: true,
    start: '1vh 20vh',
    end: "1530vh 10vh",
   
  }
});



// gsap.to(".hero h1", {
//   scale: 0.3,
//   x: "-70%", 
//   textShadow: "0",
//   fontWeight:'200',
//   duration: 30,
//   scrollTrigger: {
//     scrub: 2,
//     trigger: ".page2",
//     scroller: "#main",
//     start: "250vh 400vh", 
//     endTrigger: ".hero h1", 
//     end: "1470vh 400vh", 

//   },
// });
















//whithe to light brown 
//simplyfying data scroll in minus 
//nav bar tranparent 
//left and font wigth and font size decrese 
//one by one opactiy
//first set the how wordl one by one 
//afte that does the business
//grid 



