// ==UserScript==
// @name             Minimalist Gmail
// @author           Ansel Santosa
// @namespace        http://chrome.google.com/webstore
// @description      Features that require one time initialization on complete page load.
// ==/UserScript==

chrome.extension.sendRequest({elements: "o"}, function(response) {
	function init() {
		var el = document.body.getElementsByTagName('b');
		if (el && el.length && (el[0].innerHTML == 'Gmail' || el[0].innerHTML == 'Mail' || el[0].innerHTML == 'Google Mail')) {
			wait();
			if (response.o.header) {
				var logo = document.getElementById(":rm");
				var toggle = document.createElement("div");
				var text = document.createTextNode("")
				toggle.setAttribute("id", "headerToggle");
				toggle.appendChild(text);
				logo.parentNode.parentNode.parentNode.insertBefore(toggle, logo.parentNode.parentNode);
				logo.parentNode.parentNode.setAttribute("style", "display: none !important;");
				document.getElementById("headerToggle").setAttribute("onClick", "javascript:if(document.getElementById('headerToggle').nextSibling.getAttribute('style')==''){document.getElementById('headerToggle').nextSibling.setAttribute('style', 'display: none !important;');}else{document.getElementById('headerToggle').nextSibling.setAttribute('style', '');};"); //document.getElementById('headerToggle').setAttribute('style','-webkit-box-shadow: 0 -7px 14px -7px rgba(0,0,0,.75) inset;');
			}
		} else window.setTimeout(init,1000);
	}
	function keypress(event) {
		element = event.target;
		elementName = element.nodeName.toLowerCase();
		if (elementName == "input" || elementName == "textarea") return true;
		else wait();
		return true;
	}
	function doit() {
		if (response.o.starHigh) {
			var img = document.getElementsByTagName("img");
			try {
				for (x in img) {
					if ((img[x].getAttribute("class") == "W5RYx") && !((img[x].parentNode.previousSibling.firstChild.getAttribute("style") == "visibility: visible; ") && response.o.high)) {
						if (response.o.starCLR != null && response.o.starCLR != "")
							img[x].parentNode.parentNode.setAttribute("style", "background-color: " + response.o.starCLR + ";");
						else img[x].parentNode.parentNode.setAttribute("style", "background-color: #ffcc00;");
					} else if (img[x].getAttribute("class") == "EqK8f" && !((img[x].parentNode.previousSibling.firstChild.getAttribute("style") == "visibility: visible; ") && response.o.high)) 
						img[x].parentNode.parentNode.setAttribute("style", "");
				}
			} catch (err) {}
		}
		if (response.o.gbarH && !document.getElementById('gbarToggle')) {
			try {
				var login = document.getElementById("guser");
				var toggleG = document.createElement("div");
				var textG = document.createTextNode("")
				toggleG.setAttribute("id", "gbarToggle");
				toggleG.appendChild(textG);
				login.parentNode.parentNode.parentNode.insertBefore(toggleG, login.parentNode.parentNode.nextSibling);
				login.parentNode.parentNode.setAttribute("style", "display: none !important;");
				document.getElementById("gbarToggle").setAttribute("onClick", "javascript:if(document.getElementById('gbarToggle').previousSibling.getAttribute('style')==''){document.getElementById('gbarToggle').previousSibling.setAttribute('style', 'display: none !important;');}else{document.getElementById('gbarToggle').previousSibling.setAttribute('style', '');};"); //document.getElementById('gbarToggle').setAttribute('style','-webkit-box-shadow: 0 7px 14px -7px rgba(0,0,0,.75) inset;');
			} catch (err) {}
		}
		if (response.o.cbar && !document.getElementById('cbarOne')) {
			var one = document.getElementById("gbar").childNodes[0].childNodes[0];
			one.setAttribute("style", "font-weight: normal;");
			one.setAttribute("class", "");
			one.innerHTML = "<a target=\"_blank\" id=\"cbarOne\" href=\"" + response.o.c_u_1 + "\" class=\"gb1 qq\">" + response.o.c_n_1 + "</a>";
			var two = document.getElementById("gbar").childNodes[0].childNodes[2];
			two.setAttribute("href", response.o.c_u_2);
			two.innerHTML = response.o.c_n_2;
			var three = document.getElementById("gbar").childNodes[0].childNodes[4];
			three.setAttribute("href", response.o.c_u_3);
			three.innerHTML = response.o.c_n_3;
			var four = document.getElementById("gbar").childNodes[0].childNodes[6];
			four.setAttribute("href", response.o.c_u_4);
			four.innerHTML = response.o.c_n_4;
			var five = document.getElementById("gbar").childNodes[0].childNodes[8];
			five.setAttribute("href", response.o.c_u_5);
			five.innerHTML = response.o.c_n_5;
		}
		if (response.o.user && !document.getElementById('gUserUser')) {
			var user = document.getElementById(":qy");
			user.setAttribute("style","display: none !important;");
			user.parentNode.setAttribute("id","gUserUser");
			user.parentNode.nextSibling.setAttribute("style","display: none !important;");
		}
		if (response.o.labs && !document.getElementById('gUserLabs')) {
			var labs = document.getElementById(":r7");
			labs.setAttribute("style","display: none !important;");
			labs.previousSibling.setAttribute("id","gUserLabs");
			labs.previousSibling.previousSibling.previousSibling.setAttribute("style","display: none !important;");
		}
		if (response.o.settings && !document.getElementById('gUserSettings')) {
			var settings = document.getElementById(":r6");
			settings.setAttribute("style","display: none !important;");
			settings.previousSibling.setAttribute("id","gUserSettings");
			settings.previousSibling.setAttribute("style","display: none !important;");
		}
		if (response.o.help && !document.getElementById('gUserHelp')) {
			var help = document.getElementById(":r3");
			help.setAttribute("style","display: none !important;");
			help.parentNode.setAttribute("id","gUserHelp");
			help.parentNode.previousSibling.setAttribute("style","display: none !important;");
		}
		if (response.o.out && !document.getElementById('gUserOut')) {
			var out = document.getElementById(":r5");
			out.setAttribute("style","display: none !important;");
			out.previousSibling.setAttribute("id","gUserOut");
			out.previousSibling.setAttribute("style","display: none !important;");
		}
	}
	function wait() {
		var starcheck = setInterval(doit, 1000);
	}
	
	init();
	document.addEventListener("keypress", keypress, false);
	document.addEventListener("click", wait, false);
});