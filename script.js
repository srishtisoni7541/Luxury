gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  multiplier:.5,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



function loaderAnimation(){
var tl=gsap.timeline();
tl.to(".circle , img",{
opacity:1,
duration:2,
})
    tl.to(".loader",{
        y:2500,
        duration:2,
        // delay:1,
        ease:"expo.Inout",
    })
    .from(".img-container .img",{
      scale:0,
      duration:.5,
      delay:-2,
      ease:"expo.Inout",
    },"elem1")
    .from(".overlay",{
      y:-500,
      duration:1,
      delay:-2,
      ease:"expo.Inout"
    },"elem1")
    .to(".page1 #h3",{
      opacity:1,
      duration:.5,
      delay:-1, 
    })
}
loaderAnimation();



function page1Animation(){
    var tl1=gsap.timeline({
        scrollTrigger:{
            trigger:".overlay",
            scroller:".main",
            pin:true,
            scrub:true,
        }
    })
    tl1.to(".img-container video",{
      y:-100,
      duration:1,
    })
    .to('.overlay',{
      backgroundColor:"#000",
    },"elem")
    tl1.to(".img-container video",{
        // y:-100,
        // left:"-30%",
        width:"100%",
        duration:2,
    },"elem")
    .to(".overlay h4",{
      y:-200,
      duration:1,
      
    },"elem")
    .to(".overlay h2",{
      y:-400,
      duration:1
    },"elem")
    .to(".img-containerleft",{
        x:-500,
        duration:2,
    },"elem")
    .to(".img-containerright",{
        x:500,
        duration:2,
    },"elem")
  document.addEventListener("mousemove",function(dets){
    gsap.to(".page1cursor",{
      y:dets.y-10,
      x:dets.x-10,
    })
  })
}
page1Animation();



function page2Animation(){
  document.addEventListener("mousemove",function(dets){
    gsap.to(".page2cursor",{
      y:dets.y-10,
      x:dets.x-10,
    })
  })
  var play=document.querySelector(".video .play");
  var flag=0;
  var img=document.querySelector(".video img");
  var video=document.querySelector(".video video");
  var h2=document.querySelector(" .stop h2");
  play.addEventListener("click",function(){
    if(flag==0){
      img.style.opacity=0;
      video.play();
      h2.innerHTML="stop";
      
        flag=1;

    }
    else{
      img.style.opacity=1;
      video.pause();
      h2.innerHTML="play";
      
        flag=0;
    }
  })
}
page2Animation()


function page3Animation(){
  document.addEventListener("mousemove",function(dets){
    gsap.to(".page3cursor",{
      y:dets.y-10,
      x:dets.x-10,
    })
  })
  var playcircle=document.querySelector("#playcircle1");
  var overlay1=document.querySelector(".elem #overlay1");
  var icon=document.querySelector(".elem #overlay1 #icon1");
  playcircle.addEventListener("click",function(){
    gsap.to(".elem #overlay1",{
      y:450,
      duration:.2,
      zIndex:9,
    })
  })
  icon.addEventListener("click",function(){
    gsap.to(".elem #overlay1",{
      y:1000,
      duration:.5,
      ease:"expo.Inout",
    })
  })




  var playcircle2=document.querySelector("#playcircle2");
  var overlay2=document.querySelector(".elem #overlay2");
  var icon2=document.querySelector(".elem #overlay2 #icon2");
  playcircle2.addEventListener("click",function(){
    gsap.to(".elem #overlay2",{
      y:450,
      duration:.2,
      zIndex:9,
    })
  })
  icon2.addEventListener("click",function(){
    gsap.to(".elem #overlay2",{
      y:1000,
      duration:.5,
      ease:"expo.Inout",
    })
  })




  
  var playcircle3=document.querySelector("#playcircle3");
  var overlay3=document.querySelector(".elem #overlay3");
  var icon3=document.querySelector(".elem #overlay3 #icon3");
  playcircle3.addEventListener("click",function(){
    gsap.to(".elem #overlay3",{
      y:450,
      duration:.2,
      zIndex:9,
    })
  })
  icon3.addEventListener("click",function(){
    gsap.to(".elem #overlay3",{
      y:1000,
      duration:.5,
      ease:"expo.Inout",
      opacity:0
    })
  })
}
page3Animation();


function page4Animation(){
  var tl=gsap.timeline({
    scrollTrigger:{
      trigger:".page4",
      scroller:".main",
      scrub:true,
    }

  })
  tl.to(".page4overlay",{
    y:-100,
    duration:.5,
    
  },"Elem")
  .to(".img-container .elem1",{
    y:-200,
    duration:.7,
    
  },"Elem")

  
  
}

page4Animation();


function page5Animation(){
  var tl5=gsap.timeline();
  tl5.to(".container",{
    x:-1000,
    duration:5,
    scrollTrigger:{
      trigger:".page5",
      scroller:".main",
      scrub:true,
    }
    // delay:5,

  },"elem5")
  tl5.to("#container1",{
    x:1000,
    duration:5,
    scrollTrigger:{
      trigger:".page5",
      scroller:".main",
      scrub:true,
    }
  },"elem5")
  .to(".page5img-container",{
  x:-60,
  duration:1,
  scrollTrigger:{
    trigger:".page5img-container",
    scroller:".main",
    scrub:true,
  }
  })

}
page5Animation();