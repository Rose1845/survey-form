function 
myFunction() {
var text="";
if (document.getElementsById("number_Label").validity.rangeOverflow){
  text="value too small";
}
document.getElementsById("submit").innerHTML=text;
}
