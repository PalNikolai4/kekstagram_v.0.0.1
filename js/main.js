import { getPictures } from './data.js';
import { renderPictures } from './picture.js';

// Отрисовываем миниатюры фотографий на странице. Заполняем их некоторой информацией
renderPictures(getPictures(25));
