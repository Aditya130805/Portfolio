document.onmousemove = function(e) { 
    var x = e.clientX; 
    var y = e.clientY; 

    // Same direction (horizontal)

    document.getElementsByClassName('line1')[0].style.left  = (x^2)*0.007+20.5+"%";
    document.getElementsByClassName('line1')[0].style.top  = (0.6-((y^2)*0.007))+"vh";

    document.getElementsByClassName('triangle1')[0].style.left  = (x^2)*0.007+31+"%";
    document.getElementsByClassName('triangle1')[0].style.top  = (18.5-((y^2)*0.007))+"vh";

    document.getElementsByClassName('triangle2')[0].style.right  = 28-((x^2)*0.007)+"%";
    document.getElementsByClassName('triangle2')[0].style.top  = (18-((y^2)*0.007))+"vh";

    document.getElementsByClassName('semi-circle1')[0].style.left  = (x^2)*0.007+5.5+"%";
    document.getElementsByClassName('semi-circle1')[0].style.bottom  = (18-((y^2)*0.007))+"vh";

    document.getElementsByClassName('semi-circle2')[0].style.right  = 5-((x^2)*0.007)+"%";
    document.getElementsByClassName('semi-circle2')[0].style.top  = (2.5-((y^2)*0.007))+"vh";

    document.getElementsByClassName('semi-circle3')[0].style.right  = 7-((x^2)*0.007)+"%";
    document.getElementsByClassName('semi-circle3')[0].style.bottom  = (25-((y^2)*0.007))+"vh";

    // Opposite direction (horizontal)

    document.getElementsByClassName('line2')[0].style.left  = 10-((x^2)*0.007)+"%";
    document.getElementsByClassName('line2')[0].style.bottom  = (0.5-((y^2)*0.007))+"vh";

    document.getElementsByClassName('line3')[0].style.right  = 14+((x^2)*0.007)+"%";
    document.getElementsByClassName('line3')[0].style.bottom  = (2.6-((y^2)*0.007))+"vh";

    document.getElementsByClassName('triangle3')[0].style.right  = -1+((x^2)*0.004)+"%";
    document.getElementsByClassName('triangle3')[0].style.top  = (20+((y^2)*0.005))+"vh";

    document.getElementsByClassName('spring1')[0].style.left  = 2-((x^2)*0.007)+"%";
    document.getElementsByClassName('spring1')[0].style.top  = (20+((y^2)*0.007))+"vh";

    document.getElementsByClassName('spring2')[0].style.left  = 49-((x^2)*0.007)+"%";
    document.getElementsByClassName('spring2')[0].style.bottom  = (1-((y^2)*0.007))+"vh";
}