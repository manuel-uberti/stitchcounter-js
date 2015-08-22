var U = {
  $: function(id) {
    'use strict';
    if (typeof id == 'string') {
      return document.getElementById(id);
    }
  },
  setText: function(id, message) {
    'use strict';
    if ((typeof id == 'string') && (typeof message == 'string')) {
      var output = this.$(id);
      if (!output) return false;
      if (output.textContent !== undefined) {
        output.textContent = message;
      } else {
        output.innerText = message;
      }
      return true;
    }
  },
  addEvent: function(obj, type, fn) {
    'use strict';
    if (obj && obj.addEventListener) {
      obj.addEventListener(type, fn, false);
    } else if (obj && obj.attachEvent) {
      obj.attachEvent('on' + type, fn);
    }
  },
  removeEvent: function(obj, type, fn) {
    'use strict';
    if (obj && obj.removeEventListener) {
      obj.removeEventListener(type, fn, false);
    } else if (obj && obj.detachEvent) {
      obj.detachEvent('on' + type, fn);
    }
  }
};

function isNonEmptyNumber (str) {
  'use strict';
  if(!str.length) return false;
  var num = +str;
  return isFinite(num) && !isNaN(num);
}
