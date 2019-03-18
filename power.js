$(function() {

    $('h2').on('click', function() {
        var $this = $(this);
        console.log($this.next().text());
    
    });

    // $('h2').click(function() {
    //     console.log('u clicked on h2');
    // });

});