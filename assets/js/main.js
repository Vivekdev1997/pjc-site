$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) { 
            $('.custom-nav').addClass('header-fixed');
        } else { 
            $('.custom-nav').removeClass('header-fixed');
        } 
    });
    
    $('.searchHdr .fa-search').click(function (event) {
        event.stopPropagation();  
        $('#searchInput').toggle();
    });
 
    $(document).click(function(event) {
        var target = $(event.target); 
        if (!target.closest('#searchInput').length && !target.closest('.searchHdr .fa-search').length) {
            $('#searchInput').hide();
        }
    });

    $('*[data-bs-toggle="collapse"]').click(function() { 
        $('[data-bs-toggle="collapse"] .fa-solid').not($(this).find('.fa-solid')).removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $(this).find('.fa-solid').toggleClass('fa-chevron-up fa-chevron-down');
    });
});