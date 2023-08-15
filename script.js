var tl = gsap.timeline()

tl.from("#nav h2",{
       y:-50,
       delay:0.4,
       opacity:0,
       duration:1,
       stragger:0.3,
})
tl.from("#nav2 h2",{
       y:50,
       delay:-1,
       opacity:0,
       duration:1,
       stragger:0.2,
})
tl.from("#main h1",{
       x:-100,
       // delay:0.4,
       opacity:0,
       duration:1,
       stragger:0.4,
})
tl.from("img",{
       scale:0,
       stragger:0.5,
       rotate:30,
       x:200,
       opacity:0,
})
