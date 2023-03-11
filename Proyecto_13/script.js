function debounce(func, wait = 20, inmediate = true) {
	var timeout;
	return function () {
		var context = this, args = arguments;
		var later = function () {
			timeout = null;
			if (!inmediate) func.apply(context, args);
		};
		var callNow = inmediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
	sliderImages.forEach(sliderImage => {
		const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
		const imageBottom = sliderImage.offsetTop + sliderImage.height;
		const isHalfShown = slideInAt > sliderImage.offsetTop;
		const isNotScrolledPast = window.scrollY < imageBottom;

		if (isHalfShown && isNotScrolledPast){
			sliderImage.classList.add('active');
		}else{
			sliderImage.classList.remove('active');
		};
	});
};

window.addEventListener('scroll', debounce(checkSlide));