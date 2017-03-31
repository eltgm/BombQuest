/**
 * Created by eltgm on 29.03.17.
 */
/*
код с таймера, проверок*/
var lifes = 3; //жизни
var minute = 1; //минуты таймера
var second = 0; //секунды
var interval = 0; //переменная, которая хранит ID интервала


function timerInit() {
    interval = setInterval('refresh()',1000); // запускаем вызов функции каждые 1000мс
}  //инициализация таймера

function checkDefuse() {
    var checked = -1;

    var rad=document.getElementsByName('preferred_color'); //получили radiobuttonы

    for (var i=0;i<rad.length; i++) {
        if (rad[i].checked) {
            checked = i; //нашли выбранный radiobutton
        }
    }

    if(checked != 0) { // если выбрали не тот...
        lifes--; // пропадает одна жизнь

        if (lifes <= 0) { // если жизни кончились, останавлеваем таймер, возпроизводим звук взрыва
            document.getElementById('sound').setAttribute('src', 'boom.mp3');
            document.getElementById('sound').removeAttribute('loop');
            clearInterval(interval);
            alert("gg");
            return 0;
        }

        alert("Осталось " + lifes + " жизней")
    }else{
        document.getElementById('sound').setAttribute('src', 'defuse.mp3');
        document.getElementById('sound').removeAttribute('loop');
        clearInterval(interval);
    }
} //проверяем на разминирование

function refresh() {
    if(minute == 0 && second == 0){ // если время вышло
        lifes = 0; // жизней 0
        checkDefuse(); // включаем проверку на разминирование, которая приведет к взрыву, тк жизней нет
        return 0;
    }
    if(second == 0){
        minute--;
        second = 60;
    }
    second--;
    document.getElementById('min').innerHTML = minute;
    document.getElementById('sec').innerHTML = second;
} //обновление таймера