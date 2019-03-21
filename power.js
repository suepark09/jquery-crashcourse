// $(function() {

// //reading data

// var textExample = $('h1').first().text();

// //Attribute sstuff 
// var whoAmI = $('.hero h1').attr('class');
// // console.log(whoAmI);

// var $heroH1 = $('.hero').find('h1'); 

// var html5Data = $('.hero').find('h1').data('whatever');
// html5Data = $heroH1.data('hover-style');
// console.log(html5Data);

// if (html5Data == 'crazy') {
//     $('.content').addClass('heartify');
// }


// });



//UPDATING DATA

$('#is-author-checkbox input').on('change', function() {

    var $this = $(this);
    var $form = $this.closest('form');
    var $emailInput = $form.find("input[type='email']");
    var $nameInput = $form.find("input[type='text']"); 
    var $heroH1 = $('.hero h1')

    if ($this.is(':checked')) {
        var name = $heroH1.data('author-name');
        var email = $heroH1.data('author-email');

        $nameInput.val(name);
        $emailInput.val(email);
        // grab the data (read)
        // populate the data (update)
    } else {
        
        $nameInput.val('');
        $emailInput.val('');
    }

});
