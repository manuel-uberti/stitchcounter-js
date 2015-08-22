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

function init () {
  'use strict';
  U.$('button1').onclick = calculate1;
  U.$('clean1').onclick = clean1;
  U.$('button2').onclick = calculate2;
  U.$('clean2').onclick = clean2;
} // end of init()

window.onload = init;
