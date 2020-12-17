(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var list=[

  {
  Name:"Aravindhan A",
  Age:"19",
  Branch:"Civil",
  RollNo:"04"
},

{
  Name:"Sriram L",
  Age:"20",
  Branch:"Civil",
  RollNo:"28"
},

{
  Name:"Sathish VJ",
  Age:"19",
  Branch:"Mech",
  RollNo:"23"
}

];

function check(){
  let inputName=document.getElementById("name").value;
  let inputRollNo=document.getElementById("RollNo").value;
  for (var i = 0; i < list.length; i++) {
    list[i];
    if (list[i].Name===inputName||list[i].RollNo===inputRollNo) {
      document.getElementById("1").innerHTML="Name"+" "+":"+" "+list[i].Name;
      document.getElementById("2").innerHTML="Age"+" "+":"+" "+list[i].Age;
      document.getElementById("3").innerHTML="Branch"+" "+":"+" "+list[i].Branch;
      document.getElementById("4").innerHTML="Roll No."+" "+":"+" "+list[i].RollNo;
    }

  }
};
var e;
function adding(){
   var a,b,c,d;
   a=document.getElementById("name1").value;
   b=document.getElementById("age1").value;
   c=document.getElementById("branch1").value;
   d=document.getElementById("roll1").value;
   e={
     Name:a,
     Age:b,
     Branch:c,
     RollNo:d
   };
 };

 

},{}]},{},[1]);
