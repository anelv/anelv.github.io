const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const doggo = document.querySelector('img');

const endpoint = 'https://www.boredapi.com/api/activity';
const endpoint2 = 'https://dog.ceo/api/breeds/image/random'


async function getQuote() {
    console.log('test click worked');
    let text = await fetch(endpoint)
    let response = await text.text();

    let json_response = JSON.parse(response);
    console.log(json_response['activity']);

    displayQuote(json_response['activity']);
}

function displayQuote(x) {
    //const quoteBox = document.querySelector('#js-quote-text');
    
    //const textMessage = document.createTextNode(x);

    //quoteBox.appendChild(textMessage);

    document.getElementById('js-quote-text').textContent = x;
}


const imageButton = document.querySelector('.new-image');
imageButton.addEventListener('click', getImage);

async function getImage() {
    console.log('test click worked');
    let text2 = await fetch(endpoint2)
    let response2 = await text2.text();
    let json_response2 = JSON.parse(response2);

    console.log(json_response2['message']);
    displayImage(json_response2['message']);
}

function displayImage(x) {
    doggo.src= x;
}

getImage();
imageButton.addEventListener('click', getQuote);

//window.addEventListener('load', getQuote);



//function getImage(x) {
    //document.getElementById('js-new-image').textContent = x;
//}