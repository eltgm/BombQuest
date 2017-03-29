/**
 * Created by eltgm on 29.03.17.
 */
/*
код с таймера, проверок*/
function end() {
    alert("Boom");
}

function timerInit() {
    setInterval('refresh()',1000);
}

function checkDefuse() {
    document.getElementById('sound').setAttribute('src',"boom.mp3");
}

function refresh() {
    var minute = new Date().getMinutes();
    var second = new Date().getSeconds();

    document.getElementById('min').innerHTML = minute;
    document.getElementById('sec').innerHTML = second;
}