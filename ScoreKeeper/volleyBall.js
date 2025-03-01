const btnReset = document.querySelector('#btnReset');
const selector = document.querySelector('#maxScoreSelector');
const check = document.querySelector('#duceCheck');
const b1 = {
    btn: document.querySelector('#btn1'),
    display: document.querySelector('#score1'),
    score: 0
}
const b2 = {
    btn: document.querySelector('#btn2'),
    display: document.querySelector('#score2'),
    score: 0
}
function setScore(player, opponent) {
    player.score++;
    player.display.innerText = player.score;
    if (player.score >= parseInt(selector.value)) {
        if (check.checked == false || player.score - opponent.score >= 2) {
            player.btn.setAttribute('disabled', true);
            opponent.btn.setAttribute('disabled', true);
            player.display.style.color = 'rgb(0,255,0)';
            opponent.display.style.color = 'rgb(255,0,0)';
        }
    }
}
b1.btn.addEventListener('click', function () {
    setScore(b1, b2);
})
b2.btn.addEventListener('click', function () {
    setScore(b2, b1);
})
btnReset.addEventListener('click', function () {
    for (let b of [b1, b2]) {
        b.display.innerText = '0';
        b.display.style.color = 'rgb(0,0,0)';
        b.score = 0;
        b.btn.removeAttribute('disabled');
    }
    selector.removeAttribute('disabled');
    check.removeAttribute('disabled');
})
document.querySelector('#btnGroup').addEventListener('click', function (evt) {
    if (selector.getAttribute('disabled') == null && evt.target.id !== 'btnReset') {
        selector.setAttribute('disabled', true);
        check.setAttribute('disabled', true);
    }
})