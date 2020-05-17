function test() {
  checkCookie();
}

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user=getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}

function isPalind(x) {
  x = String(x);
  if (x.length <= 0) return false;
  if (x.length == 1) return true;
  for (var i = 0; i < parseInt(x.length / 2); i++) {
    if (x.charAt(i) != x.charAt(x.length - 1 - i)) return false;
  }
  return true;
}
function isPrime(x) {
  x = Number(x);
  if (x < 2) return false;
  for (var i = 2; i <= Math.sqrt(Number(x)); i++) {
    if (x % i == 0) return false;
  }
  return true;
}
function isEmirp(x) {
  x = String(x);
  if (x.length < 2) return false;
  if (isPalind(x)) return false;

  var xr = "";
  for (var i = x.length - 1; i >= 0; i--) {
    xr += x.charAt(i);
  }

  if (isPrime(x) && isPrime(xr)) return true;

  return false;
}

function isPasswordValid(password) {
  if (password.length < 8) return false;

  var digitCount = 0;
  var symbolCount = 0;
  var upperCount = 0;
  var lowerCount = 0;
  for (var i = 0; i < password.length; i++) {
    if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90)
      upperCount++;
    else if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)
      lowerCount++;
    else if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57)
      digitCount++;
    else symbolCount++;
  }
  if (digitCount < 2 || !symbolCount || !upperCount || !lowerCount)
    return false;

  return true;
}

function range(start, end) {
  var arr = [];
  for (var i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}
function sum(numbers) {
  var sum = 0;
  for (var i of numbers) {
    sum += i;
  }
  return sum;
}

function deepEqual(value1, value2) {
  if (value1 === value2) {
    return true;
  }
  if (
    value1 == null ||
    typeof value1 != "object" ||
    value2 == null ||
    typeof value2 != "object"
  ) {
    return false;
  }

  var keys1 = Object.keys(value1),
    keys2 = Object.keys(value2);
  if (keys1.length != keys2.length) {
    return false;
  }
  for (var prop of keys1) {
    if (!keys2.includes(prop)) {
      return false;
    }
    if (!deepEqual(value1[prop], value2[prop])) {
      return false;
    }
  }
  return true;
}
