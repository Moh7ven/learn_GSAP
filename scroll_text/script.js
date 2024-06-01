let selection = Splitting();
console.log(selection);

gsap.registerPlugin(ScrollTrigger);

gsap.from(selection[0].chars, {
  y: 100,
  scaleY: 0,
  opacity: 0,
  rotation: 90,
  color: "rgb(13,13,13)",
  stagger: 0.05, //Créer un temps entre chaque caractère
  scrollTrigger: {
    trigger: ".text-reveal",
    start: "top 50%",
    end: "bottom 50%",
    // markers: true,
    scrub: true,
  },
});
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
