const btn = document.querySelector('.btnCreate');

const createTask = (e) => {
    e.preventDefault();
    const input = document.querySelector('.inputForm');
    const value = input.value;
    const cardList = document.querySelector('.cardsList');
    const card = document.createElement('li');
    card.classList.add('card');
    const taskCard = document.createElement('div');
    taskCard.appendChild(check())
   
    const title = document.createElement('span');

    title.classList.add('task')
    title.innerText = value
    
   
    taskCard.appendChild(title)
    card.appendChild(taskCard);
    card.appendChild(removeIcon());
    cardList.appendChild(card);    
    input.value = "";

}

btn.addEventListener('click', createTask);

const check = () => {
    const i =  document.createElement('i');
    i.classList.add("far", "fa-check-square", "icon")   
    i.addEventListener('click', checked);
    return i;
}

const checked = (e) => {
    const element = e.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
}

const removeIcon = () => {
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon','icon')
    i.addEventListener('click', deleteCard )
    return i
}


const deleteCard = (e) => {
    const parent = e.target.parentElement;
    parent.remove()

}