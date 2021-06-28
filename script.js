var xth1,xth2,xth3;
var xitamil,xienglish,ximaths,xiphysics,xichemistry,xibiocc;
var xiitamil,xiienglish,xiimaths,xiiphysics,xiichemistry,xiibiocc;
var a,b,c,d,total;


function TotalCalc()
{

    xth1=parseInt(document.getElementById("1st-Highest").value);
    xth2=parseInt(document.getElementById("2nd-Highest").value);
    xth3=parseInt(document.getElementById("3rd-Highest").value);
    xitamil=parseInt(document.getElementById("Tamil-11th Mark").value);
    xienglish=parseInt(document.getElementById("English-11th Mark").value);
    ximaths=parseInt(document.getElementById("Maths-11th Mark").value);
    xiphysics=parseInt(document.getElementById("Physics-11th Mark").value);
    xichemistry=parseInt(document.getElementById("Chemistry-11th Mark").value);
    xibiocc=parseInt(document.getElementById("Biology/Computer Science-11th Mark").value);
    xiitamil=parseInt(document.getElementById("Tamil-12th Internal Mark").value);
    xiienglish=parseInt(document.getElementById("English-12th Internal Mark").value);
    xiimaths=parseInt(document.getElementById("Maths-12th Internal Mark").value);
    xiiphysics=parseInt(document.getElementById("Physics-12th Practical+Internal").value);
    xiichemistry=parseInt(document.getElementById("Chemistry-12th Practical+Internal").value);
    xiibiocc=parseInt(document.getElementById("Biology/Computer Science-12th Practical+Internal Mark").value);
	  calculatexth();
      calculatexith();
      calculatexiip();
      calculatexiitotal();


    
}

function calculatexith()
{
    var t=xitamil;
    t=t*(20/90);
    document.getElementById("ltamil").innerHTML = t.toFixed(0); 
    var e=xienglish;
    e=e*(20/90);
    document.getElementById("lenglish").innerHTML = e.toFixed(0); 
    var m=ximaths;
    m=m*(20/90);
    document.getElementById("lmaths").innerHTML=m.toFixed(0);
    var ph=xiphysics;
    ph=ph*(20/70);
    document.getElementById("lphysics").innerHTML=ph.toFixed(0);
    var ch=xichemistry;
    ch=ch*(20/70);
    document.getElementById("lchemistry").innerHTML=ch.toFixed(0);
    var bcc=xibiocc;
    bcc=bcc*(20/70);
    document.getElementById("lbiocc").innerHTML=bcc.toFixed(0);

}

function calculatexth(){
	a=xth1+xth2+xth3;
    a=a/6;
    total=a;
    document.getElementById("tenth").innerHTML = a.toFixed(0);
    document.getElementById("tenth1").innerHTML = a.toFixed(0);
    document.getElementById("tenth3").innerHTML = a.toFixed(0);
    document.getElementById("tenth4").innerHTML = a.toFixed(0);
    document.getElementById("tenth5").innerHTML = a.toFixed(0);
    document.getElementById("tenth2").innerHTML=a.toFixed(0);

}

function calculatexiip(){
	var t=xiitamil;
    var e=xiienglish;
    var mt=xiimaths;
    var ph=xiiphysics;
    var ch=xiichemistry;
    var bcc=xiibiocc;
    document.getElementById("twtamil").innerHTML = t*3;
    document.getElementById("twenglish").innerHTML = e*3; 
    document.getElementById("twmaths").innerHTML = mt*3;
    document.getElementById("twphysics").innerHTML = ph;
    document.getElementById("twchemistry").innerHTML = ch;
    document.getElementById("twbiocc").innerHTML = bcc;

	
}

function calculatexiitotal(){
	
document.getElementById("twetamil").innerHTML=parseInt(document.getElementById("tenth").value)+parseInt(document.getElementById("ltamil").value)+parseInt(document.getElementById("twtamil").value);
document.getElementById("tweenglish").innerHTML=parseInt(document.getElementById("tenth2").value)+parseInt(document.getElementById("lenglish").value)+parseInt(document.getElementById("twenglish").value);
document.getElementById("twemaths").innerHTML=parseInt(document.getElementById("tenth1").value)+parseInt(document.getElementById("lmaths").value)+parseInt(document.getElementById("twmaths").value);
document.getElementById("twephysics").innerHTML=parseInt(document.getElementById("tenth3").value)+parseInt(document.getElementById("lphysics").value)+parseInt(document.getElementById("twphysics").value);
document.getElementById("twechemistry").innerHTML=parseInt(document.getElementById("tenth4").value)+parseInt(document.getElementById("lchemistry").value)+parseInt(document.getElementById("twchemistry").value);
document.getElementById("twebiocc").innerHTML=parseInt(document.getElementById("tenth5").value)+parseInt(document.getElementById("lbiocc").value)+parseInt(document.getElementById("twbiocc").value);
document.getElementById("totals").innerHTML=parseInt(document.getElementById("twetamil").value)+parseInt(document.getElementById("tweenglish").value)+parseInt(document.getElementById("twemaths").value)+parseInt(document.getElementById("twephysics").value)+parseInt(document.getElementById("twechemistry").value)+parseInt(document.getElementById("twebiocc").value)
}


