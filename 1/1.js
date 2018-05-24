var old=null;
var op=null;
function insert(num){
    document.calculator.sd.value=document.calculator.sd.value+num;
    if(old==null){
        old=num;
    }
    else if(old!=null && op==null){
        old=old+''+num;
    }
    else if(old!=null && op!=null){
        if(op=='+'){
            old=parseFloat(old) +parseFloat(num)
            op=null;
        }
        else if(op=='-'){
            old=parseFloat(old)-parseFloat(num)
            op=null;
        }
        else if(op=='*'){
            old=parseFloat(old)*parseFloat(num)
            op=null;
        }
        else if(op=='/'){
            old=parseFloat(old)/parseFloat(num)
            op=null;
            
        }
       
    }
}

function opaa(val){
    document.calculator.sd.value=document.calculator.sd.value+val;
    op=val;
}
function cl(){
    document.calculator.sd.value="";
    old=null;
    op=null;
}
function es(){
    document.calculator.sd.value=old;
    
}