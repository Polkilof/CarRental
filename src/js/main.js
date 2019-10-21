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
	
	$('.form').validate({
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
			name_company: {
				required: true
			},
			identification_code: {
				required: true,
				number: true
			},
			surname: {
				required: true
			},
			email: {
				required: true,
				myEmail: true
			},
			email2: {
				required: true,
				myEmail: true
			},
			phone: {
				required: true,
				myPhone: true
			},
			message: {
				required: true
			},
			ask_checkbox: {
				required: true
			}
		}
	});
	$.validator.addMethod(
		"myPhone",
		function(value, element){
			return value.match(/[0-9\-\(\)\s]+/);
		}
	);
	$.validator.addMethod(
		"myEmail",
		function(value, element){
			return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
		}
	);

});


var $document = $(window),
	$element = $('.header'),
	className = 'header_has-scrolled';

$document.on('scroll load', function() {
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


var form = $("#example-advanced-form").show();
form.steps({
	headerTag: "h3",
	bodyTag: "fieldset",
	transitionEffect: "slideLeft",
	labels: {
		cancel: "Назад",
		current: "",
		finish: "Оформить заявку",
		next: "Далее",
		previous: "Назад",
	},
	onStepChanging: function (event, currentIndex, newIndex)
	{
		// Allways allow previous action even if the current form is not valid!
		if (currentIndex > newIndex)
		{
			return true;
		}
		//form.validate().settings.ignore = ":disabled,:hidden";
		return form.valid();
	},
	onFinishing: function (event, currentIndex)
	{
		//form.validate().settings.ignore = ":disabled";
		return form.valid();
	},
	onFinished: function (event, currentIndex)
	{
		alert("Submitted!");
	}
}).validate({
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
		name_company: {
			required: true
		},
		identification_code: {
			required: true,
			number: true
		},
		surname: {
			required: true
		},
		email_person: {
			required: true,
			email: true,
		},
		email_company: {
			required: true,
			email: true,
		},
		phone: {
			required: true,
			number: true,
		},
		message: {
			required: false
		},
		ask_checkbox: {
			required: true
		}
	}
});


function uploadImage(){
	var button = $('.images .pic');
	var uploader = $('<input type="file" accept="image/*" />');
	var images = $('.images');
	var deleteItem = $('.delete-img');
	button.on('click', function () {
		uploader.click()
	})
	uploader.on('change', function () {
		var reader = new FileReader();
		var name = uploader.val().replace(/\\/g, '/').replace(/.*\//, '');
		reader.onload = function(event) {
			images.prepend('<li><div class="img" style="background-image: url(\'' + event.target.result + '\');" rel="'+ event.target.result  +'"></div><p>'+ name +'</p><a href="#" class="delete-img">Удалить</a></li>')
		}
		reader.readAsDataURL(uploader[0].files[0])
	})
	images.on('click', '.delete-img', function(e){
		e.preventDefault();
		$(this).parents('li').remove()
	})
}uploadImage();

function mapInitialize(map_) {
	var latlng = new google.maps.LatLng(51.5287718, -0.2416804);
	var myOptions = {
		center: latlng,
		zoom: 12,
		zoomControl: true,
		scaleControl: true,
		//scrollwheel: true,
		//mapTypeControl: false,
		//streetViewControl: false,
		//rotateControl: false,
		//disableDoubleClickZoom: true
	};
	var map = new google.maps.Map(document.getElementById(map_), myOptions);
	var stylesBW = [
		{
			featureType: "all",
			stylers: [
				{ saturation: 0 }
			]
		}
	];
	map.setOptions({styles: stylesBW});
	function addMarker(feature) {
		var marker = new google.maps.Marker({
			position: feature.position,
			icon: '../images/ico-marker.png',
			map: map
		});
	}
	var features = [
		{
			position: new google.maps.LatLng(51.5073509, -0.1277583)
		}
	];

	for (var i = 0, feature; feature = features[i]; i++) {
		addMarker(feature);
	}
}
$('#map').each(function(){
	var map_ = $(this).attr('id');
	mapInitialize(map_);
});