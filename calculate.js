const timeDisplay = document.getElementById("time");

setInterval(()=>{
    var date = new Date();
    timeDisplay.innerHTML = date.toLocaleTimeString();

}, 1000);
        
var r=document.getElementById("result");
var eq=document.getElementById("input").value;

function clean(){
    r.innerHTML="";
    document.getElementById("input").value="";
}
function del(){
   var n= document.getElementById("input").value.slice(0,-1);
   document.getElementById("input").value=n;
}

function compute(){
    var eq=document.getElementById("input").value;
    try{
        var result=eval(eq);
        r.innerHTML=result;
    }
    catch(error){
        r.innerHTML="syntax error"

    }
    
      
}
