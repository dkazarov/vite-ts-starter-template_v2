const burgerBtn = document.querySelector('.burger') as HTMLButtonElement;
const burgerLine = document.querySelector('.burger__lines') as HTMLSpanElement;

const burgerNav = document.querySelector('.nav__list') as HTMLElement;

const initBurger = () => {
	burgerBtn.addEventListener('click', () => {
		burgerLine.classList.toggle('burger__line--hide');
		burgerBtn.classList.toggle('burger--transform');

		burgerNav.classList.toggle('burger__init');
	});
};

export { initBurger };
