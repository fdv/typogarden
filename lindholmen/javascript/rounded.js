// here we define wich elements to round, using 
// prototype's built in functions
function RoundedElements() {
  Rounded($('logo','scroller','search','viewpage'));
  Rounded(document.getElementsByClassName('post'));
  Rounded(document.getElementsByClassName('graybox'));
}

// Highly inspired by Nifty Corners v1, http://pro.html.it/esempio/nifty/ 
// Creates html for rounded corners. 
function Rounded(v){
  if (!v.length) var v = new Array(v);
  for(var i=0;i<v.length;i++){
    var el = v[i];
    if (el && el.insertBefore) {
      //add top corners
      var dt=document.createElement("b");
      dt.className="rtop";
      for(var j=1;j<=4;j++){
        var x=document.createElement("b");
        x.className="r" + j;
        dt.appendChild(x);
        }
      el.insertBefore(dt,el.firstChild);
      //add bottom corners
      var db=document.createElement("b");
      db.className="rbottom";
      for(var k=4;k>0;k--){
        var x=document.createElement("b");
        x.className="r" + k;
        db.appendChild(x);
        }
     el.appendChild(db,el.firstChild);
     //clean up styling
     el.style.paddingTop="0";
     el.style.paddingBottom="0";
    }
  }
}


// Overrides the original function in typo.js 
// to make it work better with rounded corners */
function commentAdded(request) {
  new Effect.Appear($('commentList').lastChild);
  Rounded($('commentList').lastChild);
  $('commentform').elements[3].value = '';
  $('commentform').elements[3].focus();
}


// The code below is a trick to load javascript before images etc, unfortunately only for IE and Mozilla
// by Dean Edwards, http://dean.edwards.name/weblog/2005/09/busted/  
function init() {
  // quit if this function has already been called
  if (arguments.callee.done) return;
  // flag this function so we don't do the same thing twice
  arguments.callee.done = true;
  // make it happen
  RoundedElements();
};
/* for Mozilla */
if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", init, null);
}
/* for Internet Explorer */
/*@cc_on @*/
/*@if (@_win32)
  document.write("<script defer src=/javascript/theme/ie_onload.js><"+"/script>");
/*@end @*/
/* for other browsers using typos onload function */
register_onload(init);
