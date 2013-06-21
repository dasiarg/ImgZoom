function quit() {
  	var div= document.getElementById('Wallpaper');
		div.removeChild(document.getElementById('img'));  //delete img node
		document.body.removeChild(document.getElementById('canc'));  //delete canc element
		div.style.width= 0;  //hide div
		div.style.height= 0;
	
}

function extend(small) {
			var x= document.body.clientWidth;  //Needed to resize img
			var y=  document.body.clientHeight; 

			var div=document.getElementById('Wallpaper'); 
			div.style.width= "100%";		//show div
			div.style.height= "100%";

			var img= document.createElement('img');  //create img
			img.src= small.src;
			img.id= "img";

			if (img.width/img.height > x/y ) {  //resize img keeping ratio x/y
				if (img.width > x) {
					img.height= (img.height * x)/img.width; 
					img.width= x;

				}				
			} else {
				if (img.height > y) {
					img.width= (img.width * y)/img.height; 
					img.height= y;
				}
			}

			var canc= document.createElement('a');  //create the element to close the img
			canc.id= "canc";
			canc.href= "javascript:quit()";
			canc.innerHTML= "x";			

			document.body.insertBefore(canc, div); //insert in the HTML
			div.appendChild(img);

			img.style.marginLeft= (x- img.width)/2; //center img
			img.style.marginTop= (y- img.height)/2;
}

document.addEventListener('keydown', function(event) { //close img with ESC button
    if(event.keyCode == 27) {
        quit();
    }
});
