// import * as bootstrap from "bootstrap";
const modal = document.querySelector(".modalFit");
const overlay = document.querySelector(".overlay");

const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const btnsSubmit = document.querySelector(`.btn--submit-modal`);

const nameInput = document.querySelector(`.name-input`);
const ageInput = document.querySelector(`.age-input`);
const bmiInput = document.querySelector(`.bmi-input`);
const greeting = document.querySelector(`.greeting`);
const openNav = document.querySelector(`.nav-open-button`);
const navBar = document.querySelector(`.nav`);

// App class

class Person {
	constructor(name, age, bmi) {
		this.name = name;
		this.age = age;
		this.bmi = bmi;
	}
}
class App {
	account = JSON.parse(localStorage.getItem("account"));
	constructor() {
		// if (localStorage.getItem("hasModalOpen")) this.#openModal();
		// localStorage.setItem("hasModalOpen", JSON.stringify(hasModalOpen));

		btnsSubmit.addEventListener(`click`, this.#submitDetails.bind(this));
		// greeting.textContent = `Hello ` + this.account.name;
		if (!localStorage.getItem("hasModalOpen")) {
			localStorage.setItem("hasModalOpen", JSON.stringify(true));
			this.#openModal();
		}

		openNav.addEventListener(`click`, this.#openNav);
	}

	#openModal = () => {
		modal.classList.remove("hidden");
		overlay.classList.remove("hidden");
	};

	#closeModal = () => {
		modal.classList.add("hidden");
		overlay.classList.add("hidden");
	};

	#submitDetails() {
		const name = nameInput.value;
		const age = +ageInput.value;
		const bmi = +bmiInput.value;
		this.account = new Person(name, age, bmi);
		localStorage.setItem("account", JSON.stringify(this.account));
		this.#closeModal();
	}

	#openNav() {
		openNav.classList.toggle(`close`);
		navBar.classList.toggle(`hidden`);

		document.addEventListener(`wheel`, function (e) {
			e.preventDefault();
			e.stopPropagation();
		});
	}

	#enableScrolling() {
		document.body.style.overflow = "auto";
		document.documentElement.style.overflow = "auto";
	}

	// To disable scrolling
	#disableScrolling() {
		document.body.style.overflow = "hidden";
		document.documentElement.style.overflow = "hidden";
	}
}
const app = new App();
