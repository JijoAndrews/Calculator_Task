
var value;
var texval="";
var displval="";
var numlist=[];
let totalavailable=false;

var inputboxelement=createinputtag("input","type","text","name","calc","id","inputcal","0");
var displaytext=createtexttag("long","class","displayvalue","0");
inputboxelement.addEventListener("keyup",logKey);

var text1=createbuttontag("button","class","btn btn-primary rounded-circle p-3 lh-1","id","btn_1","1","onclick",`btninput(${1})`);
var text2=createbuttontag("button","class","btn btn-primary rounded-circle p-3 lh-1","id","btn_2","2","onclick",`btninput(${2})`);
var text3=createbuttontag("button","class","btn btn-primary rounded-circle p-3 lh-1","id","btn_3","3","onclick",`btninput(${3})`);
var text33=createbuttontag("button","class","btn btn-warning rounded-circle p-3 lh-1","id","btn_33","*","onclick",`btninput("*")`);

var text4=createbuttontag("button","class","btn btn-primary rounded-circle p-3 lh-1","id","btn_4","4","onclick",`btninput(${4})`);
var text5=createbuttontag("button","class","btn btn-primary rounded-circle p-3 lh-1","id","btn_5","5","onclick",`btninput(${5})`);
var text6=createbuttontag("button","class","btn btn-primary rounded-circle p-3 lh-1","id","btn_6","6","onclick",`btninput(${6})`);
var text66=createbuttontag("button","class","btn btn-warning rounded-circle p-3 lh-1","id","btn_66","-","onclick",`btninput("-")`);

var text7=createbuttontag("button","class","btn btn-primary rounded-circle p-3 lh-1","id","btn_7","7","onclick",`btninput(${7})`);
var text8=createbuttontag("button","class","btn btn-primary rounded-circle p-3 lh-1","id","btn_8","8","onclick",`btninput(${8})`);
var text9=createbuttontag("button","class","btn btn-primary rounded-circle p-3 lh-1","id","btn_9","9","onclick",`btninput(${9})`);
var text99=createbuttontag("button","class","btn btn-warning rounded-circle p-3 lh-1","id","btn_99","+","onclick",`btninput("+")`);


var text10=createbuttontag("button","class","btn btn-danger rounded-circle p-3 lh-1","id","btn_10","C","onclick",`resetval()`);
var text11=createbuttontag("button","class","btn btn-primary rounded-circle p-3 lh-1","id","btn_11","0","onclick",`btninput(${0})`);
var text12=createbuttontag("button","class","btn btn-success rounded-circle p-3 lh-1","id","btn_12","=","onclick",`cacval()`);
var text13=createbuttontag("button","class","btn btn-warning rounded-circle p-3 lh-1","id","btn_13","/","onclick",`btninput("/")`);



var class1=createclasstag("div","class","outerbox");
var class2=createclasstag("div","class","innerbox");

var butnrow1=createclasstag("div","class","clacbtn");
var butnrow2=createclasstag("div","class","clacbtn");
var butnrow3=createclasstag("div","class","clacbtn");
var butnrow4=createclasstag("div","class","clacbtn");


function createclasstag(tag ,tagtype,tagval)
{
    var element=document.createElement(tag);
    element.setAttribute(tagtype,tagval);
    return element;
}

function createtexttag(tag ,tagtype,tagval,content)
{
    var element=document.createElement(tag);
    element.setAttribute(tagtype,tagval);
    if(content)
        {
            element.innerHTML=content;
        }
    return element;
}

function createinputtag(tag ,tagtype,tagval,attr1,attr1val,attr2,attr1val2,content)
{
    var element=document.createElement(tag);
    element.setAttribute(tagtype,tagval);
    element.setAttribute(attr1,attr1val);
    element.setAttribute(attr2,attr1val2);

    if(content)
        {
            element.value=content;
        }
    return element;
}

function createbuttontag(tag,tagtype,tagval,id,idval,content,clickfun,clikval)
{
 var tagelement = document.createElement(tag);
 tagelement.setAttribute(tagtype,tagval);
 tagelement.setAttribute(id,idval);
 tagelement.setAttribute(clickfun,clikval);


  if(content){
        tagelement.innerHTML=content;
    }
 return tagelement;
}

function logKey(e) 
{
   console.log(` ${e.code}`);
   valuefrominput(e.target.value);

   if(e.code==="Enter")
    {
        cacval();
    }
}

function btninput(val)
{

    if(texval=="" && isNaN(val))
    {
        console.log("no value before charecter");
        texval="0";
    }else if(totalavailable && texval && isNaN(texval[texval.length-1]) && !isNaN(val))
    {
        console.log("check:",totalavailable,texval,"---last wrd is charecter:",isNaN(texval[texval.length-1]),"--cur val:",!isNaN(val));
       texval="";
       totalavailable=false;
    }else if(totalavailable && texval && isNaN(texval[texval.length-1]) && isNaN(val))
    {
        totalavailable=false;
    }else if(isNaN(texval[texval.length-1]) && isNaN(val))
    {
        console.log("arthemetic symbol already exsit");
        val="";
    }

    texval+=val;
    console.log(texval,totalavailable);
    displval=texval;
    displaytext.innerHTML=displval;
    inputboxelement.value=texval;

}

function valuefrominput(val)
{

    if(totalavailable && val && !isNaN(val[val.length-1]))
    {

        console.log("check:" +val);
        resetval();
        val=val[val.length-1];
        inputboxelement.value=val;
        //alert("reenter");
        texval="";
    }

    texval=val;
    console.log(texval,totalavailable);
    displval=texval;
    displaytext.innerHTML=displval;
    totalavailable=false;

}

function cacval()
{
    
    if(texval && isNaN(texval[texval.length-1]))
    {
        alert("Enter valid input");
        console.log(`the value when not completed :${value}`);
    }else if(texval)
    {

        try
        {
            var finalval=eval(texval);
            totalavailable=true;
            console.log(texval +"=" +finalval +"," +totalavailable);
            displaytext.innerHTML=`${texval}=${finalval}`;
            texval=finalval;

        }catch(err)
        {
            alert("Invalid assignment");
            console.log("the error:"+err);
        }
   
    }

    inputboxelement.value=texval;

}

function resetval()
{
    finalval="";
    texval="";
    displval=texval;
    displaytext.innerHTML=displval;
    inputboxelement.value="";
    totalavailable=false;

}

butnrow1.append(text1,text2,text3,text33);
butnrow2.append(text4,text5,text6,text66);
butnrow3.append(text7,text8,text9,text99);
butnrow4.append(text10,text11,text12,text13);


class2.append(displaytext,inputboxelement,butnrow1,butnrow2,butnrow3,butnrow4);
class1.append(class2);
document.body.append(class1);



