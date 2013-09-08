function zachlatta() {
  console.log("Hello world!");
}


function arctangent1759(){
	document.body.innerHTML+="<div id='pointlessElongatedStringOfCharacters' style='background-color:rgba(0,0,0,.7);left:200px;top:200px;position:absolute;width:210px;height:210px;border:1px solid black;border-radius:105px;'><center><br/><br/><br/><br/><img src='http://localhost:5000/tex/$x^2+y^2=r$'/></center></div>";
	var vx=Math.random()*10;
	var vy=Math.random()*10;
	var vr=Math.ceil(Math.random()*10);
	var r = 0;
	var vg=Math.ceil(Math.random()*10);
	var g = 0;
	var vb=Math.ceil(Math.random()*10);
	var b = 0;
	function extractNum(x){
		return Number(x.slice(0,x.length-2));
	}
	setInterval(function(){
		var el=document.getElementById("pointlessElongatedStringOfCharacters");
		var x = extractNum(el.style.left)
		var y = extractNum(el.style.top)
		if (x+210+vx > window.innerWidth || x+vx < 0 ){
			vx=-vx;
		}
		if (y+210+vy > window.innerHeight || y+vy < 0 ){
			vy=-vy;
		}
		el.style.left=x+vx+"px";
		el.style.top=y+vy+"px";
		r=(r+vr)%255;
		g=(g+vg)%255;
		b=(b+vb)%255;
		el.style.backgroundColor="rgba("+r+","+g+","+b+",0.7)"
		if (Math.random()<0.05){
			document.body.innerHTML+="<div style='background-color:rgba("+r+","+g+","+b+",.7);left:"+x+"px;top:"+y+"px;position:absolute;width:30px;height:30px;border:1px solid black;border-radius:15px;z-index:300;'><center><br/><br/><br/><br/></center></div>";
		}
	},15);
}

$(document).ready(function(){
	zachlatta();
	arctangent1759();
})
