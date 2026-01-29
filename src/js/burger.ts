const burgerBtn = document.querySelector('.burger') as HTMLButtonElement;
const burgerLine = document.querySelector('.burger__line');

const burger = (): void => {
	burgerBtn.addEventListener('click', () => {
		burgerLine?.classList.toggle('burger__line--hide');
		burgerBtn?.classList.toggle('burger__line--transform');
	});
};

export const initBurger = (): void => {
	burger();
};
