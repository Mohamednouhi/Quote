async function generate() {
  let response =  await fetch('https://api.quotable.io/random');
  let data = await response.json();
  let quote = data.content;
  let author = data.author;

  let quotePlacement = document.querySelector('.quotePlacement');

  let authorPlacement = document.querySelector('.authorPlacement');


  quotePlacement.innerHTML = quote;
  authorPlacement.innerHTML = author

}

generate();

function copy() {
  let quotePlacement = document.querySelector('.quotePlacement').innerHTML;

let text = document.createElement('textarea');

text.innerHTML = quotePlacement;

document.body.appendChild(text);
text.select();
navigator.clipboard.writeText(text.value);
alert(`copied: "${text.value}"`)
}