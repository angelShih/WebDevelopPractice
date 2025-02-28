const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btnReset = document.querySelector('#btnReset');
const selector = document.querySelector('#maxScoreSelector');
const check = document.querySelector('#duceCheck');
btn1.addEventListener('click', function () {
    const score = document.querySelector('#score1');
    score.innerText = parseInt(score.innerText) + 1;
    checkEnd();
})
btn2.addEventListener('click', function () {
    const score = document.querySelector('#score2');
    score.innerText = parseInt(score.innerText) + 1;
    checkEnd();
})
btnReset.addEventListener('click', function () {
    console.log('btnRest!!');
    document.querySelector('#score1').innerText = '0';
    document.querySelector('#score1').style.color = 'rgb(0,0,0)';
    document.querySelector('#score2').innerText = '0';
    document.querySelector('#score2').style.color = 'rgb(0,0,0)';
    selector.removeAttribute('disabled');
    check.removeAttribute('disabled');
    btn1.removeAttribute('disabled');
    btn2.removeAttribute('disabled');
})
document.querySelector('#btnGroup').addEventListener('click', function (evt) {
    if (selector.getAttribute('disabled') == null && evt.target.id !== 'btnReset') {
        selector.setAttribute('disabled', true);
        check.setAttribute('disabled', true);
    }
})
function checkEnd() {
    const score1 = parseInt(document.querySelector('#score1').innerText);
    const score2 = parseInt(document.querySelector('#score2').innerText);
    if (score1 >= parseInt(selector.value) || score2 >= parseInt(selector.value)) {
        if (check.checked == false || Math.abs(score1 - score2) >= 2) {
            setResult();
        }
    }
}
function setResult() {
    const score1 = document.querySelector('#score1');
    const score2 = document.querySelector('#score2');
    btn1.setAttribute('disabled', true);
    btn2.setAttribute('disabled', true);
    if (parseInt(score1.innerText) > parseInt(score2.innerText)) {
        score1.style.color = 'rgb(0,255,0)';
        score2.style.color = 'rgb(255,0,0)';
    } else {
        score1.style.color = 'rgb(255,0,0)';
        score2.style.color = 'rgb(0,255,0)';
    }
}