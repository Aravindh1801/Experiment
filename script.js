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

 function adding1() {
   list=
 };
