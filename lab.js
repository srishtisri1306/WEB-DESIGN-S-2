function check(){


let n = document.getElementById("number").value;
let result;
 if(n%2==0){
    result= "even";

 }
 else{
    result= "odd";
 }
 document.getElementById("result").innerHTML = "result= "+result;


}

