var modules = [];

window.addEventListener('load', displayLoadedModules);

function displayLoadedModules(){
	var htmls = [], ul;
	if(modules.length === 0) {
		htmls.push('<li>no modules was loaded!</li>');
	} else {
		modules.forEach(function(moduleName){
			htmls.push('<li>' + moduleName + '</li>');
		});
	}
	ul = document.createElement('ul');
	ul.innerHTML = htmls.join('');
	document.body.appendChild(ul);
}
