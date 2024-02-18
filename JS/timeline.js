function scrollToDiv(divId) {
	var div = document.getElementById(divId);
	div.scrollIntoView({ behavior: 'smooth' });
}