// Part One - Querying DOM Elements

// 1. Write a function that puts a line through the text of the first <li> in the unordered "Arguments" list (<ul). 
function addStrikethrough() {
    let argItem1 = document.querySelector('li');
    argItem1.style.textDecoration = 'line-through';
}

// 2. Now call it!
addStrikethrough();


// 3. Write a function that takes in a string representing an DOM element's id and a string representing a url. The function should set the image with that id to have that url as its image source.
function setImgSrc(imgId, url) {
    let img = document.querySelector(`#${imgId}`);
    img.src = url;
    img.style.height = '100px';
}


// 4. Now use that function to set the three images in the Image Area section to show three images of your choice. You'll need three separate calls to your function!
setImgSrc('image-1', "https://upload.wikimedia.org/wikipedia/commons/9/96/Aegean_Island_Cat.jpg");

setImgSrc('image-2', "https://upload.wikimedia.org/wikipedia/commons/9/96/Aegean_Island_Cat.jpg");

setImgSrc('image-3', "https://upload.wikimedia.org/wikipedia/commons/9/96/Aegean_Island_Cat.jpg");


// 5. This next function also doesn't require any parameters: write a function that always removes the first <li> from the Arguments <ul>
function removeFirstItem() {
    let li = document.querySelector('li');
    let ul = document.querySelector('ul');
    ul.removeChild(li);
}

// 6. Now use it to remove the first two items from that list. You'll need to call it twice!
removeFirstItem();
removeFirstItem();


// 7. Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.
function setFontSize(size, id) {
    let itemID = document.querySelector(`#${id}`);
    itemID.style.fontSize = size;
}

// 8. Try using it to change the size of any text on the page.
setFontSize("50px", "thing-1");
setFontSize("50px", "thing-2");


// Part Two - DOM Elements as Function Parameters

// 1. Write a function that takes in a DOM element and appends it to the Arguments <ul>.
function appendToArgs(element) {
    let args = document.querySelector("#arguments");
    args.appendChild(element);
}

// 2. Let's use it! Create an image element in Javascript and pass it into your function.
let newImg = document.createElement('img');
appendToArgs(newImg);


// 3. Write a function that takes in an image element and modifies its height to be 30 pixels.
function modifyImgHeight(img) {
    // let img1 = document.querySelector(imgElem);
    img.style.height = "30px";
}

// 4. Let's use it. Query an image element and then pass it into the function.
let testImg1 = document.querySelector('#image-1');
let testImg2 = document.querySelector('#image-3');

modifyImgHeight(testImg1);
modifyImgHeight(testImg2);


// 5. Write a function that takes in an element and gives it the class invisible.
function setClassInvisible(elem) {
    elem.className = "invisible";
}

// 6. Now query an element on the page and pass it into that function.
setClassInvisible(testImg1);


// Part Three - Creating DOM Elements - will return

// 1. Write a function that takes in text and returns a new <li> with the given text parameter as its innerText.
function createItemFromText(text) {
    let li = document.createElement('li');
    li.innerText = text;

    return li;
}

// 2. Test it! Somewhere below this function, call it. Store the returned DOM element in a variable, then append it to the page (use your first function from part 2).
appendToArgs(createItemFromText('Michael: "This list item was created using my function from Part Three, Challenge 1"'));

// 3. Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., a '3' for the first parameter should result in an <h3>) with that text in it.
function createNewHeader(hSize, text) {
    let newHeader = document.createElement(`h${hSize}`);
    newHeader.innerText = text;

    return newHeader;
}

// 4. Test it by calling it with a header size and some text, storing the return value in a variable, then appending it to the page (again, use your first function from part 2).

appendToArgs(createNewHeader('2', 'Michael: "This header was created using my function from Part Three, Challenge 3"'));