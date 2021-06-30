let susanButton = document.querySelector('.susan-button');
let title = document.querySelector('.title');
let job = document.querySelector('.job');
let text = document.querySelector('.text');
let count = 0
const fakeApi = 'https://my-json-server.typicode.com/jerome310/jeromejson/susan'
susanButton.addEventListener('click',function(){
async function getData() {
const response = await fetch(fakeApi);
const data = await response.json();
let personName = data[count].name;
let personJob = data[count].job;
let personText = data[count].text;
title.textContent = personName;
job.textContent = personJob;
text.textContent = personText;
}
getData()
})