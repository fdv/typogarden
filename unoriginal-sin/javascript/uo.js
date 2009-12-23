
function shadow_border(element)
{ // has a bug where it ruins textareas
  element = $(element);
  original_id = element.id;
  element.id = "shadow-left";
  element.innerHTML = '<div id="shadow-right"><div id="shadow-top"><div id="shadow-bottom"><div id="shadow-top-left"><div id="shadow-top-right"><div id="shadow-bottom-right"><div id="shadow-bottom-left"><div id="'+ original_id +'">' + element.innerHTML + '</div></div></div></div></div></div></div></div>';
}

// shadow border
register_onload( function() {
  shadow_border('container'); // breaks live search
});

// sidebar column layout
register_onload(function() {
  nodes = document.getElementsByClassName('sidebar-node');
  for (i=0; i < nodes.length; i++) {
    if (i % 2 == 0) {
      nodes[i].className += ' sidebar-left';
    }
    else {
      nodes[i].className += ' sidebar-right';
    }
  }
});
