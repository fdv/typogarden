//Horizontal scroll effect, might be a part of script.aculo.us if this gets popular...
Effect.ScrollTo_Horizontal = Class.create();
Object.extend(Object.extend(Effect.ScrollTo_Horizontal.prototype, Effect.Base.prototype), {
  initialize: function(element) {
    this.element = $(element);
    Position.prepare();
    var offsets = Position.cumulativeOffset(this.element);
    var max = window.innerWidth ? 
      window.width - window.innerWidth :
      document.body.scrollWidth - 
        (document.documentElement.clientWidth ? 
          document.documentElement.clientWidth : document.body.clientWidth);
    this.scrollStart = Position.deltaX;
    this.delta  = (offsets[0] > max ? max : offsets[0]) - this.scrollStart;
    this.start(arguments[2] || {});
  },
  update: function(position) {
    Position.prepare();
    window.scrollTo(this.scrollStart + (position*this.delta) - 20, 
      Position.deltaY);
  }
});

// Determine which scroll function to use depending on the Style switcher
function ScrollVertOrHor(target) {
    if (document.getElementsByTagName('body')[0].className.match(/\bvertical\b/i) ) {     
      new Effect.ScrollTo(target)
    }  else {
      new Effect.ScrollTo_Horizontal(target)
    }
  }

// Set the horizontal width relative to number of articles
function HorizontalWidth() {
  var el = document.getElementsByTagName('body')[0]; 
  if (el.className.match(/\barticles\b/i) && !el.className.match(/\bvertical\b/i) && $('scroller')) {     
    var articlecount = $('scroller').getElementsByTagName('li').length;
    //calculate the width
    $('container').style.width=41*articlecount + 72 + 'em';
    $('footer').style.width=41*articlecount + 72 + 'em';
  }
}
register_onload(HorizontalWidth);



