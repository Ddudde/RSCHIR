var logimg, limg, logr, pasr, wt, warner, warnc, regb, ttheme;
document.addEventListener("DOMContentLoaded",function(){
	logimg = document.getElementById("logimg");
	logr = document.getElementById("logr");
	pasr = document.getElementById("pasr");
	wt = document.getElementById("wt");
	warner = document.getElementById("warner");
	warnc = document.getElementById("warnc");
	var ch1 = new Image();
	ch1.src = "media/ls-icon1.png";
	ch1.id = 'limg';
	var ch2 = new Image();
	ch2.src = "media/ls-icon2.png";
	ch2.id = 'limg';
	var ch3 = new Image();
	ch3.src = "media/ls-icon3.png";
	ch3.id = 'limg';
	var edit = new Image();
	edit.src = "media/edit.png";
	edit.id = 'eimg';
	let icons = [ch1, ch2, ch3];
	logimg.innerHTML = '';
	var xhr = new XMLHttpRequest();
	xhr.open('GET', `/php/start.php?ch`, true);
	xhr.send(); // (1)
	xhr.onreadystatechange = function() { // (3)
		if (xhr.readyState != 4) return;
		if (xhr.status == 200) {
			logimg.appendChild(icons[parseInt(xhr.responseText)-1]);
			console.log(xhr.responseText);
			limg = document.getElementById("limg");
		}
	}
	var tlog = document.createElement("span");
	tlog.id = 'tlog';
	var xhr1 = new XMLHttpRequest();
	xhr1.open('GET', `/php/start.php?log`, true);
	xhr1.send(); // (1)
	xhr1.onreadystatechange = function() { // (3)
		if (xhr1.readyState != 4) return;
		if (xhr1.status == 200) {
			tlog.innerHTML = xhr1.responseText;
			console.log(xhr1.responseText);
		}
	}
	logimg.appendChild(tlog);
	logimg.appendChild(edit);
	window.addEventListener('keydown', checkCaps);
	logr.addEventListener('input', inpchr);
	pasr.addEventListener('input', inpchr);
	regb = false;
	ttheme = document.getElementById("ttheme");
	ttheme.addEventListener('change', chtheme);
	var xhr2 = new XMLHttpRequest();
	xhr2.open('GET', `/php/start.php?theme`, true);
	xhr2.send(); // (1)
	xhr2.onreadystatechange = function() { // (3)
		if (xhr2.readyState != 4) return;
		if (xhr2.status == 200) {
			var bul = xhr2.responseText == "true";
			ttheme.firstElementChild.checked = bul;
			prtheme(bul);
		}
	}
});

function chtheme(event){
    console.log('еСТЬ КОНТАКТ');
	var dat = event.target;
	console.log(dat);
	prtheme(dat.checked);
	var xhr = new XMLHttpRequest();
	xhr.open('GET', `/php/start.php?theme=${dat.checked}`, true);
	xhr.send(); // (1)
	xhr.onreadystatechange = function() { // (3)
		if (xhr.readyState != 4) return;
		if (xhr.status == 200) {
			console.log(xhr.responseText);
		}
	}
}

function prtheme(bul)
{
	if(bul)
		document.body.style.backgroundColor = "rgba(0,0,0, 0.7)";
	else
		document.body.style.backgroundColor = "#242424";
}

function checkCaps(event) {
    var caps = event.getModifierState && event.getModifierState('CapsLock');
	if (caps)
		warnc.style.display = "inline";
	else
		warnc.style.display = "none";
}

function chang(){
	if(regb && pasr.value && logr.value){
		let ch = ch1.checked ? 1 : ch2.checked ? 2 : 3;
		var xhr = new XMLHttpRequest();
		xhr.open('GET', `/php/start.php?reset=true&log=${logr.value}&pas=${pasr.value}&ch=${ch}`, true);
		xhr.send(); // (1)
		xhr.onreadystatechange = function() { // (3)
			if (xhr.readyState != 4) return;
			if (xhr.status == 200) {
				console.log(xhr.responseText);
			}
		}
		window.location.href = `home.php`;
	}
}

function gen_pas(){
    var password = "";
    var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 15; i++){
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));     
    }
    pasr.value = password;
	navigator.clipboard.writeText(password);
	wt.innerHTML = `Сгенерирован пароль: ${password}. Он скопирован в буфер обмена`;
	warner.style.display = "inline";
	setTimeout(function (){
		warner.style.display = "none";
		wt.innerHTML = `Допустимы только латинница и цифры`;
	}, 10000);
}

function inpchr(event){
	var dat = event.target;
	regb = !(dat.validity.patternMismatch || dat.value.length == 0);
	if (dat.validity.patternMismatch || dat.value.length == 0) {
		dat.style.animation = "but 1s ease infinite";
		setTimeout(function () {dat.style.animation = "none"}, 1000)
		dat.style.outline = "solid red";
		warner.style.display = "inline";
	} else {
		dat.style.outline = "none black";
		warner.style.display = "none";
	}
}