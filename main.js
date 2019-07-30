// nav menu links to upper case

const navLinks = document.querySelectorAll('nav ul li a, button a');
navLinks.forEach(link=>{
    link.innerHTML = link.innerHTML.toUpperCase()
})

// progress bar animation

const progressBars = document.querySelectorAll('.bar div');

document.addEventListener('scroll',()=>{
        const y = window.scrollY;
        
        if (y > 750){
            progressBars.forEach(bar=>{
                bar.classList.add("animate")
            })
        }
 });

//  testemonials slider

const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.fa-chevron-left');
const rightArrow = document.querySelector('.fa-chevron-right');
const dots = document.querySelectorAll('.control ul li')
const dotsParentElement = document.querySelector('.control ul')

let sectionIndex = 0;

const setIndex = () =>{
    document.querySelector('.control .selected').classList.remove('selected')
    dotsParentElement.children[sectionIndex].classList.add('selected')
    slider.style.transform = `translate(${sectionIndex * -33.33}%)`
}

rightArrow.addEventListener('click',()=>{
    sectionIndex = (sectionIndex < 2) ? sectionIndex + 1: 2;
    setIndex()
})

leftArrow.addEventListener('click',()=>{
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1: 0;
    setIndex()
})

dots.forEach((dot, index)=>{
    dot.addEventListener('click', ()=>{
        sectionIndex = index;
        document.querySelector('.control .selected').classList.remove('selected')
        dot.classList.add('selected')
        slider.style.transform = `translate(${sectionIndex * -33.33}%)`
    })
})


document.addEventListener('scroll',()=>{
    let y = window.scrollY;
    if( y > 2300 && y < 2350){
        sectionIndex = (sectionIndex < 1) ? sectionIndex + 1: 1;
        setIndex()
    }
})


// fixed navigation 

const nav = document.querySelector('nav');
document.addEventListener('scroll', ()=>{
    let y = window.scrollY;
    if( y > 50){
        nav.classList.add('navScrolled')
    } else {
        nav.classList.remove('navScrolled')
    }
})

// scroll to specufic section

function scrollEvent(e){
    e.preventDefault()
    const targetID = e.currentTarget.getAttribute('href');

const targetPosition = document.querySelector(targetID).offsetTop-140;
const startPosition = window.pageYOffset;
const distance = targetPosition - startPosition;
const duration = 900;
let start = null;

function step(timestamp) {
  if (!start) start = timestamp;
  const progress = timestamp - start;
    window.scrollTo(0, ease(progress, startPosition, distance, duration));
  if (progress < duration) {
    window.requestAnimationFrame(step);
  }
}
window.requestAnimationFrame(step);
}

    
function ease(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};


// instead of forEach and arrow functions we will use the for loop to support Internet Explorer

for (i=0; i<navLinks.length; i++){
    navLinks[i].addEventListener('click', function(e){
        scrollEvent(e);
    })
}


// burger menu control
const burger = document.querySelector('.burger')
const ul = document.querySelector('nav ul')

burger.addEventListener('click', function(){
    ul.classList.toggle('active');
    burger.classList.toggle('clicked')
})

navLinks.forEach(link=>{
    link.addEventListener('click', function(){
        ul.classList.remove('active')
        burger.classList.remove('clicked')
        
    })
})