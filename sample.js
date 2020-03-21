function clickBtn1(){
	// 値を取得
	const ta1 = document.form1.textarea1.value; 
	//document.getElementById("span1").textContent = ta1;
	if(ta1 === ans.toString()){
		document.getElementById("YN").textContent = "正解!";
		problem, ans = makeProblem();
		cnt++;
		document.form1.textarea1.value = "";
		document.getElementById("count").textContent = cnt;
	}
	else
	document.getElementById("YN").textContent = "残念!";
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function makeProblem(){
	var left = getRandomInt(20);
	var right = getRandomInt(20);
	
	var tmp;
	if(right === 0) tmp = 3;
	else if(left%right==0){
	    tmp = 4;
	}else tmp = 3;
	var op = getRandomInt(tmp);
	var str;
	var ans;
	if(op===0) {
	    str = '+';
	    ans = left + right;
	}
	if(op===1) {
	    str = '-';
	    ans = left - right;
	}
	if(op===2) {
	    str = '×';
	    ans = left * right;
	}
	if(op===3) {
	    str = '÷';
	    ans = left / right;
	}
	var problem = left.toString() + str + right.toString();
	document.getElementById("problem").textContent = problem;
	return problem, ans;
}
var cnt = 0;
var problem, ans = makeProblem();
document.getElementById("count").textContent = 0;



