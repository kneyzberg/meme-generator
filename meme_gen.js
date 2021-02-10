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

memeSection.addEventListener("click", function(e){
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
    }
});


function makeMeme(imageURL, toptext, bottomtext){
    const meme = document.createElement('div');
    const memeImg = document.createElement("img");
    const topDiv = document.createElement("div");
    const bottomDiv = document.createElement("div");
    const removeBtn = document.createElement('button');
    meme.classList.add("newmeme-layout");
    memeImg.classList.add("memeImg-sizing");
    topDiv.classList.add("meme-toptext-position");
    bottomDiv.classList.add("meme-bottomtext-position");
    removeBtn.classList.add("removeMeme-btn")
    memeImg.setAttribute("src", imageURL);
    topDiv.innerText = toptext;
    if (topDiv.innerText.length > 20){
        topDiv.style.fontSize = "35px";
    }
    bottomDiv.innerText = bottomtext;
    if (bottomDiv.innerText.length > 20){
        bottomDiv.style.fontSize = "35px";
    }
    removeBtn.innerText = "REMOVE MEME X";
    meme.append(removeBtn);
    meme.append(memeImg);
    meme.append(topDiv);
    meme.append(bottomDiv);
    return meme;
}


