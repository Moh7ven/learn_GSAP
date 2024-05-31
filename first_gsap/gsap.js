/* gsap.to(".circle", {
  y: -100,
  backgroundColor: "blue",
  duration: 1,
  //   delay: 2,
  //   ease: "bounce",
  //repeat: -1, //repeats 3fois et repeat: -1= infini,
  //yoyo: true,
  stagger: { each: 0.2, repeat: -1, yoyo: true, from: "center" }, //Pour définir le temps entre chaque element, from: center pour définir depuis le centre
}); */

const timeline = gsap.timeline({ repeat: -1, yoyo: true });

timeline.to(".bob", { x: 100, duration: 1 });
timeline.to(".bob", { y: -250, duration: 1 });
timeline.to(".bob", { x: 250, duration: 1 });
