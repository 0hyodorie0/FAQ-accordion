
$(function() {
    
    $('.card_question').click(function() {
        var target = $(this).attr('target');
        $('.card_answer' + target).slideToggle();
        $(this).toggleClass('active');

    });

});
