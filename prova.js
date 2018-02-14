
window.onload=function () {

};
var i=0;
var a=new Array('111.jpg','22.jpg','44.jpg','333.jpg');

function leftimg(){
    i++;
    if(i>3){
        i=0;
    }
    var left=document.getElementById("foto");
    left.style.backgroundImage="url("+a[i]+")";


}

function rightimg1(){


    i--;
    if(i<0){
        i=3;
    }
    var left=document.getElementById("foto")
    left.style.backgroundImage="url("+a[i]+")";


}
function rightimg() {
    setTimeout("rightimg1()", 1);

}


