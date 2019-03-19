$(function() {

//reading data

var textExample = $('h1').first().text();

//Attribute sstuff 
var whoAmI = $('.hero h1').attr('class');
// console.log(whoAmI);

var html5Data = $('.hero').find('h1').data('whatever');
console.log(html5Data);

});