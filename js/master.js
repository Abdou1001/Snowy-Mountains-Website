// use Gsap library
gsap.registerPlugin(ScrollTrigger);

// loader wrapper
// make the animation
gsap.to(".snowflake", {
	rotation: 360,
	duration: 3,
	delay: 3,
	repeat: -1
});

// after loaded the page hide the loader  
window.addEventListener("load", () => {
	const loader = document.getElementById("loader-wrapper");

	loader.style.opacity = 0;

	setTimeout(() => {
		loader.style.display = "none";
	}, 500);
});

// cursor point

let clientX = 0;
let clientY = 0;

document.body.addEventListener("mousemove", (e) => {
	clientX = e.clientX;
	clientY = e.clientY;
});

// Continuous updating even while scrolling
function updateCursor() {
	const scrollY = window.scrollY;
	const scrollX = window.scrollX;

	gsap.to(".cursor .circle", {
		x: clientX + scrollX,
		y: clientY + scrollY,
		duration: 0.2,
		ease: "power2.out",
	});

	requestAnimationFrame(updateCursor);
}

updateCursor();

// nav bar
const manuIcon = document.getElementById("manu-icon");
const navBar = document.querySelector("header nav");
const lis = document.querySelectorAll(".navBar ul a");

// click in manu icon will change the icon to cancle icon and open the nav bar
manuIcon.addEventListener("click", () => {
	navBar.classList.toggle("active");
	if (navBar.classList.contains("active")) {
		manuIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
	} else {
		manuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
	}
});
// when scroll the nav bar will close
document.body.onscroll = () => {
	navBar.classList.remove("active");
};

// when click on the <li> in the navbar the navbar will close
lis.forEach((li) => {
	li.addEventListener("click", () => {
		navBar.classList.remove("active");
		manuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
	});
});

// pin the background image
gsap.to("#bg-img", {
	scale: 1.2,
	scrollTrigger: {
		trigger: ".hero_section",
		scrub: 1,
		end: "+=500",
		pin: true,
		anticipatePin: 1,
	},
});

// man image
gsap.to("#man-img", {
	scale: 0.7,
	scrollTrigger: {
		scrub: 1,
	},
});

// Mountains images
gsap.to("#moun-left", {
	x: -900,
	scrollTrigger: {
		scrub: 1,
	},
});
gsap.to("#moun-right", {
	x: 900,
	scrollTrigger: {
		scrub: 1,
	},
});

// clouds images
gsap.to("#cloud-img-1", {
	x: 100,
	scrollTrigger: {
		scrub: 0.5,
	},
});
gsap.to("#cloud-img-2", {
	x: -200,
	scrollTrigger: {
		scrub: 0.5,
	},
});

// title animation
// get all title in page
document.querySelectorAll(".title").forEach((title) => {
	// timeline for animation
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: title,
			scrub: 1,
			start: "top 70%",
			end: "bottom 55%",
		},
	});

	tl.to(title.querySelector("span.right"), {
		x: -15,
	})
		// move left poin to right
		.to(
			title.querySelector("span.left"),
			{
				x: 15,
			},
			"-=.5"
		)
		// change width and height for left poin
		.to(title.querySelector("span.left"), {
			duration: 0.5,
			x: 20,
			width: "51%",
			height: "100%",
			borderRadius: "0px",
		})
		// change width and height for right poin
		.to(
			title.querySelector("span.right"),
			{
				duration: 0.5,
				x: -20,
				width: "51%",
				height: "100%",
				borderRadius: "0px",
			},
			"-=.5"
		)
		// change the color of h1
		.to(title.querySelector("h1"), {
			color: "white",
		});
});

// about section
// text about
gsap.fromTo(
	".about-section .about-text",
	{ filter: "blur(5px)" },
	{
		filter: "blur(0px)",
		scrollTrigger: {
			trigger: ".about-section .about-text",
			scrub: 1,
			start: "top 50%",
			end: "center 70%",
		},
	}
);

// img about
gsap.fromTo(
	".about-section img",
	{
		transform: 'scaleX(0)',
		duration: 4,
	},
	{
		transform: 'scaleX(1)',
		duration: 4,
		scrollTrigger: {
			trigger: ".about-section img",
			scrub: 2,
			start: "top 50%",
			end: "top 60%",
		},
	}
);

gsap.fromTo(
	".about-section .img",
	{ filter: "blur(5px)" },
	{
		filter: "blur(0px)",
		scrollTrigger: {
			trigger: ".about-section img",
			scrub: 1,
			start: "top 50%",
			end: "center 70%",
		},
	}
);

// event section
// show event after an other
const tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".content",
		start: "top top",
		end: "+=3000", // الطول الإجمالي للسكرول
		scrub: true,
		pin: true,
		anticipatePin: 1,
	},
});

// Each section appears and then gradually disappears and the next comes
tl.to(".one", {
	opacity: 1,
	duration: 1,
})
	.to(".one", {
		opacity: 0,
		duration: 1,
	})

	.to(
		".two",
		{
			opacity: 1,
			duration: 1,
		},
		"-=.7"
	)
	.to(".two", {
		opacity: 0,
		duration: 1,
	})

	.to(
		".three",
		{
			opacity: 1,
			duration: 1,
		},
		"-=.7"
	);

// Gallery Section
// make Gallery move from left to right

gsap.to(".gallery .content", {
	x: -2700,
	duration: 60,
	repeat: -1,
	ease: "linear",
});

// footer
document.getElementById("copyright").textContent = new Date().getFullYear();
