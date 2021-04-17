"use strict"

// (Определение операционной системы-браузера)
// Проверяем на каком устройстве открыт сайт _pc or _touch ================
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

// Добавляем класс в зависимости от устройства _pc или _touch ============
if (isMobile.any()) {
	document.body.classList.add("_touch");

} else {
	document.body.classList.add("_pc");
}


// Плавная прокрутка при клике ===========================================
//#1
//const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
//if (menuLinks.length > 0) {
//	menuLinks.forEach(menuLink => {
//		menuLink.addEventListener("click", onMenuLinkClick);
//	});

//	function onMenuLinkClick(e) {
//		const menuLink = e.target;
//		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//			const gotoBlock = document.querySelector(menuLink.dataset.goto);
//			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset /* - document.querySelector(".header").offsetHeight */;

//			window.scrollTo({
//				top: gotoBlockValue,
//				behavior: "smooth"
//			});
//			e.preventDefault();
//		}
//	}
//}
//#2 - Пример из project "Binary" 
const anchors = document.querySelectorAll("goto[href*='#content']")
for (let anchor of anchors) {
	anchor.addEventListener("click", function (e) {
		const blockID = anchor.getAttribute("href")
		document.querySelector("" + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
		e.preventDefault();
	})
}


//Параллакс
//#1 - Пример из project "Binary" 
$(window).scroll(function (e) {
	let s = 0 - $(this).scrollTop() / 2.5;
	$(".home__image").css('transform', 'translate3d(0, ' + s + 'px, 0)');
});


//Фильтр=================================================================
//#1 - Пример из project "Binary" 
$(".filter__item").click(function (e) {
	let i = $(this).data("filter");
	if (i == 1) {
		$(".portfolio__column").show();
	}
	else {
		$(".portfolio__column").hide();
		$(".portfolio__column.f_" + i).show();
	}
	$(".filter__item").removeClass("active");
	$(this).addClass("active");
});