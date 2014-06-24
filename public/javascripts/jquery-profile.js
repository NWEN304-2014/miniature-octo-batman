var about = $('#bottom-section-about');
var trophy = $('#bottom-section-trophy');
var jumps = $('#bottom-section-jumps');
var contact = $('#bottom-section-contact');
var aboutIcon = $('#about-img');
var trophyIcon = $('#trophy-img');
var jumpsIcon = $('#jumps-img')
var contactIcon = $('#contact-img')

trophyIcon.on('click',function(e){
	about.removeClass('fade');
	jumps.removeClass('fade');
	contact.removeClass('fade');
	trophy.addClass('fade');



});

aboutIcon.on('click',function(e){
	about.addClass('fade');
	trophy.removeClass('fade');
	contact.removeClass('fade');
	jumps.removeClass('fade');



});

aboutIcon.on('click',function(e){
	about.addClass('fade');
	trophy.removeClass('fade');
	contact.removeClass('fade');
	jumps.removeClass('fade');



});

jumpsIcon.on('click',function(e){
	about.removeClass('fade');
	trophy.removeClass('fade');
	contact.removeClass('fade');
	jumps.addClass('fade');



});

contactIcon.on('click',function(e){
	about.removeClass('fade');
	trophy.removeClass('fade');
	contact.addClass('fade');
	jumps.removeClass('fade');



});


