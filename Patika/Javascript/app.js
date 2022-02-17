// let price = "100"

// // Esitse

// console.log(price==1);     //esit degil false
// console.log(price==100);   //deger olarak esit type olarak deqil true (type check yok)
// console.log(price===100);  //type checking var false olur

// Kullanici bilgisi varsa ekrana ismini yazdir

// eger (username.length >)(console.log(username))

// let userName = prompt("Type your name:");

// if (userName.length > 0) {
// 	console.log(`Your username ${userName}`);
// } else {
// 	console.log("There is no name");
// }

// let boolean;

// const isBooleanTrue = boolean ? true : false;

// console.log(isBooleanTrue);

// console.log(boolean);

// var money;
//     var canBuy =
//         (money < 17) ? "Satın alamazsın..":
//         (money > 30) ? "Satın alabilirsin..":
//         "Para miktarını girmen gerekmektedir..";

//     console.log(canBuy)

// let user = {
// 	userName: "Eyup",
// 	isActive: true,
// };
// console.log(user);
// localStorage.setItem("userInfo", JSON.stringify(user));

// let userInfo = localStorage.getItem("userInfo");
// console.log(JSON.parse(userInfo));

/*
<li class="list-group-item d-flex align-items-center">
    <span class="me-3 badge bg-primary rounded-pill">1</span>
    ${VALUE}
</li>
*/

var localDB = window.localStorage;

let newTasks = {
	tasks: [],
};

let tasks = localDB.getItem("tasks")
	? JSON.parse(localDB.getItem("tasks"))
	: localDB.setItem("tasks", JSON.stringify(newTasks));

const userForm = document.querySelector(".userForm");
const taskList = document.querySelector(".list-group");

userForm.addEventListener("submit", getValue);

window.addEventListener("load", () => {
	if (localDB.getItem("tasks")) {
		tasks.tasks.forEach((element) => {
			addListItem(element);
		});
	}
});

function getValue(event) {
	event.preventDefault();
	const taskInput = document.querySelector("#task").value;
	if (taskInput.length > 0) {
		addListItem(taskInput);
		tasks.tasks.push(taskInput);
		localDB.setItem("tasks", JSON.stringify(tasks));
	}
	taskInput.value = "";
}

function addListItem(task) {
	let liDOM = document.createElement("li");
	liDOM.innerHTML = `${task}`;
	liDOM.classList.add("list-group-item", "d-flex", "align-items-center");
	taskList.append(liDOM);
}
