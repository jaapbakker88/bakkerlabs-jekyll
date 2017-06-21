---
layout: page
title: "Contact"
---

<form id="contactform">
<div>
<label for="name">name</label>
<input type="text" name="name" required/>
</div>
<div>
<label for="email">email</label>
<input type="email" name="email" required />
</div>
<div>
<label for="htmlBody">message</label>
<textarea name="htmlBody" required></textarea>
</div>
<input type="submit" />
</form>
<script type="text/javascript">
document.getElementById('contactform').onsubmit = function(evt) {
   evt.preventDefault();
   var xhr = new XMLHttpRequest();
   var url = 'https://mailgunner.bakkerlabs.nl/api/submit/hello@bakkerlabs.nl';
   xhr.open('POST', url, true);
   xhr.setRequestHeader("Content-type", "application/json");
   xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        //var json = JSON.parse(xhr.responseText);
        alert(xhr.responseText);
    }
   }
   var data = JSON.stringify({
     name: evt.target.name.value,
     email: evt.target.email.value,
     htmlBody: evt.target.htmlBody.value
   });
   xhr.send(data);
}
</script>