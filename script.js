
 function createToaster(config) {
	return function(notification){
		let div = document.createElement("div");
		div.className = ` inline-block  pt-1 pb-1  px-6 py3 rounded shadow -lg pointer-event-none
		${config.theme === "dark" ? "bg-gray-800 text-white": "bg-gray-200 text-black"}
		`

		if (config.positionX !== "left" || config.positionY !== "top"){
			document.querySelector(".parent").className += `
			${config.positionX === "right" ? "right-1": "left-1"}
			${config.positionY === "top" ? "top-1": "bottom-1"}`
		}

		document.querySelector(".parent").appendChild(div)
		div.textContent = notification

		setTimeout(()=> {
			document.querySelector(".parent").removeChild(div);
		},config.duration*2000)


	}
}


let toaster = createToaster({
	positionX: "right",
	positionY: "bottom",
	theme: "light",
	duration: 1.5
})
 
// toaster("whatsApp message ! ");

const btnOne = document.querySelector(".oneMsg");
const btnAll = document.querySelector(".allMsg");


btnOne.addEventListener("click", function () {
	setTimeout(()=> {toaster("first message notification !");},500)
      });



      
btnAll.addEventListener("click", function () {
	setTimeout(()=> {toaster("first message notification !");},500)

	setTimeout(()=> {toaster("second message notification !");},700)
	
	setTimeout(()=> {toaster("third message notification !");},900)
	
	setTimeout(()=> {toaster("fourth message notification !");},1100)
	
	setTimeout(()=> {toaster("fifth message notification !");},1300)
	
	setTimeout(()=> {toaster("six message notification !");},1500)
	
	setTimeout(()=> {toaster("seven message notification !");},1700)
	
	setTimeout(()=> {toaster(" message notification !");},1900)
	
	setTimeout(()=> {toaster(" message notification !");},2100)
	
	setTimeout(()=> {toaster(" message notification !");},2300)
	    });     








