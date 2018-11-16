$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('body').toggleClass('side-nav-closed');
        $(this).toggleClass('active');
    });
    $('button.find').on('click', function(){
        window.location.href = $(this).data("href");
    });

    $("#pageSubmenu").on('click', 'a', function(e) {
        e.preventDefault();
        var location = $(this).data('href');
        var offsetnum = 60;
        //if(location == "tablet"){ offsetnum = 54 };
        //$("#pageSubmenu li").removeClass('active');
       // $(this).parent('li').addClass('active');
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#" + location).offset().top - offsetnum
        }, 1500);
        });
        
        if($('#sidebar').length > 0){
        var scroll_happened = false;
        var aside_from_top = $('#sidebar').offset().top-50;
       
        $window = $(window);

        $window.scroll(function()
        {
            scroll_happened = true;
        });

        setInterval(function()
        {
            if(scroll_happened == true)
            {
                scroll_happened = false;
                if($window.scrollTop() >= aside_from_top)
                {
                    //$('#aside_container').addClass('fixed_aside');
                    console.log('top');
                    if(!$('body').hasClass('fixed-side-nav'))
                    $('body').addClass('fixed-side-nav');
                }
                else
                {
                    //$('#aside_container').removeClass('fixed_aside');
                    console.log('no');
                    if($('body').hasClass('fixed-side-nav'))
                    $('body').removeClass('fixed-side-nav');
                }

                
            }
                } , 25);
            }

                // Adding listener for scroll spy
                $(".nav-link").bind('cssClassChanged' , function(e) {
                    $(".nav-item").each( function() {
                        if( $(this).hasClass("active") == true ) {
                            $(this).removeClass("active");
                        }
                    });
            
                    $(this).removeClass("active").parent().addClass("active");
                });

                $( window ).resize(function() {
                     if ($( window ).width() > 768 ){
                         $('#sidebar, #sidebarCollapse').removeClass('active');
                     };
                  });
});

//Extending jQuery to add a listener for Bootstrap Scroll Spy

(function(){
    // Your base, I'm in it!
    var originalAddClassMethod = jQuery.fn.addClass;

    jQuery.fn.addClass = function(){
        // Execute the original method.
        var result = originalAddClassMethod.apply( this, arguments );

        // trigger a custom event
        jQuery(this).trigger('cssClassChanged');

        // return the original result
        return result;
    }
    })();