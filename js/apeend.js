const placesList = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'Pahar toli bon';

placesList.appendChild(li);


// 2 append section

const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'briyeni dekha jacchhe';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'briyeni';
ul.appendChild(li2);

section.appendChild(ul);


mainContainer.appendChild(section);

// set inner directly 

const setDress = document.createElement('section');
setDress.innerHTML = `
<h1> Dress </h1>
<ul> 
<li> t-Shirt </li>
</ul> `;

mainContainer.appendChild(setDress);