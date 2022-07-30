var arrheader=[11,11,13,15,12]
var arrheader1=[11,10,15,5,9]
var arrheader2=[12,3,17,13,11]
var arrheader3=[5,8,7,8,14]
var arrheader4=[9,6,5,10,12]
var arre=[],emp=[];
var cir=document.createElement("div")
    cir.setAttribute("class","cirs")
    var ins=document.createElement("div")
    ins.setAttribute("class","clip")
    cir.append(ins);
    var bd= document.querySelector(".bodyy");
    bd.append(cir);
    var ree=[],y;

  function neww(){
    var que=document.querySelector(".que");
    var o=["7+4","2+8","9+3","6+5","4+8","8+7","9+5","9+8"];
    var ran=Math.floor(Math.random()*o.length);
    if(ree.indexOf(ran)==-1){
    que.innerHTML=o[ran];
    let sp1=que.innerHTML;
    let sp=sp1.split('');
    var fin=parseInt( sp[0])+ parseInt(sp[2]);
    ree.push(ran);
    console.log(ree);
    return fin;

    }else{
      ran=Math.floor(Math.random()*o.length);
      return fin;
    }
  }

 y=neww();
var d=document.querySelector(".dd");
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

  }
  d.append(rr);
  arre.forEach((a)=>{
    a.addEventListener("click",vl);
    function vl(){
    if(a.innerHTML==y){
      y= neww();
        a.setAttribute("class","blu");
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

