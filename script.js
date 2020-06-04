function Calculate() {
  var weight = document.getElementById("weight").value;
  var height =  document.getElementById("height").value;
  var bmi= (weight/height/height)*10000;
bmi=bmi.toFixed(2);
if(bmi<18)
{
  document.getElementById("result").innerHTML ="Your bmi is "+ bmi +". You need to eat more you thinass. ";
}
if(bmi>=18 && bmi<=22)
{
  document.getElementById("result").innerHTML ="Your bmi is "+ bmi +". You are fit. Keep it that way ";

}
if(bmi>22)
{
  document.getElementById("result").innerHTML ="Your bmi is "+ bmi +". You need to eat less or you end uo being a lazy ass. ";

}
}
