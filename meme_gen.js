const memeForm = document.querySelector('#memeform');
const topTextInput = document.querySelector('input[name="topText"]');
const bottomTextInput = document.querySelector('input[name="bottomText"]');
const imageInput = document.querySelector('input[name="imageSrc"]');
const memeSection = document.querySelector('#newMemesSection');

memeForm.addEventListener('submit', function(e){
    e.preventDefault();
    const newMeme = makeMeme(
        imageInput.value, 
        topTextInput.value, 
        bottomTextInput.value
        );
    memeSection.append(newMeme);
    imageInput.value = "";
    topTextInput.value = "";
    bottomTextInput.value = "";

});


function makeMeme(imageURL, toptext, bottomtext){
    const meme = document.createElement('div');
    meme.classList.add("newmeme-layout");
    const memeImg = document.createElement("img");
    memeImg.classList.add("meme-sizing");
    const topDiv = document.createElement("div");
    topDiv.classList.add("meme-toptext-position");
    const bottomDiv = document.createElement("div");
    bottomDiv.classList.add("meme-bottomtext-position");
    memeImg.setAttribute("src", imageURL);
    topDiv.innerText = toptext;
    bottomDiv.innerText = bottomtext;
    meme.append(memeImg);
    meme.append(topDiv);
    meme.append(bottomDiv);
    return meme;
}
