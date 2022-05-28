const text = document.querySelector('.text');
const newText = text.textContent.replace(/'/g, '"');

document.querySelector('.newText').textContent = newText;