const btn = document.querySelector('.btnCreate');

const createTask = (e) => {
    e.preventDefault();
    const input = document.querySelector('.data');
    const value = input.value;
    const cardList = document.querySelector('.cardsList');
    const card = document.createElement('li');
    card.classList.add('card');
    const content = `<div>
                <i class="far fa-check-square icon"></i>
                <span class="task">${value}</span>
            </div>
            <i class="fas fa-trash-alt trashIcon icon"></i>`;
    card.innerHTML = content;
    cardList.appendChild(card);
    
    
    input.value = "";

}

btn.addEventListener('click', createTask);