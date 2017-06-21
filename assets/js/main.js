
/////////////////////////////////////////////////////////////////////////////
// Contact Form /////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
if (document.getElementById('contactform')) {
	document.getElementById('contactform').onsubmit = function(evt) {
	   evt.preventDefault();
	   var xhr = new XMLHttpRequest();
	   var url = 'https://mailgunner.bakkerlabs.nl/api/submit/hello@bakkerlabs.nl';
	   xhr.open('POST', url, true);
	   xhr.setRequestHeader("Content-type", "application/json");
	   xhr.onreadystatechange = function () {
	    if (xhr.readyState == 4 && xhr.status == 200) {
	        //var json = JSON.parse(xhr.responseText);
	        document.getElementById("contactform").reset();
	        document.getElementById("contact").insertAdjacentHTML('afterbegin', '<div id="alert success">You\'re message has been sent!</div>');
	    } 
	   }
	   var data = JSON.stringify({
	     name: evt.target.name.value,
	     email: evt.target.email.value,
	     htmlBody: evt.target.htmlBody.value
	   });
	   xhr.send(data);
	}
}