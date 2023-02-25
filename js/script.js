particlesJS.load('particle-js', '../particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});
new TypeIt(".typing-text", {
    loop: true,
    strings: "Backend Developer",
}).go();

$(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
        $('.socials').stop().animate({
            opacity: 0,
            marginTop: '-50px'
        }, 500, function() {
            $(this).slideUp();
        });
        $('#buttonAbout').stop().animate({
            opacity: 0,
            marginTop: '-50px'
        }, 500, function() {
            $(this).slideUp();
        });
    } else {
        $('.socials').stop().slideDown().animate({
            opacity: 1,
            marginTop: '0'
        }, 500);
        $('#buttonAbout').stop().slideDown().animate({
            opacity: 1,
            marginTop: '0'
        }, 500);
    }
});

function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetPosition = $(targetId).offset().top;
    $('html, body').animate({
        scrollTop: targetPosition
    }, 1000);
}
