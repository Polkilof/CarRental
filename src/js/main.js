$(document).ready(function() {
	$('.sorting__select').select2({
		minimumResultsForSearch: Infinity,
		theme: 'basic',
		width: '170px',
		dropdownParent: $('.sorting__select').parent()
	});

	function formatLang(state) {
		if (!state.id) {
			return state.text;
		}

		var $langText = state.text.substring(0, 3);
		var $state = $(
			'<span></span>'
		);

		$state.text($langText);
		return $state;
	};

	$('#lang').select2({
		minimumResultsForSearch: Infinity,
		theme: 'basic',
		width: '50px',
		dropdownParent: $('#lang').parent(),
		templateSelection: formatLang,
	});

	$('.product-slider').slick({
		arrows: false,
		autoplay: true,
		dots: true,
		infinite: true,
		mobileFirst: true,
		slidesToScroll: 1,
		slidesToShow: 1
	});

	$('.password-toggle').click(function(e) {
		e.preventDefault();
		var input = $(this).parent().find('input');
		if (input.attr('type') === 'password') {
			input.attr('type', 'text');
		} else {
			input.attr('type', 'password');
		}
	});

	$('#reg-link').click(function(e) {
		e.preventDefault();
		$('.modal').modal('hide');

		function showreg() {
			$('#registerModal').modal('show');
		}
		setTimeout(showreg, 350);
	});

	$('#place').select2({
		placeholder: 'Место получения',
		minimumResultsForSearch: Infinity,
		theme: 'basic',
		width: '250px',
		dropdownParent: $('#place').parent(),
	});

	$('#type').select2({
		placeholder: 'Класс авто',
		minimumResultsForSearch: Infinity,
		theme: 'basic',
		width: '100%',
		dropdownParent: $('#type').parent(),
	});

	$('#transmission').select2({
		placeholder: 'Коробка передач',
		minimumResultsForSearch: Infinity,
		theme: 'basic',
		width: '100%',
		dropdownParent: $('#transmission').parent()
	});

	$('#mesta').select2({
		minimumResultsForSearch: Infinity,
		theme: 'basic',
		//width: '100%',
		dropdownParent: $('#mesta').parent()
	});

	$('#engine').select2({
		minimumResultsForSearch: Infinity,
		theme: 'basic',
		//width: '100%',
		dropdownParent: $('#engine').parent()
	});

	$('.header__nav-toggle').click(function(e) {
		e.preventDefault();
		if ($('.header__nav').is(':visible')) {
			$('.header__nav').hide();
			$('body').removeClass('menu-open');
		} else {
			$('.header__nav').show();
			$('body').addClass('menu-open');
		}
	});

	$('.header__nav__close').click(function(e) {
		e.preventDefault();
		if ($('.header__nav').is(':visible')) {
			$('.header__nav').hide();
			$('body').removeClass('menu-open');
		} else {
			$('.header__nav').show();
			$('body').addClass('menu-open');
		}
	});

	$('.img-to-bg').each(function() {
		if ($(this).find('.img-to-bg__image').length) {
			$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')');
		}
	});

	// slider for car rental page
	$('.car-slider__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.car-slider__nav',
		mobileFirst: true,
		infinite: false
	});

	$('.car-slider__nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.car-slider__slider',
		dots: false,
		focusOnSelect: true,
		mobileFirst: true,
		infinite: false
	});

	//accordeon
	$(".accordeon dd").hide().prev().click(function() {
		$(".accordeon dl.current").removeClass("current");
		$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active").parents("dl").removeClass("active");
		$(this).next().not(":visible").slideDown().prev().addClass("active").parents("dl").addClass("active");
	});
	$(".accordeon dl.current dd").show();

	$('[data-toggle="tooltip"]').tooltip()

	$('.ask-a-question form').validate({
		errorClass: "error",
		validClass: "valid",
		highlight: function(element) {
			$(element).parent().addClass('error').removeClass('valid');
		},
		unhighlight: function(element) {
			$(element).parent().removeClass('error').addClass('valid');
		},
		rules: {
			full_name: {
				required: true
			},
			phone: {
				required: true,
				number: true
			},
			message: {
				required: true
			},
			ask_checkbox: {
				required: true
			}
		}
	});
});

var $document = $(window),
	$element = $('.header'),
	className = 'header_has-scrolled';

$document.on('scroll', function() {
	if ($document.scrollTop() > 0) {
		$element.addClass(className);
	} else {
		$element.removeClass(className);
	}

});

$document.on('load', function() {
	if ($document.scrollTop() > 0) {
		$element.addClass(className);
	} else {
		$element.removeClass(className);
	}

});

$('#from-date').datepicker({
	language: 'ru',
	format: 'С d MM'
});

$('#to-date').datepicker({
	language: 'ru',
	format: 'По d MM'
});

$('.search__dropdown-toggle').click(function(e) {
	e.preventDefault();
	if ($('.search__dropdown-menu').is(':visible')) {
		$('.search__dropdown-menu').hide();
	} else {
		$('.search__dropdown-menu').show();
	}
});

$('.search__dropdown-close').click(function(e) {
	e.preventDefault();
	$(this).parent().hide();
});

if ($('#subscribe').length > 0) {
	$('#subscribe').validate({
		errorPlacement: function(error, element) {
			error.appendTo(element.parent().parent());
		},

		highlight: function(element, errorClass) {
			$(element).addClass(errorClass);
			$(element).parent().parent().addClass('has-error');
		},
		unhighlight: function(element, errorClass) {
			$(element).removeClass(errorClass);
			$(element).parent().parent().removeClass('has-error');
		},

		rules: {

			newsletterEmail: {
				required: true,
				email: true
			},

			newsletterTerms: 'required'
		},

		submitHandler: function(form) {
			form.submit();
		}
	});
}

if ($('#registration').length > 0) {
	$('#registration').validate({
		errorPlacement: function(error, element) {
			error.appendTo(element.parent().parent());
		},

		highlight: function(element, errorClass) {
			$(element).addClass(errorClass);
			$(element).parent().parent().addClass('has-error');
		},
		unhighlight: function(element, errorClass) {
			$(element).removeClass(errorClass);
			$(element).parent().parent().removeClass('has-error');
		},

		rules: {
			regName: 'required',
			regMail: {
				required: true,
				email: true
			},
			regPassword: 'required',

			regTerms: 'required'
		},

		submitHandler: function(form) {
			form.submit();
		}
	});
}

if ($('#login').length > 0) {
	$('#login').validate({
		errorPlacement: function(error, element) {
			error.appendTo(element.parent().parent());
		},

		highlight: function(element, errorClass) {
			$(element).addClass(errorClass);
			$(element).parent().parent().addClass('has-error');
		},
		unhighlight: function(element, errorClass) {
			$(element).removeClass(errorClass);
			$(element).parent().parent().removeClass('has-error');
		},

		rules: {

			logMail: {
				required: true,
				email: true
			},
			logPassword: 'required',
		},

		submitHandler: function(form) {
			form.submit();
		}
	});
}

$(window).on('load resize', function() {
	var $gallery = $('.similar-cars__slider');
	if ($(window).width() < 767 && !$gallery.is('.slick-initialized')) {
		$gallery.slick({
			arrows: true,
			dots: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
		});
	} else if ($(window).width() > 768 && $gallery.is('.slick-initialized')) {
		$gallery.slick('unslick');
	}
});

feather.replace();