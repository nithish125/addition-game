var arrheader=[11,11,13,15,12]
var arrheader1=[11,10,15,5,9]
var arrheader2=[12,3,17,13,11]
var arrheader3=[5,8,7,8,14]
var arrheader4=[9,6,5,10,12]
var arre=[]
function neww(){
var que=document.querySelector(".que")
var o=["7+4","2+8","9+3"]

for(i=0;i<2;i++)
{ 
    let ran=Math.floor(Math.random()*o.length);
    
      que.innerHTML=o[ran];
      o.splice(ran,1)
      console.log(ran)
      console.log(que)
      
}
}
neww()
//console.log(arre)
var d=document.querySelector(".dd")
function looping(arra){
    var rr=document.createElement("tr")
for (var j = 0; j < arra.length; j++) {
    var th = document.createElement('th'); //column
    var text = document.createTextNode(arra[j]); //cell
    th.appendChild(text);
    th.setAttribute("class","bor")
    rr.append(th) 
    
    arre.push(th)
  }
  d.append(rr)
  arre.forEach((a)=>{
    a.addEventListener("click",vl) 
    function vl(){
    console.log(a.innerHTML)
    neww()
    if(a.innerHTML=="11"){
        console.log("hi")
        a.setAttribute("class","blu")
    }
    }
})
  //console.log(arre)
  d.setAttribute("class","bor1")
  d.setAttribute("border","2px solid")
}

looping(arrheader)
looping(arrheader1)
looping(arrheader2)
looping(arrheader3)
looping(arrheader4)

