const form = document.querySelector('form');
const container = document.querySelector('.box');
const removeButton = document.querySelector('.items');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const techInput = document.querySelector('#tech');
  const tech = techInput.value;

  if (tech.trim() !== '') {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerText = tech;
    container.appendChild(card);

    techInput.value = '';
  }
});

removeButton.addEventListener('click', () => {
  container.innerHTML = '';
});