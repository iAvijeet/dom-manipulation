const body = document.body;

const redText = document.createElement('p');
redText.textContent = "Hey I'm red!"
redText.style.color = 'red';
body.appendChild(redText)
console.log(redText.textContent)

const blueText = document.createElement('h3');
blueText.textContent = "I'm a blue h3!";
blueText.style.color = 'blue';
document.body.appendChild(blueText)

const container = document.createElement('div');
container.style.border = '1px solid black';
container.style.backgroundColor = 'pink';
document.body.appendChild(container)

const childH1 = document.createElement('h1')
childH1.textContent = "I'm in a div"
container.appendChild(childH1)

const childP = document.createElement('p')
childP.textContent = "ME TOO!"
container.appendChild(childP)

//Events
const btn = document.createElement('button')
btn.textContent = "click me"
document.body.appendChild(btn)

// btn.onclick = () => alert('hi')

  // Add the event listener
  btn.addEventListener('click', function(e) {
    console.log(e);
  });