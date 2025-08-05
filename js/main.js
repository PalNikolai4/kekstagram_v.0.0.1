import { getPictures } from './data.js';
import { renderPictures, renderInfoFullPicture } from './picture.js';

// Отрисовываем миниатюры фотографий на странице. Заполняем их некоторой информацией
const picturesData = getPictures(25);
renderPictures(picturesData);
renderInfoFullPicture(picturesData);
