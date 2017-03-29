/**
 * Created by eltgm on 29.03.17.
 */
/*
код с таймера, проверок*/
var lifes = 3;
var minute = 15;
var second = 0

function end() {
    alert("Boom");
}

function timerInit() {
    setInterval('refresh()',1000);
}

function checkDefuse() {
    var checked = 0;
    if(lifes == 0) {
        document.getElementById('sound').setAttribute('src', 'boom.mp3');
        document.getElementById('sound').setAttribute('loop', '');
        document.getElementById('init').innerHTML = "timerInit(0)";
    }else{
        var rad=document.getElementsByName('preferred_color');
        for (var i=0;i<rad.length; i++) {
            if (rad[i].checked) {
                checked = i;
            }
        }
        if(checked != 0){
            lifes--;
            alert("Осталось " + lifes + " жизней")
        }
    }
}

function refresh() {;
    if(second == 0){
        minute--;
        second = 60;
    }
    second--;
    document.getElementById('min').innerHTML = minute;
    document.getElementById('sec').innerHTML = second;
}

function fun1() {
    var rad=document.getElementsByName('preferred_color');
    for (var i=0;i<rad.length; i++) {
        if (rad[i].checked) {
            alert('Выбран '+i+' radiobutton');
        }
    }
}