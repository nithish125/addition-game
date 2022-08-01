var arrheader=[11,11,13,15,12];
var arrheader1=[11,10,15,5,9];
var arrheader2=[12,3,17,13,11];
var arrheader3=[5,8,7,8,14];
var arrheader4=[9,6,16,10,12];
var arre=[],emp=[];
var cir=document.createElement("div");
    cir.setAttribute("class","cirs");
    var ins=document.createElement("div");
    ins.setAttribute("class","clip");
    cir.append(ins);
    var bd= document.querySelector(".bodyy");
    bd.append(cir);
    var ree=[],y;
    var o=["7+4","2+8","9+3","6+5","4+8","8+7","9+5","9+8","6+3","1+4","8+3","2+1","6+2","4+2","6+7","6+1","3+2","9+6","9+7","7+2","7+5","9+2","8+5","7+1","3+7"];

  function neww(){
    if(o.length!=0){
    var que=document.querySelector(".que"),emptyarr=[];
    var ran=Math.floor(Math.random()*o.length);
    que.innerHTML=o[ran];
    let sp1=que.innerHTML;
    let sp=sp1.split('');
    var fin=parseInt( sp[0])+ parseInt(sp[2]);
    // ree.push(ran);
    // console.log(ree);
    for (let i = 0; i < o.length; i++) {
      if(i==ran){
        continue;
      }
      emptyarr.push(o[i]);   
    }
    o=emptyarr;
    console.log(o);
    
    return fin;
  } 
  }
 y=neww();
var d=document.querySelector(".dd");
d.style.backgroundColor = "blue";
function looping(arra){
    var rr=document.createElement("tr");
for (var j = 0; j < arra.length; j++) {
    var th = document.createElement('th'); //column
    var text = document.createTextNode(arra[j]); //cell
    th.appendChild(text);
    th.setAttribute("class","bor")
    rr.append(th) 
    arre.push(th);
    emp.push(arra[j]);
    console.log(rr)
  }
  d.append(rr);
  arre.forEach((a)=>{
    a.addEventListener("click",vl);
    function vl(){
     var c=0;
    if(a.innerHTML==y && o.length != 0){
      c=o.length;
      console.log()
      y= neww();
        a.setAttribute("class","blu");
         a.style.backgroundColor = "yellow";
         a.style.color = "blue";  
    }
    if(a.innerHTML==y && c == 0){
      d.style.backgroundColor = "orange";
    }
    }
});
  d.setAttribute("class","bor1");
  d.setAttribute("border","2px solid");
}
looping(arrheader);
looping(arrheader1);
looping(arrheader2);
looping(arrheader3);
looping(arrheader4);