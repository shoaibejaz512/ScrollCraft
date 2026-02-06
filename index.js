gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
});


document.addEventListener("DOMContentLoaded",() => {
  gsap.to(".sticky",{
    scrollTrigger:{
      trigger:".sticky",
      start:"top top",
      end:() => {
        "+=" + (window.innerHeight + document.querySelector(".website-content").offsetHeight * .5);
      },
      scrub:1,
      pin:true,
    },
    y:250,
    scale:.75,
    rotation:-15,
    ease:"power3.out"
  })
})



gsap.fromTo(".website-content",{
  x:-100,
  scale:.3,
  rotation:15,
},
  {
    scrollTrigger:{
      trigger:".website-content",
      start:"top 200%",
      end:"top 50%",
      scrub:1,
    },
    x:0,
    scale:1,
    rotation:0,
    ease:"power3.out"
  }
)


const wrapper = document.querySelector(".tracker");
const emoji = document.querySelector(".emoji");
const emoji_face = document.querySelector(".emoji-face");


const moveEvent = (e) => {
  const wrapperRect = wrapper.getBoundingClientRect();

  const relX =e.clientX -  (wrapperRect.left + wrapperRect.width /2);
  const relY = e.clientY - (wrapperRect.top + wrapperRect.height/2);

  const emojiMaxDisplacement = 50;
  const emojiFaceMaxDisplacement = 75;

  const emojiDisplacementX = (relX / wrapperRect.width) * emojiMaxDisplacement;
  const emojiDisplacementY = (relY / wrapperRect.height) + emojiMaxDisplacement;

  const emojiFaceDisplacementX = (relX / wrapperRect.width) * emojiFaceMaxDisplacement
  const emojiFaceDisplacementY = (relY / wrapperRect.height) * emojiFaceMaxDisplacement

  gsap.to(emoji,{
    x:emojiDisplacementX,
    y:emojiDisplacementY,
    duration:.35,
    ease:"power3.out"
  })

  gsap.to(emoji_face,{
    x:emojiFaceDisplacementX,
    y:emojiFaceDisplacementY,
    duration:.35,
    ease:"power3.out"
  })
}

const leaveEvent = (e) => {
  gsap.to([emoji,emoji_face],{
    x:0,
    y:0,
    duration:.35,
    ease:"power3.out"
  })
}

wrapper.addEventListener("mousemove",moveEvent);
wrapper.addEventListener("mouseleave",leaveEvent);