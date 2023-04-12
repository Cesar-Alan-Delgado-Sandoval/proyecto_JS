$(document).ready(function(){
    // Slider
    if(window.location.href.indexOf('index') > -1){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            auto: true
        });
    }
    //POST
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                title: 'prueba de titulo 1',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting.'
            },
            {
                title: 'prueba de titulo 2',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting.'
            },
            {
                title: 'prueba de titulo 3',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting.'
            },
            {
                title: 'prueba de titulo 4',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting.'
            },
            {
                title: 'prueba de titulo 5',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum is simply dummy text of the printing and typesetting.'
            }
        ];
       
        posts.forEach((elemento, index) => {
            var post = `<article class="post">
            <h2>${elemento.title}</h2>
            <span class="date">${elemento.date}</span>
            <p>
                ${elemento.content}
            </p>
            <a href="#" class="button-more">Leer más</a>
            </article>`
        $("#posts").append(post)
        });
    }
   


   // Selector de temas 
   var theme = $('#theme');   
 
   $('#to-green').click(function() {
       theme.attr('href', 'css/green.css');
       localStorage.setItem("tema", "css/green.css");
   });

   $('#to-red').click(function() {
       theme.attr('href', 'css/red.css');
       localStorage.setItem("tema", "css/red.css");
   });

   $('#to-blue').click(function() {
       theme.attr('href', 'css/blue.css');
       localStorage.setItem("tema", "css/blue.css");
   });

   // Comprobar si existe tema guardado en el Storage
   if(localStorage.getItem("tema")){
       var storage = localStorage.getItem("tema");
       theme.attr('href', storage);
   }else{
       theme.attr('href', 'css/green.css');  	
   } 
    /*  
    var theme = $("#theme");
    $('#to-green').click(function(){
        theme.attr("href", "css/green.css");
    })

    $('#to-red').click(function(){
        theme.attr("href", "css/red.css");
    })

    $('#to-blue').click(function(){
        theme.attr("href", "css/blue.css");
    })

    localStorage.setItem('tema', JSON.stringify(theme));
    console.log(localStorage);*/

    // SCROLL
    $(".subir").click(function(e){
        e.preventDefault();

        $("html, body").animate({
           
            scrollTop: 0
        }, 500);
        return false;
    });

    //LOGIN FALSO
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");
    if(form_name != null && form_name != "undefined" ){
        var about_parrafo = $("#about p")
        
        about_parrafo.html("<br><st>Bienvenido "+form_name+"</st");
        about_parrafo.append('<a href="#" id="logout"> Cerrar sesion</a>');
        $("#login").hide();
        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }    
    //ACORDEON
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    //RELOJ
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function(){
            var reloj = moment().format("h:mm:ss");
            $("#reloj").html(reloj);
        }, 1000)
    }

    //VALIDACION
    if(window.location.href.indexOf('contact') > -1){
        $('form input[name = "date"]').datepicker({
            dateFormat: 'dd-mm-yy'
        });
        $.validate({
            lang: 'es'
        });
    }
});