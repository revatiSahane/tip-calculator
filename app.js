let begin = document.getElementById('calculate');
begin.addEventListener('click' , start);

function start(){
	let bill= Number(document.getElementById('amount').value);
	let tip = Number(document.getElementById('services').value);
	let persons = Number(document.getElementById('people').value);
	calculate(bill, tip , persons);
	
}

function calculate(bill , tip ,persons){
	if(bill >0 && tip && persons >0){
		let tipAmount = bill*tip;
		let tipPerPerson = (tipAmount/persons).toFixed(2);
		
		let totalAmount =( bill+tipAmount).toFixed(2);
		let amountPerPerson=( totalAmount/persons).toFixed(2);
		
		let tPP = document.getElementById('tip-person').value = tipPerPerson;
		let sA = document.getElementById('final-amount').value = amountPerPerson;
		
	}else{
		if(bill <=0 || bill==""){
			alert('Please enter valid bill amount');
		}
		else if(persons =="" ||  persons <=0){
			alert('Enter number of people');
		}else if(tip ==0){
			alert('Select tip');
		}
			
	}
		
}

let reset = document.getElementById('reset');
reset.addEventListener('click', ()=>{
	document.getElementById('amount').value = "";
	document.getElementById('people').value = "";
	document.getElementById('services').value = "Select";
	document.getElementById('final-amount').value = "";
	let tPP = document.getElementById('tip-person').value = "";
});
	