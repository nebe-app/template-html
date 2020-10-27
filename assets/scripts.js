window.FILL = async (inputs) => {
	window.clickTag = inputs.link;

	const backgroundeEl = document.querySelector('.background');
	const headlineEl = document.querySelector('.headline');
	const modellEl = document.querySelector('.model');
	const badgeEl = document.querySelector('.product__badge');
	const countdownTextEl = document.querySelector('.countdown__description');
	const ctaEl = document.querySelector('.cta__inner');

	backgroundeEl.style.background = inputs.background;
	headlineEl.innerHTML = inputs.headline;
	modellEl.innerHTML = inputs.model;
	countdownTextEl.innerHTML = inputs.countdown_text;
	ctaEl.innerHTML = inputs.cta;

	if (inputs.badge === 'Ano') {
		badgeEl.style.display = 'flex';
	} else {
		badgeEl.style.display = 'none';
	}

	document.querySelector('[data-product-price]').innerHTML = inputs.price;

	document.querySelector('.product').style.backgroundImage = `url("${inputs.image_link}")`;

	if (!document.querySelector('.product').style.backgroundImage.length) {
		throw new Error('Image is not inserted into template');
	}

	// Set the date we're counting down to
	let countDownDate = new Date(`${inputs.countdown_date}`).getTime();

	// Update the count down every 1 second
	let x = setInterval(function () {

		// Get today's date and time
		let now = new Date().getTime();

		// Find the distance between now and the count down date
		let distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in the element
		document.getElementById("countdown").innerHTML =
			days + "<span>d</span>" + hours + "<span>h</span>" + minutes + "<span>m</span>" + seconds + "<span>s</span>";

		// If the count down is over, write some text
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("countdown").innerHTML = "<span>SOUTĚŽ UKONČENA</span>";
		}
	});
};


