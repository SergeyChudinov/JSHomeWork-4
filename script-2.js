
const text = document.querySelector('.text');
// const newText = text.textContent.replace(/\B'/g, '"'); // Сначало сделал так и сработало, но не пойму почему
// const newText = text.textContent.replace(/\s'|'\s/g, '"'); // Не сработало только на последней кавычке, пришлось после нее делать пробел в HTML
const newText = text.textContent.replace(/\B'|'\B/g, '"');

document.querySelector('.newText').textContent = newText;