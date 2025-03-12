const answer_promt = prompt('Как тебя зовут?');

if(answer_promt != ""){
    if(answer_promt.length > 2){
        document.body.innerHTML = 'Поздравляем!!! Вас зовут ' + answer_promt;
    }
    else{
        document.body.innerHTML = 'Имя ' + answer_promt + 'слишком короткое';
    }
}
else{
    document.body.innerHTML = 'Вы не ввели ваше имя';
}
