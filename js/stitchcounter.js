var U = {
  $: function(id) {
    'use strict';
    if (typeof id == 'string') {
      return document.getElementById(id);
    }
  }};

function calculate1() {
  'use strict';

  var totalRows;
  var orows = U.$('orows').value;
  var rows = U.$('rows').value;
  var ovalr = U.$('ovalr').value;

  // TODO: validazione!

  totalRows = (rows * ovalr) / orows;
  totalRows = totalRows.toFixed(2);

  U.$('totalr').innerHTML = "<strong>" + totalRows + "</strong>";

  return false;
} // end of calculate1()

function calculate1b() {
  'use strict';

  var totalSts;
  var osts = U.$('osts').value;
  var sts = U.$('sts').value;
  var ovals = U.$('ovals').value;

  // TODO: validazione!

  totalSts = (sts * ovals) / osts;
  totalSts = totalSts.toFixed(2);

  U.$('totals').innerHTML = "<strong>" + totalSts + "</strong>";

  return false;
} // end of calculate1b()

function calculate2() {
  'use strict';

  var finalSts;
  var units = U.$('units').value;
  var sts = U.$('sts1').value;
  var cm = U.$('cm').value;

  finalSts = (sts / units) * cm;
  finalSts = finalSts.toFixed(2);

  U.$('finals').innerHTML = "<strong>" + finalSts + "</strong>";

  return false;
} // end of calculate2()

function calculate3() {
  'use strict';

  var finaly;
  var weightf = U.$('weightf').value;
  var yardf = U.$('yardf').value;
  var weightp = U.$('weightp').value;

  finaly = (yardf * weightp) / weightf;
  finaly = finaly.toFixed(2);

  U.$('finaly').innerHTML = "<strong>" + finaly + "</strong>";

  return false;
} // end of calculate3()

function calculate4() {
  'use strict';

  var totalshb;
  var numbershb = U.$('numbershb').value;
  var yardageshb = U.$('yardageshb').value;
  var yardagesub = U.$('yardagesub').value;

  totalshb = (numbershb * yardageshb) / yardagesub;
  totalshb = totalshb.toFixed(2);

  U.$('totalshb').innerHTML = "<strong>" + totalshb + "</strong>";

  return false;
} // end of calculate4()

function clean1() {
  'use strict';

  U.$('orows').value = "";
  U.$('rows').value = "";
  U.$('ovalr').value = "";
  U.$('totalr').innerHTML = "";

  return false;
} // end of clean1()

function clean1b() {
  'use strict';

  U.$('osts').value = "";
  U.$('sts').value = "";
  U.$('ovals').value = "";
  U.$('totals').innerHTML = "";

  return false;
} // end of clean1()

function clean2() {
  'use strict';

  U.$('units').value = "";
  U.$('sts1').value = "";
  U.$('cm').value = "";
  U.$('finals').innerHTML = "";

  return false;
} // end of clean2()

function clean3() {
  'use strict';

  U.$('weightf').value = "";
  U.$('yardf').value = "";
  U.$('weightp').value = "";
  U.$('finaly').innerHTML = "";

  return false;
} // end of clean3()

function clean4() {
  'use strict';

  U.$('numbershb').value = "";
  U.$('yardageshb').value = "";
  U.$('yardagesub').value = "";
  U.$('totalshb').innerHTML = "";

  return false;
} // end of clean4()

function init () {
  'use strict';
  U.$('button1').onclick = calculate1;
  U.$('clean1').onclick = clean1;
  U.$('button1b').onclick = calculate1b;
  U.$('clean1b').onclick = clean1b;
  U.$('button2').onclick = calculate2;
  U.$('clean2').onclick = clean2;
  U.$('button3').onclick = calculate3;
  U.$('clean3').onclick = clean3;
  U.$('button4').onclick = calculate4;
  U.$('clean4').onclick = clean4;
} // end of init()

window.onload = init;
