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
  <img src="${imgSrc.replace(
		'200',
		'600'
	)}" alt="${name}" width="600" height="600">
  <p>${desc}</p>`;

	// Show the Modal
	modalOuter.classList.add('open');
}

cardButtons.forEach(button =>
	button.addEventListener('click', handleCardButtonClick)
);

function closeModal() {
	modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function (event) {
	const isOutside = !event.target.closest('.modal-inner');
	if (isOutside) {
		closeModal();
	}
});

window.addEventListener('keydown', event => {
	if (event.key === 'Escape') {
		closeModal();
	}
});
