/* Javascript for the Lush theme */

function toggleMailUrl()  {
  theElement = document.getElementById('mailurl');
  	if(theElement.style.display == 'none')  {
  		Effect.Appear('mailurl');
  	}
  	else  {	
  		Effect.Fade('mailurl');
  	}
}

function ff15()  {
  userAgent = navigator.userAgent;
  isFirefox = ( userAgent != null && userAgent.indexOf( "Firefox/1.5" ) != -1 );
  if(isFirefox)  {
    alert('You seem to be using Firefox 1.5\nUnfortunately this theme has an issue with\nthis browser: Ajax commenting doesn\'t work.\nHowever the comment DOES get posted\nso there\'s no need to resubmit it.\nThe author is working on a solution for this.\nSorry for the inconvenience.');
    }
  }

function init()  {
	var detect = navigator.userAgent.toLowerCase();
	if (detect.indexOf("msie 5.0") == -1)  {  
      document.getElementById('q').setAttribute('autocomplete', 'off');	
	  }
	document.getElementById('wtyl').style.visibility = 'hidden';
	var cookie = readCookie("style");
	var title = cookie ? cookie : getPreferredStyleSheet();
	setActiveStyleSheet(title);
}

function showButtons()  {

/* In case we're using an old crappy browser or we don't have javascript
   at all we show an old school submit button and we uncollapse the
   comment form. */

var detect = navigator.userAgent.toLowerCase();
if (detect.indexOf("msie 5.0") == -1)  {
	document.getElementById('previewbutton').style.display = 'block';
	document.getElementById('form-submit-button').style.display = 'block';  	
	document.getElementById('noscriptsubmit').style.display = 'none';
	}
  
  toggleMailUrl();
}

function wtyl(setting)  {

/* engage easter egg */

  if (setting == 'on')  {
  	document.getElementById('wtyl').style.visibility = 'visible';
	  }	
  else  {
    document.getElementById('wtyl').style.visibility = 'hidden';	
  }
}


Effect.myAppear = function(element) {
  var options = Object.extend({
  from: (Element.getStyle(element, "display") == "none" ? 0.0 : Element.getOpacity(element) || 0.0),
  to:   0.8,
  beforeSetup: function(effect)  
    { Element.setOpacity(effect.element, effect.options.from);
      Element.show(effect.element); }
  }, arguments[1] || {});
  return new Effect.Opacity(element,options);
}

function showSearch()  {

  /* show the livesearch results */

  var theElement = document.getElementById('search-results');
  if ((theElement.innerHTML.search('<li>') == -1) && (theElement.innerHTML.search('<LI>') == -1))  {
     theElement.style.visibility = 'hidden';
     return;
     }
  theElement.style.visibility = 'visible';
  Effect.myAppear(theElement);
}

function hideSearch()  {

  /* hide livesearch results */

  var theElement = document.getElementById('search-results');
  Effect.Fade(theElement);
  document.getElementById('q').value = '';
}
