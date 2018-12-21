window.addEventListener('load', function() {
	let el = document.querySelector('#swaper'),
		swap_box = document.querySelector('.swap-box'),
		width,
		count;

	width = swap_box.offsetWidth;
	count = el.children.length;

	slideLoop(el, width, count, 2000);
} ,false);

function slideLoop(el, width, count, timer) {
	let _el = el,
		_count = count,
		_timer = timer,
		num = 0;


	setInterval(function() {
		if(num >= count){
			num = 0
		}

		_el.style.left = -num*width + 'px';
		num++;
	}, _timer)

}