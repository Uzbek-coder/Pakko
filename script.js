const navbar__list = document.querySelector('.navbar__list');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
	navbar__list.style.display = 'flex';
	navbar__list.style.top = '0';
}
function close() {
	navbar__list.style.top = '-200%';
}