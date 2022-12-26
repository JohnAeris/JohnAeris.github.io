const header = document.querySelector("header")

window.addEventListener("scroll", function() {
	header.classList.toggle("sticky", window.scrollY > 0)
});

document.addEventListener("scroll", ()=> {
	if (window.scrollY > 1000) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled")
	}
})
