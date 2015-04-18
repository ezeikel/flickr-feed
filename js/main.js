// Event handler for when all elements have loaded
$(window).load(function(){
    // Event handler for when a user clicks on an image
    $('.image').on('click', function() {
        $(this).toggleClass('selected');
        $('.image').each(function(){
            var url = $(this).attr('src');
            var selected = $(this).hasClass('selected');
            $.cookie(url, selected);
        });
    });
    // Loops through each image on the page and checks browser cookies 
    // to see if selected class should be applied
    $('.image').each(function(){
        var url = $(this).attr('src');
        var cookieValue = $.cookie(url);
        if (cookieValue == 'true')
            $(this).addClass('selected');
    });
});