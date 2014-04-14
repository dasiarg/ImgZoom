function quit() {
    var div = document.getElementById("imgzoom");
    div.removeChild(document.getElementById("img"));  //delete img node element
    div.removeChild(document.getElementById("canc"));  //delete canc node element
    document.body.removeChild(div);
}


function extend(link) {
    var x = Math.max(window.innerWidth, document.body.clientWidth, document.documentElement.clientWidth),
        y = Math.max(window.innerHeight, document.body.clientHeight, document.documentElement.clientHeight),
        div = document.createElement("div"),
        img = document.createElement("img");
    
    div.id="imgzoom";
    div.style.position= "fixed";
    div.style.backgroundColor="#000";
    document.body.insertBefore(div);
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
    canc.style.zIndex= "100";
    canc.style.position= "fixed";
    canc.style.fontSize= "1.25em";
    canc.style.color= "#ccc";
    canc.style.right= "1em";
    canc.style.top= "0.5em";
    canc.style.cursor= "pointer";
    canc.style.textShadow= "0px 0px 5px #000";
    canc.innerHTML= "x";
    canc.id= "canc";
    canc.onclick= function () { quit() };
    div.insertBefore(canc, null);       
    

    //font-weight: 500;


}

document.addEventListener('keydown', function (event) { //close img with ESC button
    if (event.keyCode === 27) {
        quit();
    }
});