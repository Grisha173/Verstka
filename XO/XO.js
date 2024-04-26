const containerClass = 'game';
const buttonClass = 'game-button';
const rowClass = 'game-row';

let gameField, gamer;
const gameState = [];
const rows = [];

const createButton = () => ({
    state: 0,
    element: document.createElement('button'),
});
const reset = () => {
    gameField.remove();
    createField();
}

const victory = (winner) => {
    setTimeout(() => {
        alert(`Победил игрок ${winner}`);
        reset();
    }, 1);
}


const checkResult = () => {
    for (let y = 0; y < gameState.length; y += 1) {
        if (gameState[y].every(element => element.state === 1)) return victory(1);
        if (gameState[y].every(element => element.state === 2)) return victory(2);
        if (gameState.every(row => row[y].state === 1)) return victory(1);
        if (gameState.every(row => row[y].state === 2)) return victory(2);
        if (gameState[0][0].state === 1 && gameState[1][1].state === 1 && gameState[2][2].state === 1) return victory(1);
        if (gameState[0][2].state === 2 && gameState[1][1].state === 2 && gameState[2][0].state === 2) return victory(2);
    }
    console.log(gameState);
};

const buttonClick = (button) => {
    if (button.state) return;
    gamer = gamer === 1 ? 2 : 1;
    if (!button.state) button.state = gamer;
    if (gamer === 1) button.element.innerHTML = 'X';
    else button.element.innerHTML = 'O';
    checkResult();
};

const createField = () => {
    gameField = document.createElement('div');
    gameField.classList.add(containerClass);
    document.body.appendChild(gameField);
    [0,1,2].forEach(x => {
        rows[x] = document.createElement('div');
        rows[x].classList.add(rowClass);
        gameField.appendChild(rows[x]);
        [0,1,2].forEach(y => {
            if (!gameState[x]) gameState[x] = [];
            gameState[x][y] = createButton();
            gameState[x][y].element.addEventListener('click', () => buttonClick(gameState[x][y]));
            gameState[x][y].element.classList.add(buttonClass);
            rows[x].appendChild(gameState[x][y].element);
        })
    });
};

window.onload = () => {
    createField();
};