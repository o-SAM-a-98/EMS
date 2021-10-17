let optionSelected = document.getElementById("Select").value;
let myFunction= function() {
 optionSelected = document.getElementById("Select").value;
if(optionSelected==="time"){
    document.getElementById("consSection").style.display = "none";
    document.getElementById("timeSection").style.display = "block";
}
else 
{
    document.getElementById("timeSection").style.display = "none";
    document.getElementById("consSection").style.display = "block";
}}
var i=4;
let add=function(){
    
    var applianceListAddBox=document.getElementById("applianceList");
        applianceListAddBox.innerHTML += `<div class="column is-one-quarter" id="element${i+1}""><div class=input><input type="checkbox" name="Device to control" value="device3"><label for="T.Ap3" class="pl-6">Appliance ${i+1} </label></div></div>`;
    var applianceListAddFigure = document.getElementById("figuresList");
        applianceListAddFigure.innerHTML += `<div class="column is-6 has-text-centered pb-6" id=figure${i+1}><h3 class="is-size-5 has-text-weight-bold">Appliance ${i+1}</h3><div ID="Appliance4"><label for="appliances">view</label><select name="view" class="appliances"><option value="weekly">weekly</option><option value="monthly">monthly</option><option value="yearly">yearly</option></select></div></div>`;
    i++;
    console.log('pressed');
}
let REM=function(){
    var id= "element"+i;
    var targ2=document.getElementById(id);
    targ2.remove();
    var targ2_2=document.getElementById("figure"+i);
    targ2_2.remove();
    i=i-1;
    console.log(i);
}
let glow=function(){
    if (document.getElementById("T.Ap4").checked == true){
        document.getElementById("box4").setAttribute("class", "input has-background-success");
    }else {
        document.getElementById("box4").setAttribute("class", "input");
    }
    
}


