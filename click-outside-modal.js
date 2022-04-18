const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(event) {
	const button = event.currentTarget;
	const card = button.closest('.card');
	const imgSrc = card.querySelector('img').src; // Grab the img source
	const desc = card.dataset.description;
	const name = card.querySelector('h2').textContent;

	// Populate the Modal with the new info
	modalInner.innerHTML = `
  <img src="${imgSrc.replace('200', '600')}" "alt=${name}">
  <p>${desc}</p>`;

	// Show the Modal
	modalOuter.classList.add('open');
}

cardButtons.forEach(button =>
	button.addEventListener('click', handleCardButtonClick)
);
