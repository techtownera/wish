
let bt = document.getElementById('btnid');

bt.onclick = ()=>{
 let wsh = document.getElementById('wishid');
//  wsh.style.visibility= "visible";
console.log("inside onclick");

if(wsh.style.visibility === "hidden"){
    console.log("true");
    wsh.style.visibility="visible";
}
else{
    wsh.style.visibility="hidden";
}


}