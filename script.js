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
    document.getElementById("ltamil").innerHTML = t.toFixed(2); 
    var e=xienglish;
    e=e*(20/90);
    document.getElementById("lenglish").innerHTML = e.toFixed(2); 
    var m=ximaths;
    m=m*(20/90);
    document.getElementById("lmaths").innerHTML=m.toFixed(2);
    var ph=xiphysics;
    ph=ph*(20/70);
    document.getElementById("lphysics").innerHTML=ph.toFixed(2);
    var ch=xichemistry;
    ch=ch*(20/70);
    document.getElementById("lchemistry").innerHTML=ch.toFixed(2);
    var bcc=xibiocc;
    bcc=bcc*(20/70);
    document.getElementById("lbiocc").innerHTML=bcc.toFixed(2);

}

function calculatexth(){
	a=xth1+xth2+xth3;
    a=a/6;
    total=a;
    document.getElementById("tenth").innerHTML = a.toFixed(2);
    document.getElementById("tenth1").innerHTML = a.toFixed(2);
    document.getElementById("tenth3").innerHTML = a.toFixed(2);
    document.getElementById("tenth4").innerHTML = a.toFixed(2);
    document.getElementById("tenth5").innerHTML = a.toFixed(2);
    document.getElementById("tenth2").innerHTML=a.toFixed(2);

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
	

document.getElementById("twetamil").innerHTML=(parseFloat(document.getElementById("tenth").value)+parseFloat(document.getElementById("ltamil").value)+parseFloat(document.getElementById("twtamil").value)).toFixed(2);
document.getElementById("tweenglish").innerHTML=(parseFloat(document.getElementById("tenth2").value)+parseFloat(document.getElementById("lenglish").value)+parseFloat(document.getElementById("twenglish").value)).toFixed(2);
document.getElementById("twemaths").innerHTML=(parseFloat(document.getElementById("tenth1").value)+parseFloat(document.getElementById("lmaths").value)+parseFloat(document.getElementById("twmaths").value)).toFixed(2);
document.getElementById("twephysics").innerHTML=(parseFloat(document.getElementById("tenth3").value)+parseFloat(document.getElementById("lphysics").value)+parseFloat(document.getElementById("twphysics").value)).toFixed(2);
document.getElementById("twechemistry").innerHTML=(parseFloat(document.getElementById("tenth4").value)+parseFloat(document.getElementById("lchemistry").value)+parseFloat(document.getElementById("twchemistry").value)).toFixed(2);
document.getElementById("twebiocc").innerHTML=(parseFloat(document.getElementById("tenth5").value)+parseFloat(document.getElementById("lbiocc").value)+parseFloat(document.getElementById("twbiocc").value)).toFixed(2);
document.getElementById("totals").innerHTML=(parseFloat(document.getElementById("twetamil").value)+parseFloat(document.getElementById("tweenglish").value)+parseFloat(document.getElementById("twemaths").value)+parseFloat(document.getElementById("twephysics").value)+parseFloat(document.getElementById("twechemistry").value)+parseFloat(document.getElementById("twebiocc").value)).toFixed(2);
var mtt=parseInt(document.getElementById("twemaths").value);
var phh=parseInt(document.getElementById("twephysics").value);
var chh=parseInt(document.getElementById("twechemistry").value);
document.getElementById("cutoff").innerHTML=(mtt+((phh+chh)/2));


}


