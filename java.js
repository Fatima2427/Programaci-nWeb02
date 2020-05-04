function Binarias(){

  document.getElementById('CalcBinario').style.display="block";

  document.getElementById('CalcAritmetica').style.display="none";

  document.getElementById('logica').style.display="none";


}
function Aritmetica(){

  document.getElementById('CalcAritmetica').style.display="block";
  document.getElementById('logica').style.display="none";
  document.getElementById('CalcBinario').style.display="none";
}
function Logicas(){

  document.getElementById('logica').style.display="block";
  document.getElementById('CalcAritmetica').style.display="none";
    document.getElementById('CalcBinario').style.display="none";
}

           function suma(){
var num1 = document.getElementById('textfield').value;
var num2 = document.getElementById('textfield2').value;
document.getElementById("targetDiv").innerHTML = parseInt(num1)+ parseInt(num2);
    }
     function restar(){
     var num1 = document.getElementById('textfield').value;
     var num2 = document.getElementById('textfield2').value;
     document.getElementById("targetDiv").innerHTML = num1 - num2;
     }
     function multiplicar(){
     var num1 = document.getElementById('textfield').value;
     var num2 = document.getElementById('textfield2').value;
       var num = num1 * num2;
     document.getElementById("targetDiv").innerHTML =num;
     }
     function dividir(){
     var num1 = document.getElementById('textfield').value;
     var num2 = document.getElementById('textfield2').value;
     document.getElementById("targetDiv").innerHTML =num1/num2;
     }
     function or(){
     var num3= document.getElementById('textfield3').value;
     var num4 = document.getElementById('textfield4').value;
        var a = parseInt(num3).toString(2);
        var b = parseInt(num4).toString(2);
    var result = parseInt(a,2)  | parseInt(b,2);
        document.getElementById("targetDiv2").innerHTML = a + "<br>" +
        b + "<br>" + "result decimal :" + result  ;

  }
     function and(){
      var num3= document.getElementById('textfield3').value;
      var num4= document.getElementById('textfield4').value;
       var a = parseInt(num3).toString(2);
        var b = parseInt(num4).toString(2);
        var result = parseInt(a,2) &  parseInt(b,2);
        
      document.getElementById("targetDiv2").innerHTML = a + "<br>" +
        b + "<br>" + "result decimal :" + result  ;

     }
     function right(){
      var num3= document.getElementById('textfield3').value;
      var num4= document.getElementById('textfield4').value;
       var a = parseInt(num3).toString(2);
        var b = parseInt(num4).toString(2);
 var result = parseInt(a,2) >> parseInt(b,2);
       document.getElementById("targetDiv2").innerHTML = a + "<br>" +
        b + "<br>" + "result decimal :" + result  ;

     }
     function left(){
      var num3= document.getElementById('textfield3').value;
      var num4= document.getElementById('textfield4').value;
       var a = parseInt(num3).toString(2);
        var b = parseInt(num4).toString(2);
  var result = parseInt(a,2)  << parseInt(b,2);
       document.getElementById("targetDiv2").innerHTML =  a + "<br>" +
        b + "<br>" + "result decimal :" + result  ;


     }
       function xor(){
      var num3= document.getElementById('textfield3').value;
      var num4= document.getElementById('textfield4').value;
       var a = parseInt(num3).toString(2);
        var b = parseInt(num4).toString(2);
  var result = parseInt(a,2)  ^ parseInt(b,2);
       document.getElementById("targetDiv2").innerHTML =  a + "<br>" +
        b + "<br>" + "result decimal :" + result  ;
     }
     function right2(){
      var num3= document.getElementById('textfield3').value;
      var num4= document.getElementById('textfield4').value;
       var a = parseInt(num3).toString(2);
        var b = parseInt(num4).toString(2);
  var result = parseInt(a,2)  >>> parseInt(b,2);
       document.getElementById("targetDiv2").innerHTML =  a + "<br>" +
        b + "<br>" + "result decimal :" + result  ;
     }
        function conjuncion(){
      var num5= document.getElementById('textfield5').value;
      var num6= document.getElementById('textfield6').value;
      var respuesta;
 if ((num5.toUpperCase() === 'F' || num5.toUpperCase()  ==='V') && (num6.toUpperCase()  ==='F' || num6.toUpperCase()  ==='V')) {
if(num5.toUpperCase() ==='F' && num6.toUpperCase() ==='F') {
  respuesta='F';
}
if(num5.toUpperCase() ==='F' && num6.toUpperCase() ==='V') {
  respuesta='F';
}
if(num5.toUpperCase() ==='V' && num6.toUpperCase() ==='F') {
  respuesta='F';
}
if(num5.toUpperCase() ==='V' && num6.toUpperCase() ==='V') {
  respuesta='V';
}
 }
 else{
  respuesta= "ERROR";
 }
       document.getElementById("targetDiv3").innerHTML =respuesta;
     }
   function disyuncion(){
      var num5= document.getElementById('textfield5').value;
      var num6= document.getElementById('textfield6').value;
      var respuesta;
 if ((num5.toUpperCase() === 'F' || num5.toUpperCase()  ==='V') && (num6.toUpperCase()  ==='F' || num6.toUpperCase()  ==='V')) {
if(num5.toUpperCase() ==='F' && num6.toUpperCase() ==='F') {
  respuesta='F';
}
if(num5.toUpperCase() ==='F' && num6.toUpperCase() ==='V') {
  respuesta='V';
}
if(num5.toUpperCase() ==='V' && num6.toUpperCase() ==='F') {
  respuesta='V';
}
if(num5.toUpperCase() ==='V' && num6.toUpperCase() ==='V') {
  respuesta='V';
}
 }
 else{
  respuesta= "ERROR";
 }
       document.getElementById("targetDiv3").innerHTML =respuesta;
     }