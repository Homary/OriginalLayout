
window.addEventListener('load', function() {

    let nodes = document.querySelectorAll('.grid-item'),
        navs = document.querySelectorAll('.nav-item');

    nodes.forEach( item => {
        item.addEventListener('mouseenter', function(e) {
            e.target.querySelector('.show-mask-child').classList.add('show-mask-child-show')
            e.target.querySelector('.show-mask-child').classList.remove('show-mask-child-hide')
        }, false);

        item.addEventListener('mouseleave', function(e) {
            e.target.querySelector('.show-mask-child').classList.remove('show-mask-child-hide')
            e.target.querySelector('.show-mask-child').classList.add('show-mask-child-hide')
        }, false)
    })
}, false);
