var editor1 = ace.edit("html");
editor1.setTheme("ace/theme/monokai")
editor1.getSession().setMode("ace/mode/html");
editor1.setFontSize(18);
editor1.setShowPrintMargin(false);
editor1.setOption('enableEmmet',true);

var editor2 = ace.edit("css");
editor2.setTheme("ace/theme/monokai")
editor2.getSession().setMode("ace/mode/css");
editor2.setFontSize(18);
editor2.setShowPrintMargin(false);

var editor3 = ace.edit("js");
editor3.setTheme("ace/theme/monokai")
editor3.getSession().setMode("ace/mode/javascript");
editor3.setFontSize(18);
editor3.setShowPrintMargin(false);

var editordom = document.getElementsByClassName("editordom");

var html = document.getElementById("html");
var css = document.getElementById("css");
var js = document.getElementById("js");

css.style.display = 'none';
js.style.display = 'none';

var frame = document.getElementById("frame");
frame.style.height = document.documentElement.clientHeight-32+'px';

for(i=0;i<editordom.length;i++){
	editordom[i].style.height = document.documentElement.clientHeight-32+'px';
}

editor1.focus();

var pane = document.getElementsByClassName("pane");
function reset(){
	for(i=0;i<editordom.length;i++){
		editordom[i].style.display = 'none';
	}
}
pane[0].onclick = function(){
	if(html.style.display =='none'){

	this.className +=' activepane';
	pane[1].className = 'pane';
	pane[2].className = 'pane';

		editordom[1].style.display = 'none';
		editordom[2].style.display = 'none';
		html.style.display = 'block';
		html.style.opacity = 1;
	}
		editor1.focus();

}
pane[1].onclick = function(){
	if(css.style.display ==='none'){

	this.className +=' activepane';
	pane[0].className = 'pane';
	pane[2].className = 'pane';

		editordom[0].style.display = 'none';
		editordom[2].style.display = 'none';
		css.style.display = 'block';
		css.style.opacity = 1;
	}
		editor2.focus();

}
pane[2].onclick = function(){
	if(js.style.display =='none'){

	this.className +=' activepane';
	pane[1].className = 'pane';
	pane[0].className = 'pane';

		editordom[0].style.display = 'none';
		editordom[1].style.display = 'none';
		js.style.display = 'block';
		js.style.opacity = 1;
	}
		editor3.focus();

}
var fdoc = frame.contentDocument;
fdoc.documentElement.style.backgroundColor = "#ccc";

//											HTML EDITOR
editor1.getSession().on('change', function(e)
        {		
        	fdoc.body.innerHTML = '';
        	fdoc.body.innerHTML = editor1.getSession().getValue();
        });
//											CSS EDITOR
var style = fdoc.createElement("style");
fdoc.head.appendChild(style);
editor2.getSession().on('change', function(e)
        {	
        	style.innerHTML = '';
        	style.innerHTML = editor2.getSession().getValue();
        });
//											SCRIPT EDITOR
editor3.getSession().on('change', function(e)
        {	
        	var script = fdoc.createElement("script");
        	script.innerHTML = editor3.getSession().getValue();
        	fdoc.body.appendChild(script);
        });