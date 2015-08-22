var U = {
  $: function(id) {
    'use strict';
    if (typeof id == 'string') {
      return document.getElementById(id);
    }
  }};

function calculate1() {
  'use strict';

  var totalRows, totalSts;
  var orows = U.$('orows').value;
  var rows = U.$('rows').value;
  var osts = U.$('osts').value;
  var sts = U.$('sts').value;
  var ovalr = U.$('ovalr').value;
  var ovals = U.$('ovals').value;

  totalRows = (rows * ovalr) / orows;
  totalRows = totalRows.toFixed(2);

  totalSts = (sts * ovals) / osts;
  totalSts = totalSts.toFixed(2);

  U.$('totalr').innerHTML = "<strong>" + totalRows + "</strong>";
  U.$('totals').innerHTML = "<strong>" + totalSts + "</strong>";

  return false;
} // end of calculate1()

function calculate2() {
  'use strict';

  var finalRows, finalSts;
  var units = U.$('units').value;
  var rows = U.$('rows1').value;
  var sts = U.$('sts1').value;
  var cm = U.$('cm').value;

  finalRows = (rows / units) * cm;
  finalRows = finalRows.toFixed(2);

  finalSts = (sts / units) * cm;
  finalSts = finalSts.toFixed(2);

  U.$('finalr').innerHTML = "<strong>" + finalRows + "</strong>";
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
  U.$('osts').value = "";
  U.$('sts').value = "";
  U.$('ovalr').value = "";
  U.$('ovals').value = "";
  U.$('totalr').innerHTML = "";
  U.$('totals').innerHTML = "";

  return false;
} // end of clean1()

function clean2() {
  'use strict';

  U.$('units').value = "";
  U.$('rows1').value = "";
  U.$('sts1').value = "";
  U.$('cm').value = "";
  U.$('finalr').innerHTML = "";
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
  U.$('button2').onclick = calculate2;
  U.$('clean2').onclick = clean2;
  U.$('button3').onclick = calculate3;
  U.$('clean3').onclick = clean3;
  U.$('button4').onclick = calculate4;
  U.$('clean4').onclick = clean4;
} // end of init()

window.onload = init;
