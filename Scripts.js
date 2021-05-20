const btn_00 = document.getElementById("button00");
const btn_01 = document.getElementById("button01");
const btn_02 = document.getElementById("button02");
const btn_10 = document.getElementById("button10");
const btn_11 = document.getElementById("button11");
const btn_12 = document.getElementById("button12");
const btn_20 = document.getElementById("button20");
const btn_21 = document.getElementById("button21");
const btn_22 = document.getElementById("button22");
const btn_reset = document.getElementById("reset_button");
const body = document.getElementsByTagName("BODY")[0];

let global_counter = 0;
let global_counter2 = 0;
let click_counter =0;

btn_00.addEventListener("click", changeSign00);
function changeSign00(){
		btn_00.style.color = "#0e608f";
		click_counter++;
		checker();
		if(global_counter%2 === 0){
		btn_00.innerHTML = "X";
		global_counter = global_counter + 1;
		btn_00.disabled = true;
	}else{
		btn_00.innerHTML = "O";
		global_counter = global_counter + 1;
		btn_00.disabled = true;
	}
}
btn_01.addEventListener("click", changeSign01);
function changeSign01(){
	btn_01.style.color = "#0e608f";
	click_counter++;
	checker();
	if(global_counter%2 === 0){
	btn_01.innerHTML = "X";
	global_counter = global_counter + 1;
	btn_01.disabled = true;
	}else{
	btn_01.innerHTML = "O";
	global_counter = global_counter + 1;
	btn_01.disabled = true;
	}
}
btn_02.addEventListener("click", changeSign02);
function changeSign02(){
	btn_02.style.color = "#0e608f";
	click_counter++;
	checker();
	if(global_counter%2 === 0){
		btn_02.innerHTML = "X";
		global_counter = global_counter + 1;
		btn_02.disabled = true;
	}else{
		btn_02.innerHTML = "O";
		global_counter = global_counter + 1;
		btn_02.disabled = true;
	}
}
btn_10.addEventListener("click", changeSign10);
function changeSign10(){
	btn_10.style.color = "#0e608f";
	click_counter++;
	checker();
	if(global_counter%2 === 0){
		btn_10.innerHTML = "X";
		global_counter = global_counter + 1;
		btn_10.disabled = true;
	}else{
		btn_10.innerHTML = "O";
		global_counter = global_counter + 1;
		btn_10.disabled = true;
	}
}
btn_11.addEventListener("click", changeSign11);
function changeSign11(){
	btn_11.style.color = "#0e608f";
	click_counter++;
	checker();
	if(global_counter%2 === 0){
		btn_11.innerHTML = "X";
		global_counter = global_counter + 1;
		btn_11.disabled = true;
	}else{
		btn_11.innerHTML = "O";
		global_counter = global_counter + 1;
		btn_11.disabled = true;
	}
}
btn_12.addEventListener("click", changeSign12);
function changeSign12(){
	btn_12.style.color = "#0e608f";
	click_counter++;
	checker();
	if(global_counter%2 === 0){
		btn_12.innerHTML = "X";
		global_counter = global_counter + 1;
		btn_12.disabled = true;
	}else{
		btn_12.innerHTML = "O";
		global_counter = global_counter + 1;
		btn_12.disabled = true;
	}
}
btn_20.addEventListener("click", changeSign20);
function changeSign20(){
	btn_20.style.color = "#0e608f";
	click_counter++;
	checker();
	if(global_counter%2 === 0){
		btn_20.innerHTML = "X";
		global_counter = global_counter + 1;
		btn_20.disabled = true;
	}else{
		btn_20.innerHTML = "O";
		global_counter = global_counter + 1;
		btn_20.disabled = true;
	}
}
btn_21.addEventListener("click", changeSign21);
function changeSign21(){
	btn_21.style.color = "#0e608f";
	click_counter++;
	checker();
	if(global_counter%2 === 0){
		btn_21.innerHTML = "X";
		global_counter = global_counter + 1;
		btn_21.disabled = true;
	}else{
		btn_21.innerHTML = "O";
		global_counter = global_counter + 1;
		btn_21.disabled = true;
	}
}
btn_22.addEventListener("click", changeSign22);
function changeSign22(){
	btn_22.style.color = "#0e608f";
	click_counter++;
	checker();
	if(global_counter%2 === 0){
		btn_22.innerHTML = "X";
		global_counter = global_counter + 1;
		btn_22.disabled = true;
	}else{
		btn_22.innerHTML = "O";
		global_counter = global_counter + 1;
		btn_22.disabled = true;
	}
}
function checker(){
	if(click_counter >= 5){
		const text00 = btn_00.innerHTML;
		const text01 = btn_01.innerHTML;
		const text02 = btn_02.innerHTML;
		const text10 = btn_10.innerHTML;
		const text11 = btn_11.innerHTML;
		const text12 = btn_12.innerHTML;
		const text20 = btn_20.innerHTML;
		const text21 = btn_21.innerHTML;
		const text22 = btn_22.innerHTML;

		if(text00 === "X" && text01 === "X" && text02 === "X"){
			btn_00.style.backgroundColor = "black";
			btn_01.style.backgroundColor = "black";
			btn_02.style.backgroundColor = "black";
			alert("X WON!");
		}else if(text00 === "O" && text01 === "O" && text02 === "O"){
			btn_00.style.backgroundColor = "black";
			btn_01.style.backgroundColor = "black";
			btn_02.style.backgroundColor = "black";
			alert("O WON!");
		}else if(text10 === "X" && text11 === "X" && text12 === "X"){
			btn_10.style.backgroundColor = "black";
			btn_11.style.backgroundColor = "black";
			btn_12.style.backgroundColor = "black";
			alert("X WON!");
		}else if(text10 === "O" && text11 === "O" && text12 === "O"){
			btn_10.style.backgroundColor = "black";
			btn_11.style.backgroundColor = "black";
			btn_12.style.backgroundColor = "black";
			alert("O WON!");
		}else if(text20 === "X" && text21 === "X" && text22 === "X"){
			btn_20.style.backgroundColor = "black";
			btn_21.style.backgroundColor = "black";
			btn_22.style.backgroundColor = "black";
			alert("X WON!");
		}else if(text20 === "O" && text21 === "O" && text22 === "O"){
			btn_20.style.backgroundColor = "black";
			btn_21.style.backgroundColor = "black";
			btn_22.style.backgroundColor = "black";
			alert("O WON!");
		}else if(text00 === "X" && text10 === "X" && text20 === "X"){
			btn_00.style.backgroundColor = "black";
			btn_10.style.backgroundColor = "black";
			btn_20.style.backgroundColor = "black";
			alert("X WON!");
		}else if(text00 === "O" && text10 === "O" && text20 === "O"){
			btn_00.style.backgroundColor = "black";
			btn_10.style.backgroundColor = "black";
			btn_20.style.backgroundColor = "black";
			alert("O WON!");
		}else if(text02 === "X" && text12 === "X" && text22 === "X"){
			btn_02.style.backgroundColor = "black";
			btn_12.style.backgroundColor = "black";
			btn_22.style.backgroundColor = "black";
			alert("X WON!");
		}else if(text02 === "O" && text12 === "O" && text22 === "O"){
			btn_02.style.backgroundColor = "black";
			btn_12.style.backgroundColor = "black";
			btn_22.style.backgroundColor = "black";
			alert("O WON!");
		}else if(text00 === "X" && text11 === "X" && text22 === "X"){
			btn_00.style.backgroundColor = "black";
			btn_11.style.backgroundColor = "black";
			btn_22.style.backgroundColor = "black";
			alert("X WON!");
		}else if(text00 === "O" && text11 === "O" && text22 === "O"){
			btn_00.style.backgroundColor = "black";
			btn_11.style.backgroundColor = "black";
			btn_22.style.backgroundColor = "black";
			alert("O WON!");
		}else if(text20 === "X" && text11 === "X" && text02 === "X"){
			btn_20.style.backgroundColor = "black";
			btn_11.style.backgroundColor = "black";
			btn_02.style.backgroundColor = "black";
			alert("X WON!");
		}else if(text20 === "O" && text11 === "O" && text02 === "O"){
			btn_20.style.backgroundColor = "black";
			btn_11.style.backgroundColor = "black";
			btn_02.style.backgroundColor = "black";
			alert("O WON!");
		}else if(text01 === "X" && text11 === "X" && text21 === "X"){
			btn_01.style.backgroundColor = "black";
			btn_11.style.backgroundColor = "black";
			btn_21.style.backgroundColor = "black";
			alert("X WON!");
		}else if(text01 === "O" && text11 === "O" && text21 === "O"){
			btn_01.style.backgroundColor = "black";
			btn_11.style.backgroundColor = "black";
			btn_21.style.backgroundColor = "black";
			alert("O WON!");
		}

	}
}

btn_reset.addEventListener("click", function(){
	document.location.reload();
	alert("Game Reset!");
});
