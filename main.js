import './style.css'
import Cropper from 'cropperjs';

const image = document.getElementById('image');

const cropper = new Cropper(image, {
  responsive: true,
  restore: true
});



