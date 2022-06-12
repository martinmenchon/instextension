document.addEventListener('click', function(e) {
	//Si estoy en una story
	if (window.location.pathname.includes("/stories/")) {
		//Si hacen click en la foto	
		if (e.srcElement.closest("button") == null ) { 	
			try{
				var img = document.getElementsByTagName("video")[0].currentSrc; 
			}
			catch(error) { 
				var img = document.getElementsByTagName("img")[1].src; //Si dió error es una foto
			}
		}
	}
	//Es una foto de la bibliografia
	else {
		try {
			var img = e.srcElement.parentElement.firstChild.firstChild.src;
		}
		catch(error) {
		}
	}
	if (img !=undefined){
		var win = window.open(img, '_blank');
		win.focus();  
	}
}, false);

//Special thanks to Jose G. Filippa