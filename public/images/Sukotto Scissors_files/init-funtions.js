jQuery(document).ready(function() {

    marcar_hash();
    active_scroll_menu();

    jQuery(".affix_menu").affix({
        offset: {
            top: 42
        }
    });

});

function active_scroll_menu(){
    jQuery(".link_scroll").click(function(event){
        event.preventDefault();
        go_to(jQuery(this).attr('href'), 55);
    });
}

function go_to(element, desplazamiento){

    if (typeof desplazamiento === "undefined") {
        desplazamiento = 0;
    }

    if(jQuery(element).length > 0){
        var target = element;
        $target = jQuery(target);
        jQuery('html, body').stop().animate({
            'scrollTop': $target.offset().top - desplazamiento
        }, 500, 'swing', function () {
            if( element == "body,html"){
                target = "";
            }
            window.location.hash = target;
        });
    }

}

function marcar_hash(){
    if(window.location.hash) {
        activar = window.location.hash;
        if(activar != '/'){
            go_to(activar, 55);
        }
    }
}

function colorize_btn(form, active){
    if(active == true){
        jQuery(form + ' .btn ,' + form + ' .btn:hover').css({
            'background': '#0184df',
            'border-color': '#0184df',
            'color': '#fff'
        });
    }else{
        jQuery(form + ' .btn ,' + form + ' .btn:hover').css({
            'background': '#e6e6e6',
            'border-color': '#adadad',
            'color': '#333'
        });
    }
}
