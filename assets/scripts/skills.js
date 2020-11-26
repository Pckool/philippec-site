import anime from 'animejs'
function image1(){
    anime({
        targets: '#philippe-pic',
        duration: 1500,
        easing: 'easeOutQuart',
        opacity: [0, 1],
        delay: 1500,
        paddingLeft: ['1000px', '0px'],
        filter: ["blur(15px)", "blur(0px)"]
        // complete: showPerc
    })
}
image1()

const scrollThing = anime({
    targets: '#scroll-down',
    duration: 300,
    easing: 'easeOutQuart',
    opacity: [0, 1],
    delay: 2500,
    top: ['45%', '50%'],
    autoplay: true
})

const scrollAnimation_sideText = anime({
    targets: '#scroll-down', 
    filter: ["blur(0px)", "blur(2px)"],
    opacity: [1, 0],
    marginRight: ['2em', '0em'],
    // easing: 'easeOutExpo',
    delay: 50,
    duration: 300,
    autoplay: false
})

const skills_animate = anime({
    targets: '.skills-cont .skill', 
    marginRight: ["7em", "0em"],
    opacity: [ 0, 1],
    delay: anime.stagger(400, {start: 3500}),
    easing: 'easeOutExpo',
    duration: 300,
    elasticity: 23,
    autoplay: false
})

const scrollAnimation = anime({
    targets: '#content', 
    color: 'rgba(240, 240, 240, 1)',
    background: 'rgba(12, 12, 12, 1)',
    easing: 'easeOutExpo',
    delay: 250,
    duration: 400,
    autoplay: false,
})

$('#content').on('wheel', function(e) {
    var docHeight = $('#content').outerHeight() ;

    var scrollTop = $('#content').scrollTop();

    var scrollPercent = (scrollTop) / (docHeight);
    
    var overpass = $('#about-me-1').outerHeight();
    var percent = scrollTop / overpass;
    
    var rounded = Math.round(percent*100);

    // console.log((rounded/100) * scrollAnimation.duration);
    scrollAnimation.seek((rounded/100) * scrollAnimation.duration);
    scrollAnimation_sideText.seek((rounded/100) * scrollAnimation_sideText.duration);
    
    skills_animate.seek(skills_animate.duration * (rounded / 100));

    if (e.deltaY < 0) {
        // console.log('scrolling up');
    }
    if (e.deltaY > 0) {
        // console.log('scrolling down');   
        
    }
})

$('#content').on('touchmove', function(e) {
    let docHeight = $('#content').outerHeight() ;

    let scrollTop = $('#content').scrollTop();
    
    

    let scrollPercent = (scrollTop) / (docHeight)
    
    let overpass = $('#about-me-1').outerHeight()
    let percent = scrollTop / overpass
    
    let rounded = Math.round(percent * 100)

    // console.log((rounded/100) * scrollAnimation.duration);
    scrollAnimation.seek((rounded / 100) * scrollAnimation.duration)
    scrollAnimation_sideText.seek((rounded / 100) * scrollAnimation_sideText.duration)
    
    skills_animate.seek(skills_animate.duration * (rounded / 100))
})