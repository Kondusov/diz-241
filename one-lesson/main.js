$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop:true, //Зацикливаем слайдер
        margin:25, //Отступ от картино если выводите больше 1
        nav:true, //Отключил навигацию
        autoplay:true, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:2000, //Время смены слайда
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
  });


let age = 28;
let message = "Возраст пользователя";


//alert(message + age)