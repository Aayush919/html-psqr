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



//PIN success animation
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
    start: '18vh 407vh',
    end: "-40vh top",
  }
});


gsap.to(".page2 h1", {
  top: '16.8vh',
  fontFamily:"'montserrat', 'sans-serif'",
fontWeight: 500,
fontStyle: 'normal',
  scrollTrigger: {
    trigger: ".hero",
    scroller: "#main",
    scrub: true,
    start: '1vh 20vh',
    end: "1900vh 10vh",
  }
});


const s = gsap.timeline();

s.to(".hero h1", {
  textShadow: "0px 3px 12px #00000080",
  color: '#FAF2FF',
  top: '245vh',
  scrollTrigger: {
    trigger: ".hero",
    scroller: "#main",
    scrub: true,
    start: '1vh top',
    end: "top -2270vh",
  
    // markers:true,
  

  }
})
.to(".page2 h1", {
left:'-5vh',
scale:0.4,
fontWeight:300,
  scrollTrigger: {
    trigger: ".page2",
    scroller: "#main",
    scrub: 1,
    start: '1vh 290vh',
    end: "1vh 100vh",

  }
})
// .to(".page2 h1",{
//   scrollTrigger: {
//     trigger: ".page2",
//     scroller: "#main",
//     scrub: true,
//     markers:true,
//     start: '1vh 1vh',
//     end: "1vh -10000vh",
//     pin:true,
//   }
// })

const t=gsap.timeline();

t.from(".page2 .bottom-text h2 .one", {
  x: 600, // Example value for translation on the X-axis
  delay: 3,
  duration:10,
  opacity:0,
// transform:'translateX(2000px)'
  
})
.from(".page2 .bottom-text h2 .two",{
  x: 610, // Example value for translation on the X-axis
  delay:-8,
  duration:10,
  opacity:0,
// transform:'translateX(1600px)'
})
.from(".page2 .bottom-text h2 .three",{
  x: 620, // Example value for translation on the X-axis
  duration:10,
  delay:-8,
  opacity:0,
// transform:'translateX(2000px)'
})
.from(".page2 .bottom-text h2 .four",{
  x: 630, // Example value for translation on the X-axis
  duration:10,
  delay:-8,
  opacity:0,

})
.from(".page2 .bottom-text h2 .five",{
  x: 640, // Example value for translation on the X-axis
  duration:10,
  delay:-8,
  opacity:0,

}).from(".page2 .bottom-text h2 .six",{
  x: 660, // Example value for translation on the X-axis
  duration:10,
  delay:-8,
  opacity:0,

})
.from(".page2 .bottom-text h2 .seven",{
  x: 680, // Example value for translation on the X-axis
  duration:10,
  delay:-8,
  opacity:0,

})
.from(".page2 .bottom-text h2 .eight",{
  x: 700, // Example value for translation on the X-axis
  duration:10,
  delay:-8,
  opacity:0,

}).from(".page2 .bottom-text h2 .nine",{
  x: 720, // Example value for translation on the X-axis
  duration:10,
  delay:-8,
  opacity:0,

}).from(".page2 .bottom-text h2 .ten",{
  x: 740, // Example value for translation on the X-axis
  duration:10,
  delay:-8,
  opacity:0,

}).from(".page2 .bottom-text h2 .eleven",{
  x: 760, // Example value for translation on the X-axis
  duration:10,
  delay:-8,
  opacity:0,
})








//span tag from 