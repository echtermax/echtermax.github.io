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

function openFilter() {
	var filterOpt = document.querySelectorAll('.filter');
	filterOpt.forEach(function(filter) {
		if (filter.style.display === 'block') {
			filter.style.display = 'none';
		} else {
			filter.style.display = 'block';
		}
	});
}

function filterProjects(filter) {
	var projects = document.querySelectorAll('.project');
	var filterLabel = document.getElementById('filter');
	var filterOpt = document.getElementsByName(filter);
	var text = filterOpt[0].innerHTML;
	filterLabel.innerHTML = text;
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

function filterProjectsByTag(tag, dialog) {
	var filter = document.getElementById('filter');
	filter.value = tag;
	filterProjects(tag);
	closeDialog(dialog);
}