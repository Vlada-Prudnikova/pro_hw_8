let x = prompt("Що ви хочете зробити (add, sub, mult, div)?");
let y = prompt("перше число");
let z = prompt("друге число");
y = parseFloat(y);
z = parseFloat(z);
let result;
switch (x) {
  case "add":
    console.log((result = "y+z= " + (y + z)));
    break;
  case "sub":
    console.log((result = "y-z= " + (y - z)));
    break;
  case "mult":
    console.log((result = "y*z= " + y * z));
    break;
  case "div":
    console.log((result = "y/z= " + y / z));
    break;
}
alert(result);
