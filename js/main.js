$(document).ready(function(){
	// -->Табы
	$('.world__tabs_link').click(function(tabs){
		tabs.preventDefault();
		$('.world__tabs_link').removeClass('world__tabs_link--active');
		$('.world__column_item').removeClass('world__column_item--active');
		$(this).addClass('world__tabs_link--active');
		$($(this).attr('href')).addClass('world__column_item--active');
	});
		$('.world__tabs_link:first').click();
	// <--Табы	



	// ------> Popup
		// Клик для открытия 
		$('.but__modal').click(function() {
		$("body").addClass('no-scroll');
		$('.login').fadeIn();
		return false;
		});	

		// Клик по ссылке "Закрыть".
		$('.login__close-btn').click(function() {
			$("body").removeClass('no-scroll');
			$(this).parents('.login').fadeOut();
			return false;
		});        
	 
		// Закрытие по клавише Esc.
		$(document).keydown(function(e) {
			$("body").removeClass('no-scroll');
			if (e.keyCode === 27) {
				e.stopPropagation();
				$('.login').fadeOut();
			}
		});
		
		// Клик по фону, но не по окну.
		$('.login').click(function(e) {
			$("body").removeClass('no-scroll');
			if ($(e.target).closest('.login__content').length == 0) {
				$(this).fadeOut();					
			}
		});
	// <------- Popup



	// ----------> Spoiler
	$('.auto__row_item-imf').click(function(){
		$(this).toggleClass('active').next().slideToggle(300);
	});
	// <-------- Spoiler


	// ------------> Menu Burger
	$('.header__burger').click(function(event){
		$('.header__burger, .adaptive__menu').toggleClass('active');
	});
	// <------------ Menu Burger
});