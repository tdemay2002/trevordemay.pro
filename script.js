function myFunction(){
    document.getElementById("changing_text").innerText = "Thanks!!!";
    document.getElementById("panda_image").style.display = "none";
    document.getElementById("the_surprise").height = "315";
    
    var iframe = document.getElementById('myIframe');
    var currentSrc = iframe.src;
    var hasAutoplay = currentSrc.includes('autoplay=1');
    if (!hasAutoplay) {
        iframe.src = currentSrc + (currentSrc.includes('?') ? '&' : '?') + 'autoplay=1';
    }
};