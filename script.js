//locomotive allow gsap to run
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
init()



//timeline for opactiy 0 to 1 and 1 to 0 of contact and psquare company
const navTimeline = gsap.timeline();

navTimeline.to(".nav .pc", {
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    scrub: 2,
    trigger: ".nav",
    scroller: "#main",
    start: "400% 40%",
    end: "59% top"
  }
})
  .to(".nav .contact", {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      scrub: 3,
      trigger: ".nav",
      scroller: "#main",
      start: "400% 40%",
      end: "70% top"
    }
  }, "-=2");


navTimeline.play();

//nav shadow animation
gsap.to(".nav", {
  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.75)",
  scrollTrigger: {
    scrub: 1,
    trigger: ".nav", // Corrected selector
    scroller: "#main",
    start: "55% top",
    end: "300% top"
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
    start: '200% 74%',
    end: "10% top"
  }
});

//move animation simplyfying
gsap.to(".hero h1", {
  textShadow: "0px 3px 12px #00000080",
  color: '#FAF2FF',
  top: '99%',
  duration: 5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".hero h1",
    scroller: "#main",
    scrub: true,
    start: '100% 42%',
    end: "1150% top"

  }
});










