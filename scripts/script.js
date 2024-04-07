window.addEventListener('scroll', function() {
    var element = document.querySelector('.sticky');
    var members = document.querySelector('#current_reps').getBoundingClientRect().top;

    if (window.scrollY > members) {
        element.classList.remove('sticky');
    } else {
        element.classList.add('sticky');
    }
});
