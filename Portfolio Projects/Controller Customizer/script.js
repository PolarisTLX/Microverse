// const logos = document.getElementsByClassName("logo-caption");
const logos = document.querySelectorAll('.logo-caption');
//console.log(logos);
//console.log(logos[0]);

const highlight = document.createElement('span');
const footer = document.querySelector('.footer');

highlight.classList.add('highlight');

// document.body.append(highlight);
footer.append(highlight);


function highlightLink() {
  const footerCoords = footer.getBoundingClientRect();
  const linkCoords = this.getBoundingClientRect();

  highlight.style.width = `${linkCoords.width+10}px`;
  highlight.style.height = `${linkCoords.height+10}px`;

  // compensate for if window has been scrolled
  highlight.style.left = `${linkCoords.left-5 + window.scrollX}px`;
  highlight.style.top = `${linkCoords.top-5 - footerCoords.top + window.scrollY}px`;
}


function grabElementId() {
  // childNode[1] is used because the img is the second child inside the p element of class 'logo-caption'
  let logoId = this.childNodes[1].id;
  let game = logoId.slice(0,(logoId.length - 5));

  sticker.src = `media/images/sticker-${game}-blue.png`;
  document.body.style.backgroundImage = `
 url('media/images/dark-transparent-background.png'), url('media/images/${game}-background.jpg')`;
  // document.body.style.backgroundImage += ""
}

const colors = document.querySelectorAll('.colors');

function changeColor() {
  let color = this.id
  document.body.style.backgroundImage = `url('media/images/${color}-transparent-background.png')`
}

colors.forEach(event => event.addEventListener('click', changeColor));


// when mouse moves over each element in "logos"
logos.forEach(event => event.addEventListener('mouseenter', highlightLink));
// this changes background and sticker when user clicks on any of the logos (or captions)
logos.forEach(event => event.addEventListener('click', grabElementId));
