/* file: /home/zhangyao/simplebuild-example/src/js/app.js */
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

/* file: /home/zhangyao/simplebuild-example/src/js/1.js */
modules.push('1.js');
console.log('module [1.js] was loaded!');
console.log('somthing');
console.log('oseasy');

/* file: /home/zhangyao/simplebuild-example/src/js/2.js */
modules.push('2.js');
console.log('module [2.js] was loaded!!');

/* file: /home/zhangyao/simplebuild-example/src/js/3.js */
modules.push('3.js');
console.log('module [3.js] was loaded!!!');
