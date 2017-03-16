var divs = document.getElementsByClassName("_ovg3g");
for(var i = 0; i < divs.length;i++)
{
	divs[i].parentNode.removeChild(divs[i]);
}

document.addEventListener('click', function(e) {
	var divs = document.getElementsByClassName("_ovg3g");
	for(var i = 0; i < divs.length;i++)
	{
   		divs[i].parentNode.removeChild(divs[i]);
	}

    var target = e.target; 
    var img = target.currentSrc;

    if (img !=undefined){
    	var win = window.open(img, '_blank');
    	win.focus();  
    }
}, false);
