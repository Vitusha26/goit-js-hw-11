import './sass/main.scss';
import axios from 'axios';
import pictureTpl from './partials/picture.hbs';
import Notiflix from 'notiflix';
let page = 1;
let searchQuery = '';
const searchForm = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
searchForm.addEventListener('submit', onSubmit);


function onSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  searchQuery = form.elements.searchQuery.value;
  gallery.innerHTML = '';
  getPictures(searchQuery, 1);

  function twoFunc () {
    
      document.getElementById('load-butt').style.display="block";
  }
twoFunc()
  
}

async function getPictures(searchQuery, page) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=24985308-45fb8285c0d4accdcde29835e&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`,
    );
    if (response?.data?.hits?.length) {
      renderCards(response.data.hits);
    } else {
      Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
    }
    searchForm.reset();
  } catch (error) {
    console.error(error);
  }
}

function renderCards(pictures) {
  pictures.forEach(pic => {
    const markup = pictureTpl(pic);
    gallery.innerHTML += markup;
  });
}

loadMoreBtn.addEventListener('click', loadMore);

function loadMore() {
  page++;
  gallery.innerHTML = '';
  getPictures(searchQuery, page);
}