const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "Il faisait chaud dehors, alors :insertx: est allé se promener. Quand il fut arrivé à :inserty:, il fut glacé de stupeur pendant un moment, puis :insertz:. Bob vit la scène, mais ne fut pas surpris — :insertx: pèse 300 kilos et il faisait 250 degrés.";

var insertX = ["Willy le Goblin", "Grand-père", "un australopithèque"];

var insertY = ["la cuisine", "Disneyland Paris", "La maison blanche"];

var insertZ = ["entra en combustion spontanée", "fondit comme une glace tombée sur le trottoir", "se transforma en limace et rampa vers la sortie"];

function result() {

  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);


  var newStory = newStory.replace(':insertx:', xItem);
  var newStory = newStory.replace(':insertx:', xItem);
  var newStory = newStory.replace(':inserty:', yItem);
  var newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("us").checked) {
    var weight = 300 + ' livres';
    var temperature =  94 + ' degrés farenheit';
    var newStory = newStory.replace('250 degrés', temperature);
    var newStory = newStory.replace('300 kilos', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);