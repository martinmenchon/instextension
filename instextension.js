function toBlob(dataURI) {

    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    document.getElementById('ins').innerHTML = ("Data URI:" + dataURI);

    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    // write the ArrayBuffer to a blob, and you're done
    var blob = new Blob([ab], {type: 'image/png'});

    return blob;
  }

window.addEventListener('mousedown', (e) => {
   if (e.button == 1 || e.buttons == 4) {
      //Si estoy en una story | If it is a story
		if (window.location.pathname.includes("/stories/")) {
			//Si hacen click en la foto o video | If the photo or video is clicked
			if ( (e.srcElement.closest("button") == null ) && (e.srcElement.parentElement.getAttribute('role') != "button") && (e.srcElement.parentElement.parentElement.getAttribute('role') != "button") ) { 
				try {
					var img = document.getElementsByTagName("video")[0].src; 
					//img = toBlob(img);
					//img = img.replace('blob:','');
					console.log("Entro0")
				}
				catch(error) { 
					var img = e.srcElement.parentElement.parentElement.parentElement.firstChild.src; //Si dió error es una foto | If catching the video failed then it is a photo
				}
			}
		}
		//Es una foto o video del feed | It is a photo or video from the feed
		else {
			if (e.srcElement.closest("a") == null ) { 
				try {
					var img = e.srcElement.parentElement.firstChild.firstChild.firstChild.firstChild.src;
					var poster_feed = e.srcElement.parentElement.firstChild.firstChild.firstChild.firstChild.poster;
				}
				catch(error) {
					var img = e.srcElement.parentElement.firstChild.firstChild.src; //Si dió error es una foto | If catching the video failed then it is a photo
				}
			}
		}
		if (img !=undefined) {
			if (typeof poster_feed != 'undefined' && poster_feed) {
				window.open(poster_feed, '_blank').focus();
			}
			else {
				window.open(img, '_blank').focus();
			}
		}
   }
});