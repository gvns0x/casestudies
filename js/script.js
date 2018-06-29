$(document ).ready(function() {

    var bg = Array.prototype.slice.call(document.getElementsByClassName("block-title"))[0];

    window.sr = ScrollReveal({reset: true, origin: "top", duration: "2000", useDelay: 'onLoad'});
    sr.reveal('.block-quote');

    
});