const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
};
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}



const resetButton = document.querySelector('#reset')
const winnigScoreSelect = document.querySelector('#playto');


let winnigScore = 3
let isGameOver = false;


function updateScores(player, opponet){
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winnigScore) {
            isGameOver = true
            player.display.classList.add('winner')
            opponet.display.classList.add('looser')
            player.button.disabled = true
            opponet.button.disabled = true
        }
        player.display.textContent = player.score
    }
}

p1.button.addEventListener('click', () => {
    updateScores(p1,p2)
})
p2.button.addEventListener('click', () => {
    updateScores(p2,p1)
})



winnigScoreSelect.addEventListener('change', (e) => {
    winnigScore = parseInt(e.target.value)
    // winnigScore = parseInt(this.value)
    reset()
})
resetButton.addEventListener('click', reset)
function reset() {
    isGameOver = false;
    for(let p of [p1,p2]){
        p.score = 0
        p.display.textContent = 0
        p.display.classList.remove('winner','looser')
        p.button.disabled = false
    }
}