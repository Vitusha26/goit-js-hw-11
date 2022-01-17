const gallery = document.querySelector('.gallery');
import cardTpl from './partials/picture.hbs'; // cardTpl переназвати

export function renderCards(pictures) {
  pictures.forEach(pic => {
    const markup = cardTpl(pic);
    gallery.innerHTML += markup;
  });
}