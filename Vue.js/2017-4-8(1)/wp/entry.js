let a = require('./a.js');
import modB from './b.js';
let aa=modB.a;
// alert(aa);
require('./style.css');

// alert(a);
var oBtn = document.getElementById('btn1');
oBtn.onclick = function () {
  div1.innerHTML = a;
};
