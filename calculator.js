function clrscr(){
    const result= document.getElementById("result");
    const output= document.getElementById("output");
    result.textContent= "";
    output.textContent= "";
}

function display(value){
    const output= document.getElementById("result");
    const valuetodisplay= value;
    const c=output.textContent;
    const d= c+ value;
    if(d.length>17)
    {
            return;
    }
    output.textContent+= valuetodisplay;
}

function calculate()
{
    var p = document.getElementById("result").innerText;
    var q= eval(p);
    if(q=="Infinity")
    {
        q="Undefined";
    }
    else {
        q=q.toString();
        if(q.length>16)
        {
            q=q.substring(0,16);
        }
    }
    const output= document.getElementById("output");
    const valuetodisplay= q;
    output.textContent= valuetodisplay; 
}

function bck(){
    let a= document.getElementById("result");
    const current= a.textContent;
    const newstring= current.substring(0,current.length-1);
    a.textContent=newstring;
}


