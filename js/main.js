$(window).load(function(){
    $('.image').on('click', function() {
        $(this).toggleClass('selected');
        $('.image').each(function(){
            var url = $(this).attr('src');
            var selected = $(this).hasClass('selected');
            $.cookie(url, selected);
        });
    });
    $('.image').each(function(){
        var url = $(this).attr('src');
        var cookieValue = $.cookie(url); // => "value"
        if (cookieValue == 'true')
            $(this).addClass('selected');
    });
});