$(document).ready(function () {
    $('#testBtn').click(function () {
        // alert('Hello Guys welcome!');
        $('.box').fadeToggle(1000);
    });
    $('.box').mouseenter(function() {
        $(this).css({"background-color": "blue"});
    });
    $('.box').mouseleave(function() {
        $(this).css({"background-color": "green"});
    });

    $('#name').blur(function() {
        var userInput = $(this).val();

        if(userInput.length < 4){
            $('.error').show()
        }

    })
});

