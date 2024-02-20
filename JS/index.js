function scrollToDiv(divId) {
	var div = document.getElementById(divId);
	div.scrollIntoView({ behavior: 'smooth' });
}

function navBurger() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
}

function openDialog(dialog) {
	var dialog = document.getElementById(dialog);
	dialog.showModal();
}

function closeDialog(dialog) {
	var dialog = document.getElementById(dialog);
	dialog.close();
}

function filterProjects() {
	var filter = document.getElementById('filter').value;
	var projects = document.querySelectorAll('.project');
	projects.forEach(function(project) {
		if (filter === 'all') {
			project.style.display = 'block';
		} else if (filter === 'available' && project.getAttribute('data-coming-soon') === 'false') {
			project.style.display = 'block';
		} else if (project.getAttribute('data-category') === filter) {
			project.style.display = 'block';
		} else {
			project.style.display = 'none';
		}
	});
}