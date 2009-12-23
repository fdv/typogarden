var Wired = new Object();

Wired.loading = function(id) {
	el = document.getElementById(id);

	src = el.src;
	
	if (src.indexOf('-spinner.gif') == -1) {
		x = src.indexOf('.gif');
		str = src.substring(0, x);
		el.src = str + '-spinner.gif';
	}
}

Wired.complete = function(id) {
	el = document.getElementById(id);

	src = el.src;
	
	if (src.indexOf('-spinner.gif') != -1) {
		x = src.indexOf('-spinner.gif');
		str = src.substring(0, x);
		el.src = str + '.gif';
	}
}

Wired.toggle = function(n) {
	el = document.getElementById("guest_author");
	
	imgs = el.getElementsByTagName('img');
	
	src = imgs[n].src;
	
	if (src.indexOf('-active.gif') != -1) {
		x = src.indexOf('-active.gif');
		str = src.substring(0, x);
		imgs[n].src = str + '.gif';
	}
	else {
		x = src.indexOf('.gif');
		str = src.substring(0, x);
		imgs[n].src = str + '-active.gif';
	}
}