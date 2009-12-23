// IOTBS2.0 :: Invasion of the Body Switchers - Look Who's Switching Too
// >>> "The Director's Cut"
//      Generates the switching controls as definition-lists and links
// ***********************************************
// This copyright statement must remain in place for both personal and commercial use
// GNU General Public License -- http://www.gnu.org/copyleft/gpl.html
// ***********************************************
// Original concept by Andy Clarke -- http://www.stuffandnonsense.co.uk/
// DOM scripting by brothercake -- http://www.brothercake.com/
// Create element and attributes based on a method by beetle -- http://www.peterbailey.net/
//************************************************
function bodySwitcher(divid, label, isnative, selected){if(switcher.path != null && !switcher.isie && typeof isnative != 'undefined' && isnative == 'yes'){switcher.integrate(this, divid );}this.classes = [];if(document.getElementById(divid) == null) { return false; }this.labels = [];var attrs = { 'id' : 'select-' + divid };this.dl = document.getElementById(divid).appendChild(switcher.create('dl', attrs));attrs = { 'text' : label };this.dl.appendChild(switcher.create('dt', attrs));this.selected = typeof selected != 'undefined' ? selected : '';return true;};bodySwitcher.prototype.defineClass = function(key, val){this.classes[this.classes.length] = key;if(typeof this.dl == 'undefined') { return false; }var self = this;this.labels[this.labels.length] = val;

//20051107 Added id to the original IOTBS2.0
	attrs = { 'id' : 'switch-' + val };
  var item = this.dl.appendChild(switcher.create('dd', attrs));

item.className = 'selected';if(key == 'default'){var link = item.appendChild(document.createTextNode(val + this.selected));}else if(switcher.cookie != null && switcher.cookie.indexOf(' ' + key + ' ')!=-1){link = item.appendChild(document.createTextNode(val + this.selected));if(key != 'default'){var defitem = this.dl.childNodes[1];defitem.className = '';this.dl.childNodes[1].removeChild(defitem.firstChild);var attrs = { 'href' : 'javascript:void("' + this.classes[0] + '", "' + this.labels[0] + '")', 'text' : this.labels[0] };link = defitem.appendChild(switcher.create('a', attrs));}}else{item.className = '';attrs = { 'href' : 'javascript:void("' + key + '", "' + val + '")', 'text' : val };link = item.appendChild(switcher.create('a', attrs));}item.onclick = function(){if(this.getElementsByTagName('a').length == 0) { return false; }var items = self.dl.getElementsByTagName('dd');var len = items.length;for(var i=0; i<len; i++){if(items[i] == this){var ind = i;break;}}switcher.save(self.dl.id.replace('select-', ''), self.classes[ind], ind, self );self.redraw(ind, this);return true;};return true;};bodySwitcher.prototype.redraw = function(ind, link){var items = this.dl.getElementsByTagName('dd');var len = items.length;for(var i=0; i<len; i++){if(items[i].firstChild.nodeName == '#text'){items[i].className = '';items[i].removeChild(items[i].firstChild);var attrs = { 'href' : 'javascript:void("' + this.classes[i] + '", "' + this.labels[i] + '")', 'text' : this.labels[i] };items[i].appendChild(switcher.create('a', attrs));}}items[(ind == len - 1 ? 0 : ind + 1)].firstChild.focus();link.removeChild(link.firstChild);link.appendChild(document.createTextNode(this.labels[ind] + this.selected));items[ind].className = 'selected';};bodySwitcher.prototype.update = function(ind){if(typeof this.dl != 'undefined'){this.redraw(ind, this.dl.getElementsByTagName('dd')[ind]);}};
