
function mySearchBarFunction(){
    
    if( document.getElementById("search-place").style.display === "none")
    {
        document.getElementById("search-place").style.display = "block";
    }
    else
    {
    document.getElementById("search-place").style.display = "none";
    }
}


//  <-----  Slider Code ---->

// jQuery(document).ready(function ($) {
    
//     var slideCount = $('#slider ul li').length;
// 	var slideWidth = $('#slider ul li').width();
// 	var slideHeight = $('#slider ul li').height();
// 	var sliderUlWidth = slideCount * slideWidth;
	
// 	$('#slider').css({ width: slideWidth, height: slideHeight });
	
// 	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
//     $('#slider ul li:last-child').prependTo('#slider ul');

//     function moveLeft() {
//         $('#slider ul').animate({
//             left: + slideWidth
//         }, 200, function () {
//             $('#slider ul li:last-child').prependTo('#slider ul');
//             $('#slider ul').css('left', '');
//         });
//     };

//     function moveRight() {
//         $('#slider ul').animate({
//             left: - slideWidth
//         }, 200, function () {
//             $('#slider ul li:first-child').appendTo('#slider ul');
//             $('#slider ul').css('left', '');
//         });
//     };

//     $('span.control_prev').click(function () {
//         moveLeft();
//     });

//     $('span.control_next').click(function () {
//         moveRight();
//     });

// });