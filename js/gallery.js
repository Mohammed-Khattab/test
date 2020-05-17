"use strict";

function billingFunction() {
  var isSame = document.getElementById("same");
  if (isSame.checked) {
    var name = document.getElementById("shippingName").value;
    var zip = document.getElementById("shippingZip").value;
    document.getElementById("billingName").value = name;
    document.getElementById("billingZip").setAttribute("value", zip);
  } else {
    document.getElementById("billingName").setAttribute("value", "");
    document.getElementById("billingZip").setAttribute("value", "");
  }
}
