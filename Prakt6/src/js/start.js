var vxod, reg, r, v, warnc, logv, logr, pasv, pasr, warnev, warner, warnew, regb, vxodb, ch1, ch2, ch3, wt, butr, butv, warncr, posform, tlang, ttheme, over;
window.onload = ini;

function ini(event){
	vxod = document.getElementById("vxod");
	reg = document.getElementById("reg");
	r = document.getElementById("r");
	v = document.getElementById("v");
	warnc = document.getElementById("warnc");
	warncr = document.getElementById("warncr");
	warnev = document.getElementById("warnev");
	warner = document.getElementById("warner");
	warnew = document.getElementById("warnew");
	logv = document.getElementById("logv");
	logr = document.getElementById("logr");
	pasv = document.getElementById("pasv");
	pasr = document.getElementById("pasr");
	ch1 = document.getElementById("ch1");
	ch2 = document.getElementById("ch2");
	ch3 = document.getElementById("ch3");
	wt = document.getElementById("wt");
	butr = document.getElementById("butr");
	butv = document.getElementById("butv");
	tlang = document.getElementById("tlang");
	ttheme = document.getElementById("ttheme");
	posform = document.getElementById("posform");
	over = document.getElementsByClassName("over");
	window.addEventListener('keydown', checkCaps);
	logv.addEventListener('input', inpchv);
	logr.addEventListener('input', inpchr);
	pasv.addEventListener('input', inpchv);
	pasr.addEventListener('input', inpchr);
	tlang.addEventListener('change', chlang);
	ttheme.addEventListener('change', chtheme);
	regb = false;
	vxodb = false;
	var xhr = new XMLHttpRequest();
	xhr.open('GET', `/php/start.php?en`, true);
	xhr.send(); // (1)
	xhr.onreadystatechange = function() { // (3)
		if (xhr.readyState != 4) return;
		if (xhr.status == 200 && event != null) {
			var bul = xhr.responseText != "true";
			tlang.firstElementChild.checked = bul;
			prlang(bul);
		}
		xhr.open('GET', `/php/start.php?theme`, true);
		xhr.send(); // (1)
		xhr.onreadystatechange = function() { // (3)
			if (xhr.readyState != 4) return;
			if (xhr.status == 200) {
				var bul1 = xhr.responseText == "true";
				ttheme.firstElementChild.checked = bul1;
				prtheme(bul1);
			}
		}
	}
}

function chlang(event){
    console.log('еСТЬ КОНТАКТ');
	var dat = event.target;
	console.log(dat);
	console.log(dat.checked);
	prlang(dat.checked);
	var xhr = new XMLHttpRequest();
	xhr.open('GET', `/php/start.php?en=${!dat.checked}`, true);
	xhr.send(); // (1)
	xhr.onreadystatechange = function() { // (3)
		if (xhr.readyState != 4) return;
		if (xhr.status == 200) {
			console.log(xhr.responseText);
		}
	}
}

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
		over[0].style.backgroundColor = "rgba(255,255,255, 0.3)";
	else
		over[0].style.backgroundColor = "rgba(0,0,0, 0.7)";
}

function prlang(bul)
{
	if(bul) {
		var star = document.getElementsByClassName("start")[0];
		star.innerHTML = `
							Хотите собрать себе новый ПК, но не знаете с чего начать?
							<span><br>Мы вам поможем!</span>
		`;
		posform.innerHTML = `
							<header class="help">
								<span id="r">Нет аккаунта? <a class="helpa" onclick="onreg();">Регистрация!</a></span>
								<span id="v">Есть аккаунт? <a class="helpa" onclick="onvxod();">Вход!</a></span>
							</header>
							<div class="vxod" id="vxod">
								<div>
									<input class="login" type="text" placeholder="Логин" id="logv" required pattern="^[a-zA-Z0-9]+$">
								</div>
								<div>
									<input class="pass" type="password" placeholder="Пароль" id="pasv" required pattern="^[a-zA-Z0-9]+$">
								</div>
								<span class="warn" id="warnc"><img src="media/warning.png" class="warnimg">Включён Caps Lock!</span>
								<div class="button" onclick="vxo();">ВОЙТИ!</div>
							</div>
							<div class="reg" id="reg">
								<div class="logo">
									<p>Выберите иконку для профиля:</p>
									<input id="ch1" name="ico" type="radio" value="1" checked><img class="logoi" src="media/ls-icon1.png">
									<input id="ch2" name="ico" type="radio" value="2"><img class="logoi" src="media/ls-icon2.png">
									<input id="ch3" name="ico" type="radio" value="3"><img class="logoi" src="media/ls-icon3.png">
								</div>
								<div>
									<input class="login" type="text" placeholder="Логин" id="logr" required pattern="^[a-zA-Z0-9]+$">
								</div>
								<div>
									<input class="pass" type="password" placeholder="Пароль" id="pasr" required pattern="^[a-zA-Z0-9]+$">
									<span class="rand" onclick="gen_pas();"><img src="media/random.png" class="randimg">Случайный пароль</span>
								</div>
								<span class="warn" id="warncr"><img src="media/warning.png" class="warnimg">Включён Caps Lock!</span>
								<div class="button" onclick="rego();">ЗАРЕГИСТРИРОВАТЬСЯ!</div>
							</div>
		`;
		warnev.innerHTML = '<img src="media/warning.png" class="warnimg">Внимание! <p>Допустимы только латинница и цифры</p>';
		warner.innerHTML = '<img src="media/warning.png" class="warnimg">Внимание! <p id="wt">Допустимы только латинница и цифры</p>';
		warnew.innerHTML = '<img src="media/warning.png" class="warnimg">Внимание! <p>Неверный логин или пароль</p>';
		var fut = document.getElementById("fut");
		fut.innerHTML = `
						<div id="fut" style="position: fixed; right: 12.5vw; font-size: 2vw; color: #ff9700; bottom: 0; z-index: -1;">
							© 2021 ООО "Рога и Копыта" Все права защищены. Project on <a href="https://github.com/Ddudde/Kursach-HTML" style="color: #ff9700;">github</a>.
						</div>
		`;
		ttheme.innerHTML = `
							<input type="checkbox">
							<span class="checkbox-green-switch" data-label-on="Свет" data-label-off="Тьма"></span>
		`;
	} else {
		var star = document.getElementsByClassName("start")[0];
		star.innerHTML = `
							Do you want to build yourself a new PC, but don't know where to start?
							<span><br>We will help you!</span>
		`;
		posform.innerHTML = `
							<header class="help">
								<span id="r">No account? <a class="helpa" onclick="onreg();">Registration!</a></span>
								<span id="v">Have an account? <a class="helpa" onclick="onvxod();">Entrance!</a></span>
							</header>
							<div class="vxod" id="vxod">
								<div>
									<input class="login" type="text" placeholder="Login" id="logv" required pattern="^[a-zA-Z0-9]+$">
								</div>
								<div>
									<input class="pass" type="password" placeholder="Password" id="pasv" required pattern="^[a-zA-Z0-9]+$">
								</div>
								<span class="warn" id="warnc"><img src="media/warning.png" class="warnimg">Caps Lock on!</span>
								<div class="button" onclick="vxo();">ENTER!</div>
							</div>
							<div class="reg" id="reg">
								<div class="logo">
									<p>Select an icon for your profile:</p>
									<input id="ch1" name="ico" type="radio" value="1" checked><img class="logoi" src="media/ls-icon1.png">
									<input id="ch2" name="ico" type="radio" value="2"><img class="logoi" src="media/ls-icon2.png">
									<input id="ch3" name="ico" type="radio" value="3"><img class="logoi" src="media/ls-icon3.png">
								</div>
								<div>
									<input class="login" type="text" placeholder="Login" id="logr" required pattern="^[a-zA-Z0-9]+$">
								</div>
								<div>
									<input class="pass" type="password" placeholder="Password" id="pasr" required pattern="^[a-zA-Z0-9]+$">
									<span class="rand" onclick="gen_pas();"><img src="media/random.png" class="randimg">Random pass</span>
								</div>
								<span class="warn" id="warncr"><img src="media/warning.png" class="warnimg">Caps Lock on!</span>
								<div class="button" onclick="rego();">REGISTER!</div>
							</div>
		`;
		warnev.innerHTML = '<img src="media/warning.png" class="warnimg">Warning! <p>Only Latin letters and numbers are allowed</p>';
		warner.innerHTML = '<img src="media/warning.png" class="warnimg">Warning! <p id="wt">Only Latin letters and numbers are allowed</p>';
		warnew.innerHTML = '<img src="media/warning.png" class="warnimg">Warning! <p>Invalid username or password</p>';
		var fut = document.getElementById("fut");
		fut.innerHTML = `
						<div id="fut" style="position: fixed; right: 12.5vw; font-size: 2vw; color: #ff9700; bottom: 0; z-index: -1;">
							© 2021 LLC "Рога и Копыта" All rights reserved. Project on <a href="https://github.com/Ddudde/Kursach-HTML" style="color: #ff9700;">github</a>.
						</div>
		`;
		ttheme.innerHTML = `
							<input type="checkbox">
							<span class="checkbox-green-switch" data-label-on="Light" data-label-off="Dark"></span>
		`;
	}
	ini(null);
}

function kon(){
    window.scrollTo(0, window.innerHeight);
}

function gen_pas(){
    var password = "";
    var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 15; i++){
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));     
    }
    pasr.value = password;
	//navigator.clipboard.writeText(password);
	var text = tlang.firstElementChild.checked ? 'Сгенерирован пароль: ' : 'Password generated: ';
	text += password;
	text += tlang.firstElementChild.checked ? '. Он скопирован в буфер обмена' : '. It is copied to the clipboard'
	wt.innerHTML = text;
	warner.style.display = "inline";
	setTimeout(function (){
		warner.style.display = "none";
		wt.innerHTML = tlang.firstElementChild.checked ? 'Допустимы только латинница и цифры' : 'Only Latin letters and numbers are allowed';
	}, 10000);
}

function inpchv(event){
	var dat = event.target;
	if (dat.validity.patternMismatch || dat.value.length == 0) {
		dat.style.animation = "but 1s ease infinite";
		setTimeout(function () {dat.style.animation = 'none'}, 1000)
		dat.style.outline = "solid red";
		warnev.style.display = "inline-block";
	} else {
		dat.style.outline = "none black";
		warnev.style.display = "none";
	}
}

function vxo(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', `/php/start.php?log=${logv.value}&pas=${pasv.value}`, true);
	xhr.send(); // (1)
	xhr.onreadystatechange = function() { // (3)
		if (xhr.readyState != 4) return;
		if (xhr.status == 200) {
			var bul = xhr.responseText == "1";
			console.log(bul);
			if(bul)
			{
				warnew.style.display = 'none';
				console.log('vxod');
				window.location.href = 'home.html';
			}
			else
				warnew.style.display = 'inline';
		}
	}
}

function rego(){
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
		onvxod();
	}
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

function checkCaps(event) {
    var caps = event.getModifierState && event.getModifierState('CapsLock');
	if (caps){
		warnc.style.display = "inline";
		warncr.style.display = "inline";
	}else{
		warnc.style.display = "none";
		warncr.style.display = "none";
	}
}

function onreg(){
	console.log('sdffds');
	vxod.style.transform = "rotateX(90deg)";
	vxod.addEventListener('transitionend', chvxod);
}

function onvxod(){
	reg.style.transform = "rotateX(90deg)";
	reg.addEventListener('transitionend', chreg);
}

function chvxod(){
	vxod.style.position = "absolute";
	reg.style.transform = "rotateX(0deg)";
	reg.style.position = "relative";
	r.style.display = "none";
	v.style.display = "inline";
	vxod.removeEventListener('transitionend', chvxod);
}

function chreg(){
	reg.style.position = "absolute";
	vxod.style.transform = "rotateX(0deg)";
	vxod.style.position = "relative";
	r.style.display = "inline";
	v.style.display = "none";
	reg.removeEventListener('transitionend', chreg);
}