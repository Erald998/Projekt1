// JavaScript Document

/*
	
	var foto=document.getElementById("img");
	var imgarray=["1.svg","2.png","download.jpg"];
	var imgindex=0;
	
function ndrshfoto(){
	
	foto.setAttribute("src",imgarray[imgindex]);
	imgindex++;
	if(imgindex>imgarray.length){
		imgindex=0;
	}
}	
	
	
	
var ndrsh=setInterval(ndrshfoto
,2000 );
foto.onclick=function(){
	clearInterval(ndrsh);
	
	
};


	
	*/
var b=document.getElementById("aa");
b.onclick=window.print();/*
b.onclick=function(){
	var a=confirm("po a jo");
	if(a==true){
	alert("fdjsjj");}
				else{
					
					alert("aaaaa");
				}
	
	
};

*/
window.onload=function(){
	
	$("#accordion").accordion();
};