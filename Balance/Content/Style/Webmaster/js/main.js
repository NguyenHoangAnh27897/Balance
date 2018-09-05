$(document).ready(function() {
    "use strict"

    /*------------- Start metismenu active -------------*/

    $("#menu").metisMenu();

    // sidebar active

    $('.bars').on('click', function() {
        $('.left-sidebar, body').toggleClass('hide');
    });



    /*------------- Start Footer resizer -------------*/
    var e = function() {
        var e = (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 5;
        (e -= 50) < 1 && (e = 1), e > 50 && $(".page-wrapper").css("min-height", e + "px")
    };
    $(window).ready(e), $(window).on("resize", e);

    

    // Start top bar dropdown menu
    $(document).on('click',function(){
      $('.drop-down').removeClass('drop-down-show');
    });
    $('li').on('click', function(e) {
		$('.drop-down').removeClass('drop-down-show');
		$(this).children('ul').addClass('drop-down-show');
		e.stopPropagation();
    });

    /*------------- Start search area -------------*/

    $('li.search-btn').on('click', function() {
    	$('.search-area').addClass('search-show');
    	$('.search-area').removeClass('search-hide');
    });
    $('.close-btn').on('click', function() {
    	$('.search-area').addClass('search-hide');
    	$('.search-area').removeClass('search-show');
    });



    /*------------- Start blog slider -------------*/
    $('.blog-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
        responsive:{
            0:{items:1},
            600:{items:1},
            1000:{items:1}
        }
    })



    /*------------- Start bootstrap popover -------------*/

    $('[data-toggle="popover"]').popover()


    /*------------- Start form input file -------------*/
    $(".fakeFile").each(function() {
        var $this = $(this),
            $browse = $this.children(".browse"),
            $file = $this.prev("input");
        if ( /*@cc_on!@*/ false) {
            $file
                .parent().addClass("isIE")
                .end()
                .bind({
                    click: function(e) { $(this).blur(); },
                    mousedown: function() { $browse.addClass("active"); },
                    mouseup: function() { $browse.removeClass("active"); },
                    mouseover: function() { $browse.addClass("hover"); },
                    mouseout: function() { $browse.removeClass("hover active"); },
                    change: function() { $(this).next().children(".text").text($(this).val()); }
                });
        } else {
            $this.bind({
                click: function(e) { $file.trigger("click"); },
                mousedown: function() { $browse.addClass("active"); },
                mouseup: function() { $browse.removeClass("active"); },
                mouseover: function() { $browse.addClass("hover"); },
                mouseout: function() { $browse.removeClass("hover active"); }
            });
            $file.change(function() {
                $this.children(".text").text($(this).val());
            });
        }
    });

    // Start input type file 2


    // document.querySelector("html").classList.add('js');

    // var fileInput  = document.querySelector( ".input-file" ),  
    //     button     = document.querySelector( ".input-file-trigger" ),
    //     the_return = document.querySelector(".file-return");
          
    // button.addEventListener( "keydown", function( event ) {  
    //     if ( event.keyCode == 13 || event.keyCode == 32 ) {  
    //         fileInput.focus();  
    //     }  
    // });
    // button.addEventListener( "click", function( event ) {
    //    fileInput.focus();
    //    return false;
    // });  
    // fileInput.addEventListener( "change", function( event ) {  
    //     the_return.innerHTML = this.value;  
    // });  

    // Start input type file 3
    function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function(e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function() {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function() {
    $('.image-upload-wrap').removeClass('image-dropping');
});




    /*------------- Start form Validation -------------*/
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);


    /*------------- Start datatable active -------------*/

    $('#dataTable').DataTable({
        responsive: true
    });
    $('#dataTable2').DataTable({
        responsive: true
    });



    /*------------- Start countdown -------------*/
    $('[data-countdown]').each(function() {
            var $this = $(this),
                finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
                $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
            });
        });



    /*------------- Start index 2 charts  -------------*/
    
       



        /*------------- Start search area -------------*/






    });