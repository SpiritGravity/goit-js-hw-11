import axios from 'axios';


// const axios = require('axios');
const API_KEY = '25313098-4fe256b98efcc708221cd816f';
const BASE_URL = 'https://pixabay.com/api/';
axios.defaults.baseURL = 'https://pixabay.com/api/'

export default class ImageApiService {
    // constructor() {
    //     this.searchQuery = '';
    //     this.page = 1;
    //     this.per_page = 40;
    // }
    // async fetchPhotos() {
    // const PARAMETRES = `key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.per_page}&page=${this.page}`
    // return await axios.get(`${BASE_URL}, ${PARAMETRES}`)
    // .then(res => res.data)
    // }
    async fetchPhotos() {
        const params = new URLSearchParams({
          q: this.searchQuery,
          key: '25154920-bc2b97b916e9c15e1ff6fb5dd',
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          per_page: this.per_page,
          page: this.page,
        });
        const url = `${BASE_URL}/?${params}`;
        this.icrementPage();
        return await axios.get(url);
      }
    icrementPage() {
    this.page += 1;
    }
    resetPage() {
    this.page = 1;
    }
    get query() {
    return this.searchQuery;
    }
    set query(newQuery) {
    this.query - newQuery;
    }
}  
