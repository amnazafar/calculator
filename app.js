function getnumber(num){
   
    var result=document.getElementById("result");
    result.value+=num;
}



function is(){
    var result=document.getElementById("result")
    result.value=eval(result.value)
}

function clearresult(){
    var result=document.getElementById("result")
    result.value = ""
}


