var elForm = document.querySelector('.todo__form')
var elInput = document.querySelector('.todo__input')
var elList = document.querySelector('.todo__list')

var todos = ['Wake up', 'Brush your teeth', 'have a breakfast'];

function renderTodo(todoArray, element) {
  for (var i = 0; i < todoArray.length; i++){
    var newLi = document.createElement('li');
    var newSpan = document.createElement('span');
    var newInput = document.createElement('input');
    var newButton = document.createElement('button');
    newLi.setAttribute('class', 'todo__item');
newInput.setAttribute('type', 'checKbox');
newButton.setAttribute('type', 'submit');
newButton.setAttribute('class', 'new__button');
newButton.textContent = 'del'


    newSpan.textContent = todos[i];
    newLi.appendChild(newInput);
newLi.appendChild(newSpan);
newLi.appendChild(newButton);
    element.appendChild(newLi);
   
   

   

}  

}   

renderTodo(todos, elList)


function handleFormSubmit(evt) {
    evt.preventDefault();
elList.innerHTML = null;
    var inputValue = elInput.value.trim();

    todos.push(inputValue);
    renderTodo(todos, elList)

    elInput.value = null;
    
}


elForm.addEventListener('submit', handleFormSubmit);