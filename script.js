let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn")
let nextBtn = document.getElementById("nextBtn")
let wishlistContainer = document.querySelectorAll('.wishlist_container')
let wishlistBtn = [...document.querySelectorAll('.wishlist')]

scrollContainer.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = 'auto' ;
});

nextBtn.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior = 'smooth' ;
    scrollContainer.scrollLeft += 900 ;
})

backBtn.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior = 'smooth' ;
    scrollContainer.scrollLeft -= 900 ;
})

// wishlistBtn.addEventListener('click', ()=>{
//     console.log("hello")
//     if(wishlistBtn.style.color === "white"){
//      wishlistContainer.style.backgroundColor = 'white'
//     wishlistBtn.style.color = "#e85992"
//     }
//     else{
//         wishlistContainer.style.backgroundColor = '#e85992'
//     wishlistBtn.style.color = "white"
//     }
// })

// wishlistBtn.forEach((wishlist)=>{
//     wishlistBtn.addEventListener('click', ()=>{
//             console.log("hello")
           
//          wishlist.style.color = "#e85992"
            
            
//          })
// })

var indicator_btn = document.getElementsByClassName("indicator_btn")
var slide = document.getElementById("slide")

indicator_btn[0].onclick = function(){
    console.log("hello")
    slide.style.transform = "translateX(0px)"
    for( i=0 ; i<4; i++){
        indicator_btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

indicator_btn[1].onclick = function(){
    slide.style.transform = "translateX(-800px)"
    for( i=0 ; i<4; i++){
        indicator_btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

indicator_btn[2].onclick = function(){
    slide.style.transform = "translateX(-1600px)"
    for( i=0 ; i<4; i++){
        indicator_btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

indicator_btn[3].onclick = function(){
    slide.style.transform = "translateX(-2400px)"
    for( i=0 ; i<4; i++){
        indicator_btn[i].classList.remove("active");
    }
    this.classList.add("active");
}