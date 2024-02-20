window.onload = function() {
    var elements = document.querySelectorAll('[data-coming-soon]');

    elements.forEach(function(element) {
        if (element.getAttribute('data-coming-soon') === 'true') {
            var comingSoon = document.createElement('coming-soon');
            var lineBreak = document.createElement('br');
            comingSoon.textContent = element.textContent;
            comingSoon.appendChild(lineBreak);
            comingSoon.appendChild(document.createTextNode('Coming soon...'));
            comingSoon.classList.add('project');
            comingSoon.setAttribute('data-category', 'coming-soon');
            element.textContent = '';
            element.parentNode.appendChild(comingSoon);
            element.parentNode.removeChild(element);
        }
    });
};
