import {renderCards} from './cards';
import Notiflix from 'notiflix';
import axios from 'axios';
import { showButton,hideButton } from './loadButton';
const searchForm = document.getElementById('search-form');


export async function getPictures(searchQuery, page) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=24985308-45fb8285c0d4accdcde29835e&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`,
    );
    if (response?.data?.hits?.length) {
      renderCards(response.data.hits);
      if(response.data.totalHits > 40){
        showButton()
      }else{
        hideButton()
      }
      
    } else {
      Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
      hideButton()
      
    }
      
    searchForm.reset();
    
  } catch (error) {
    console.error(error);
  }

}

