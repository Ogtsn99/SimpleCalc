
function clickBtn1() {
	// 値を取得
    'use strict';
	const var ta1 = document.form1.textarea1.value; 
	document.getElementById("span1").textContent = ta1;
}
function clickBtn2() {
	document.getElementById("span1").textContent = "";
}