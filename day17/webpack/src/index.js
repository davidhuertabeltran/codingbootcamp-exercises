import './index.html';

import './css/style.scss';

import { increaseBar, decreaseBar } from './js/bar.js';

document.querySelector('.btn-plus').addEventListener('click', increaseBar)
document.querySelector('.btn-minus').addEventListener('click', decreaseBar)