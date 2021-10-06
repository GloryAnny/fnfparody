var num;
var interval = null;
$(document).ready(function() {
    'use strict';

    var bg_h = $('#escena').height();
    var bg_w = $('#escena').width();

    //Posicion Inicial de Mario Bros
    $("#mario").css("top", (bg_h - 290) + "px");
    $("#mario").css("left", (bg_w / 2.5) + "px");

    $("#rap").css("top", (bg_h - 600) + "px");
    $("#rap").css("left", (bg_w / 2) + "px");

    $(document).keydown(function(e) {

        if (e.which == 40){
            var key = 1;
            mover(key);
        }
        
        if (e.which == 39){
            var key = 2;
            mover(key);
        }

        if (e.which == 37){
            var key = 3;
            mover(key);
        }

        if (e.which == 38){
            var key = 4;
            mover(key);
        }
    });

    function mover(key){
        clearInterval(interval);
        if (key == 1){
            var num = 1;
            interval = setInterval(function(){
                $("#mario").attr('src', 'img/Sofi-' + num + '.png'); //imagenes abajo

                var position = $("#mario").position();
                $("#mario").css("left", (position.left) + "px");

                num += 1;
                if (num === 5){
                    num = 1;
                }
            }, 150);
        }else if (key == 2){
            var num = 1;
            interval = setInterval(function(){
                $("#mario").attr('src', 'img/derecha-' + num + '.png'); //imagenes derecha

                var position = $("#mario").position();
                $("#mario").css("left", (position.left + 10) + "px");

                num += 1;
                if (num === 5){
                    num = 1;
                }
            }, 150);
        } else if (key == 3){
            var num = 1;
            interval = setInterval(function(){
                $("#mario").attr('src', 'img/izquierda-' + num + '.png'); //imagenes izquierda

                var position = $("#mario").position();
                $("#mario").css("left", (position.left - 10) + "px");

                num += 1;
                if (num === 4){
                    num = 1;
                }
            }, 150);
        } else if (key == 4){
            var num = 1;
            interval = setInterval(function(){
                $("#rap").attr('src', 'img/rap-' + num + '.png'); //objeto flotante

                var position = $("#rap").position();
                $("#rap").css("left", (position.left) + "px");

                num += 1;
                if (num === 3){
                    num = 1;
                }
            }, 150);
        };
    };

});
