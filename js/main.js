		let add1 = document.getElementById("add");
		let sub1 = document.getElementById("sub");
		let input = document.getElementById("inp");
		let details = document.getElementById("details");
		add1.addEventListener("click",addin);
		sub1.addEventListener("click",subin);
		function addin(){
			input.value=Number(input.value)+1;
			read();
		}
		function subin(){
			if(input.value>0){
				input.value=Number(input.value)-1;
			}
			rem();
		}
		let data={};
		function read(){
			data['hotalname']="New Milan Hotel";
			data['foodname']="briyani";
			data['price']="₹350 FOR TWO";
			create();
		}
		function create(){
			details.innerHTML =`<div>
				<p>${data.hotalname}</p>
				<p>${data.foodname}</p>
				<p>${data.price}</p>
				</div>`;
			details.style.boxShadow = "0 0 10px #ccc";
			details.style.padding = "40px";
			details.style.margin = "40px"; 
		}
		function rem(){
			details.remove();
		}