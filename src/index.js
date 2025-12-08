import './styles.css';
import { attachEventSearchButton, checkImgSource } from './dom/dom.js';

// Create an init function
function init() {
    checkImgSource();
    attachEventSearchButton();
}

init();