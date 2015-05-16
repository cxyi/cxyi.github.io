var main = function() {
	$(function() {
		$('.text').children().hide();
		$('.profile').show();
	});
	
	$('.abtme-menu').click(function() {
	if (!$('.menu').hasClass("open")) {
		$('.menu').animate({
			left: '0%'}, 200);
			$('.menu').addClass("open");
	} else {
		$('.menu').animate({
			left: '-19%'}, 200);
			$('.menu').removeClass("open");
		};
	});
	
	$('.projects').click(function() {
			$('.contact').removeClass("selected");
			$('a.profile').removeClass("selected");
			$('.text').children().hide();
			$('div.project').show();
			$(this).addClass("selected");
	});
	
	$('a.profile').click(function() {
			$('.projects').removeClass("selected");
			$('.contact').removeClass("selected");
			$('.text').children().hide();
			$('div.profile').show();
			$(this).addClass("selected");
	});
	
	$('a.contact').click(function() {
			$('.projects').removeClass("selected");
			$('a.profile').removeClass("selected");
			$('.text').children().hide();
			$('div.contact').show();
			$(this).addClass("selected");
	});
};

$(document).ready(main);