// JavaScript Document

	 
		 
	/*function puna(){	 
	 document.getElementById("ktu").onclick=function(){
			 if( document.getElementById("ktu").checked){
			 
			 document.getElementById("hid").style.display="block";
			 
			}
			 
			 else{
				 document.getElementById("hid").style.display="none";
			 }
		 
			 
			 
			 
			 
			 
		 };
		 
			 document.getElementById("hid").style.display="none";
		
	
		 }*/
/*
var cp=0;
var interval;

function leksion(){
	var a=document.getElementById("hid");
	a.style.position="absolute";
	a.style.left="200px";
	a.style.top="300px";
	
		
	interval=setInterval(leksion2,10);
	
}
function leksion2(){
cp=cp+50;
	var b=document.getElementById("hid");
	
	b.style.left=cp+"px";
	if(cp>1000){
		clearInterval(interval);
	}
	
	
}






*/

window.onload=function(){
		//prova ();
		//erald();
		//setTimeout(leksion(),1000);
	
	 };
/*
function erald(){
	alert("wtf");
	$("#email").addClass("er");
	$("#hid").addClass("er");
	$(".er").hide(4000);
	$(".er").click(function(){
		$(".er").text("Erald");
		
	});
}*/
/*
function prova(){
	
	
	function Pike(x,y){
		this.x=x;
		this.y=y;
		
	}
	
	Pike.prototype.toString=function(){
		console.log("kordinata x eshte "+this.x+"kordinata e y eshte "+this.y);
		
	};
	
	var erald = new Pike(10,10);
	erald.toString();
	
}
*//*
var minuta=document.getElementById("ktu").value;

 function sec1(){
	 document.write("Dds");
	 	 var min=Math.floor(minuta);
	var sec=(minuta-min)*10;
	 var a=document.getElementById("clock");
	 
	 a.innerHTML= min+":"+sec;
	 sec--;
	 alert("dsnn");
	 if(sec<0){
		 if(min<0){
			 clearInterval(intervalHandle);
			 return;
		 }
		 else{ min--;
			 sec=60;}
	 }
	 
 }



function fillo(){
	 intervalHandle = setInterval(sec1, 1000);
	
	
	
	
	
	
	
	
	
	
	
	
	*/
	
	
window.onload=function(){
	
	$("#accordion").accordion();
};




