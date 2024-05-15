function addBlock() {
    const block = document.createElement('div');
    block.classList.add('block', 'card', 'mb-3');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const nameInput = document.createElement('input');
    nameInput.classList.add('form-control', 'mb-2');
    nameInput.type = 'text';
    nameInput.placeholder = 'Имя';

    const colorSelect = document.createElement('select');
    colorSelect.classList.add('form-select', 'mb-2');
    const colors = ['красный', 'синий', 'зеленый', 'желтый', 'фиолетовый'];
    colors.forEach(color => {
        const option = document.createElement('option');
        option.value = color;
        option.textContent = color;
        colorSelect.appendChild(option);
    });

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger', 'mb-2');
    deleteButton.textContent = 'Удалить';
    deleteButton.addEventListener('click', function() {
        block.remove();
    });

    const saveButton = document.createElement('button');
    saveButton.classList.add('btn', 'btn-primary', 'mb-2');
    saveButton.textContent = 'Сохранить';
    saveButton.addEventListener('click', function() {
        const name = nameInput.value;
        const color = colorSelect.value;
        updateBlockText(name, color);
    });

    function updateBlockText(name, color) {
        const blockContent = document.createElement('p');
        blockContent.textContent = `Я ${name} и мой любимый цвет ${color}`;
        
        cardBody.innerHTML = '';
        cardBody.appendChild(blockContent);
        cardBody.appendChild(nameInput);
        cardBody.appendChild(colorSelect);
        cardBody.appendChild(deleteButton);
        cardBody.appendChild(saveButton);
    }

    updateBlockText('', '');
    block.appendChild(cardBody);
    document.getElementById('blocksContainer').appendChild(block);
}