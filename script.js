console.log(1)

const result = document.querySelector("#result")
const expression = document.querySelector("#expression")
const num_butt = document.querySelectorAll(".number")
const operation_butt = document.querySelectorAll(".operation")
const equal_butt = document.querySelector(".equal")
const all_clear_butt = document.querySelector("#AC")
const equal_clear_butt = document.querySelector("#EC")

let ex = "";
result.innerHTML = "0";

function clickN () {
	if (!ex || typeof ex === "number" || ex === "0") {
		expression.innerHTML = this.id
		ex = this.id
	} else {
		expression.innerHTML += this.id
		ex += this.id
	}
	result.innerHTML = ex
}

num_butt.forEach((el) => {
	el.addEventListener('click', clickN)
});

operation_butt.forEach((el) => {
	el.addEventListener('click', clickN)
});

all_clear_butt.addEventListener('click', () => {
	result.innerHTML = "0"
	expression.innerHTML = ""
	ex = ""
})

equal_clear_butt.addEventListener('click', () => {
	result.innerHTML = "0"
	expression.innerHTML = ""
	ex = ""
})

equal_butt.addEventListener('click', () => {
	if (!ex){
		result.innerHTML = "0"
	} else {
		ex = eval(ex)
		expression.innerHTML += "="
		result.innerHTML = ex
	}
})