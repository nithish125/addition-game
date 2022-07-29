var arrheader=[11,11,13,15,12]
var arrheader1=[11,10,15,5,9]
var arrheader2=[12,3,17,13,11]
var arrheader3=[5,8,7,8,14]
var arrheader4=[9,6,5,10,12]
var arre=[]
 var  y =neww()
  function neww(){
    var ree=[]
var que=document.querySelector(".que")
var o=["7+4","2+8","9+3","6+5","4+8"]
for(i=0;i<1;i++)
{ 
    let ran=Math.floor(Math.random()*o.length);
      que.innerHTML=o[ran];
      o.splice(ran,1)
      //console.log(o)
      //console.log(que)
      let sp1=que.innerHTML
      let sp=sp1.split('');
      console.log(sp1)
     
     if(ree){
      ree.push(sp1)
     }
     console.log(ree.includes(sp1))
     console.log(ree)
      let fin=parseInt( sp[0])+ parseInt(sp[2])
    console.log(fin)
    return fin
}
}
 y=neww()
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
   // console.log(a.innerHTML)
 // console.log(y)
    if(a.innerHTML==y){
        //console.log("hi")
      y= neww()

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

