Shery.mouseFollower()

Shery.makeMagnet(".magnet")


Shery.hoverWithMediaCircle(".hvr" /* Element to target.*/, {
    videos: ["./images/0.mp4" , "./images/2.mp4"] 

  });




  let scrollContainer = document.querySelector(".project-box")
  let backBtn = document.getElementById("backBtn")
  let nextBtn = document.getElementById("nextBtn")
  

 
  const scrollWidth = scrollContainer.scrollWidth;
  const containerWidth = scrollContainer.clientWidth;
  
  scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
  });
  
  nextBtn.addEventListener("click", () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += containerWidth;
      
      if (scrollContainer.scrollLeft >= scrollWidth - containerWidth) {
          scrollContainer.scrollLeft = 0;
      }
  });
  
  backBtn.addEventListener("click", () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft -= containerWidth;
      
      if (scrollContainer.scrollLeft < 0) { 
          scrollContainer.scrollLeft = scrollWidth - containerWidth;
      }
  });

  let active = ""

  function black(){
    active = "yes"
    document.querySelector("body").style.backgroundColor = "white"
    document.querySelector(".main-heading").classList.add("active")
    document.querySelector(".hello-text").classList.add("active")
    document.querySelector(".back-heading").classList.add("active")
    document.querySelector("#about-section h2").classList.add("active")
    document.querySelectorAll(".about-container-card").forEach(e=>{
        e.classList.add("active")
    })

    document.querySelector(".contact-btn a").classList.add("active")
    document.querySelector(".text-NEW").classList.add("active")
    document.querySelectorAll(".dot").forEach(e=>{
        e.classList.add("active")
    })
    document.querySelector(".dot.color").classList.add("active")
    document.querySelectorAll(".experience-name p").forEach(e=>{
        e.classList.add("active")
    })

    document.querySelectorAll(".project-card").forEach(e=>{
        e.classList.add("active")
    })
    
    document.querySelectorAll(".project-card h2").forEach(e=>{
        e.classList.add("active")
    })

    document.querySelectorAll(".project-card a").forEach(e=>{
        e.classList.add("active")
    })

    document.querySelector(".text-five").classList.add("active")
    document.querySelector(".five-six").classList.add("active")
    document.querySelectorAll   (".box-contact p").forEach(e=>{
        e.classList.add("active")
    })

    document.querySelectorAll(".box-contact span").forEach(e=>{
        e.classList.add("active")
    })
}

function white(){
    active = ""
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector(".main-heading").classList.remove("active")
    document.querySelector(".hello-text").classList.remove("active")
    document.querySelector(".back-heading").classList.remove("active")
    document.querySelector("#about-section h2").classList.remove("active")
    document.querySelectorAll(".about-container-card").forEach(e=>{
        e.classList.remove("active")
    })
    document.querySelector(".contact-btn a").classList.remove("active")
    
    document.querySelectorAll(".dot").forEach(e=>{
        e.classList.remove("active")
    })
    document.querySelector(".dot.color").classList.remove("active")
    document.querySelectorAll(".experience-name p").forEach(e=>{
        e.classList.remove("active")
    })

    document.querySelectorAll(".project-card").forEach(e=>{
        e.classList.remove("active")
    })

    document.querySelectorAll(".project-card h2").forEach(e=>{
        e.classList.remove("active")
    })

    document.querySelectorAll(".project-card a").forEach(e=>{
        e.classList.remove("active")
    })


    document.querySelectorAll(".box-contact span").forEach(e=>{
        e.classList.remove("active")
    })



  }

  document.querySelector(".theme-btn").addEventListener("click",()=>{
   
    if (active === ""){
        black()  
    }

    else{
        white() 
    }
  })







  document.querySelector(".btn-submit").addEventListener("click",()=>{
    














  })


