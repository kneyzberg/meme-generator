const memeForm = document.querySelector('#memeform');
const topTextInput = document.querySelector('input[name="topText"]');
const bottomTextInput = document.querySelector('input[name="bottomText"]');
const imageInput = document.querySelector('input[name="imageSrc"');

memeForm.addEventListener('submit', function(e){
    e.preventDefault();
})