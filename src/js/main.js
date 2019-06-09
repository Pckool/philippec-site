var navBColor = "#0C0C0C";
var navBarHeight = $('.menu-row1').height();
var viewHeight = $(document).outerHeight();
var pgLvl = {
    'home' : 0,
    'about-me' : 100,
    'projects' : 200,
    'accolades' : 300,
    'contact' : 400
}

$('#nav-open').on('click', () => {
    navOpen();
});

function navOpen(){
    anime({
        targets: '#full-menu',
        backgroundColor: navBColor,
        easing: 'easeInOutQuint',
        top: `0px`,
        begin: function(anim){
            $('#full-menu').toggleClass('hidden-item');
        }
    });
    anime({
        targets: "#nav-bar",
        //bottom: `-${navBarHeight}px`,
        opacity: '1',
        delay: 700,
        easing: 'easeInOutQuad'
    });
}

$('#nav-open').hover(() =>{
    anime({
        targets: '#nav-open-back',
        marginRight: '0.5em',
        easing: 'easeInOutQuad',
        duration: 100
    })
}, () =>{
    anime({
        targets: '#nav-open-back',
        marginRight: '0em',
        easing: 'easeInOutQuad',
        duration: 100
    })
});

$('#nav-close').on('click', () => {
    navClose();
});
function navClose(){
    anime({
        targets: '#full-menu',
        backgroundColor: '#FFF',
        easing: 'easeInOutQuint',
        top: `-${viewHeight}px`,
        delay: 700,
        complete: function(anim){
            $('#full-menu').toggleClass('hidden-item');
        }
    });
    anime({
        targets: "#nav-bar",
        //bottom: `-${navBarHeight}px`,
        opacity: '0',
        easing: 'easeInOutQuad'
    })
}

$('.menu-link').on('click', () => {
    navClose();
});

$('#nav-about-me').on('click', () => {
    $('#content').load('./aboutme.html');
});
$('#nav-skills').on('click', () => {
    $('#content').load('./skills.html');
});
$('#nav-projects').on('click', () => {
    $('#content').load('./projects.html');
});
$('#nav-contact').on('click', () => {
    $('#content').load('./contact.html');
});


$(document).ready(function() {
    $('#content').load('./home.html');
});
