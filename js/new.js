
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let storyText = 'It was 94 farenheit outside, so :insertx: stepped out on the front porch. After a few hours of :inserty:, they got anxiously bored, then :insertz:. Sam saw the whole thing, and wanted to approach them, :insertx: was the coolest person in the neighborhood, but struggled to leave the house because their shoes weigh 300 pounds.';
let insertX = ['ur mom','Spongebob','Freddy Kreuger'];
let insertY = ['listening to Lady Gaga\'s discography on full blast','contemplating when you\'re coming home','watching How to Get Away with Murder'];
let insertZ = ['let out a startling screech','got pooped on by a flock of crow','stopped because it might lead to even weirder dreams'];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  newStory = newStory.replace(':insertx:',xItem).replace(':insertx:',xItem).replace(':inserty:',yItem).replace(':insertz:',zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Sam',name);
  }

  if (document.getElementById("uk").checked){
    let weight = Math.round(300*0.07).toString() + ' stones';
    let temperature = Math.round((94-32)/1.8).toString() + ' centigrade';
    newStory = newStory.replace('94 farenheit',temperature).replace('300 pounds',weight);
}

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);