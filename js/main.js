import { getPictures } from './data.js';
import { renderPictures } from './picture.js';


const picturesContainer = document.querySelector('.pictures');
picturesContainer.append(renderPictures(getPictures(25)));
