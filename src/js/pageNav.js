$('.go-down').on('click', () => {
    console.log('go down...');
    pageTransition('./aboutme.html');
});
$('.go-up').on('click', () => {
    console.log('go up...');
    pageTransition('./home.html');
});
///////////////
$('.go-to-aboutme').on('click', () => {
    console.log('go down...');
    pageTransition('./aboutme.html');
});
$('.go-to-skills').on('click', () => {
    console.log('go up...');
    pageTransition('./skills.html');
});
$('.go-to-projects').on('click', () => {
    console.log('go down...');
    pageTransition('./projects.html');
});
$('.go-to-home').on('click', () => {
    console.log('go up...');
    pageTransition('./home.html');
});

function pageTransition(pageURL){
    anime({
        targets: '#full-menu',
        backgroundColor: navBColor,
        easing: 'easeInOutQuint',
        top: `0px`,
        begin: function() {
            console.log('transition started...');
            $('#full-menu').toggleClass('hidden-item');

        },
        complete: function() {
            console.log('transition completed');
            $('#content').load(pageURL);
            anime({
                targets: '#full-menu',
                backgroundColor: '#FFF',
                easing: 'easeInOutQuint',
                top: `-${viewHeight}px`,
                complete: function(anim){
                    console.log('Page Transition Complete...');
                    $('#full-menu').toggleClass('hidden-item');

                }
            });
        }
    });
}

titlesAnim();
cont1Anim();

function titlesAnim(){
    anime({
        targets: '.title-card',
        duration: 400,
        easing: 'easeOutQuart',
        opacity: 1,
        delay: 1000,
        paddingRight: '0px'
    });
}
function cont1Anim(){
    anime({
        targets: '.content-1',
        duration: 400,
        easing: 'easeOutQuart',
        opacity: 1,
        delay: 1500,
        paddingLeft: '0px'
    });
}


// on scroll event
window.addEventListener('wheel', function(e) {
    if (e.deltaY < 0) {
      console.log('scrolling up');
    //   scrollTo("home");
    //   pageTransition('./home.html');
      
    //   document.getElementById('status').innerHTML = 'scrolling up';
    }
    if (e.deltaY > 0) {
      console.log('scrolling down');
    //   scrollTo("aboutme");
    //   pageTransition('./aboutme.html');
      
    //   document.getElementById('status').innerHTML = 'scrolling down';
    }
  });

  function scrollTo(hash) {
    location.hash = "#" + hash;
}

$(window).on('error', function(event){
    // if(msg.includes('404')){
    //     // console.log(`There was a 404 error coming from\n${msg}\n${source}\n${lineno}\n${err}`);
        
    // }
});