import './sass/main.scss';
import {getPictures} from './pictures'
import {showButton} from './loadButton'
let page = 1;
let searchQuery = '';
const searchForm = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
searchForm.addEventListener('submit', onSubmit);


loadMoreBtn.addEventListener('click', loadMore);

function onSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  searchQuery = form.elements.searchQuery.value;
  gallery.innerHTML = '';
  getPictures(searchQuery, 1);
  showButton()
  
}

export  function loadMore() {
  page++;
  gallery.innerHTML = '';
  getPictures(searchQuery, page);
  if(page < per_page){
    document.getElementById('load-butt').style.visibility = 'hidden';
  }
}


