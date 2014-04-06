function quit() {
    var div = document.getElementById("Wallpaper");
    div.removeChild(document.getElementById("img"));  //delete img node element
    div.removeChild(document.getElementById("canc"));  //delete canc node element
    div.style.width = 0;  //hide div
    div.style.height = 0;
}


function extend(link) {
    var x = Math.max (window.innerWidth,document.body.clientWidth,document.documentElement.clientWidth);
        y = Math.max (window.innerHeight, document.body.clientHeight,document.documentElement.clientHeight);
        div = document.getElementById("Wallpaper"),
        img = document.createElement("img");
    
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.top = "0px";
    div.style.left = "0px";
    
    img.src = link;
    img.id = "img";
    
    //Resizing and centering the image
    img.onload= function() {        
        if (img.width < x && img.height < y) {
            img.style.marginLeft= (x - img.width)/2 + "px";
            img.style.marginTop= (y - img.height)/2 + "px";
        } else if (x/y < img.width/img.height) {
            newHeight= img.height*(x-30)/img.width;
            img.height= newHeight;
            img.width = x-30;
            img.style.marginLeft= "7px";
            img.style.marginTop= Math.abs((y - newHeight))/2 + "px";
        } else if (x/y > img.width/img.height) {
            newWidth= img.width*(y-30)/img.height;
            img.width= newWidth;
            img.height = y-30;
            img.style.marginTop= "15px";
            img.style.marginLeft= Math.abs((x - newWidth))/2 + "px";
        } 
        div.appendChild(img);
    }
    
    //creating the X icon
    var canc= document.createElement("div");
    canc.innerHTML= "x";
    canc.id= "canc";
    canc.onclick= function () { quit() };
    div.insertBefore(canc, null);       
}

document.addEventListener('keydown', function (event) { //close img with ESC button
    if (event.keyCode === 27) {
        quit();
    }
});