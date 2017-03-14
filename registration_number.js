var capeTown = [];
var bellville = [];
var paarl = [];




function displayCapeTown (){
  document.getElementById("cape").innerHTML = capeTown;
}
function displayBellville(){
  document.getElementById("bell").innerHTML = bellville;
}
function displayPaarl(){
  document.getElementById("paar").innerHTML = paarl;

}

function appendList() {
  var ul = document.getElementById('listitems');
  var li = document.createElement('li');
  var regs = document.getElementById('item').value;
  document.getElementById('item').value = "";

    if (regs.startsWith("CA")){
      li.appendChild(document.createTextNode(regs));
      ul.appendChild(li);
      capeTown.push(regs);

}
    else if (regs.startsWith("CY")){
      li.appendChild(document.createTextNode(regs));
      ul.appendChild(li);
      bellville.push(regs);
      return;

}
    else if (regs.startsWith("CJ")){
      li.appendChild(document.createTextNode(regs));
      ul.appendChild(li);
      paarl.push(regs);
      return;
}

}
