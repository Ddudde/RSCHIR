<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Комплектующие для ПК</title>
		<link rel="shortcut icon" href="media/favicon.png">
		<link rel="stylesheet" href="css/start.css">
		<script src="js/start.js"></script>
		<script src="js/default.js"></script>
	</head>
	<body>
		<div class="fullscreen-bg">
			<video loop muted autoplay class="fullscreen-bg__video">
				<source src="media/background.mp4" type="video/mp4">
			</video>
			<div class="over"></div>
		</div>
		<div class="start">Хотите собрать себе новый ПК, но не знаете с чего начать?
			<span><br>Мы вам поможем!</span>
		</div>
		<label class="checkbox-green" id="tlang">
			<input type="checkbox" checked>
			<span class="checkbox-green-switch" data-label-on="RU" data-label-off="EN"></span>
		</label>
		<label class="checkbox-green" id="ttheme">
			<input type="checkbox">
			<span class="checkbox-green-switch" data-label-on="Свет" data-label-off="Тьма"></span>
		</label>
		<div class="startimg" onclick="kon();"><img src="media/start.gif"></div>
		<form action="#" class="posit" id="posform">
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
		</form>
		<div class="warne" id="warnew"><img src="media/warning.png" class="warnimg">Внимание! <p>Неверный логин или пароль</p></div>
		<div class="warne" id="warnev"><img src="media/warning.png" class="warnimg">Внимание! <p>Допустимы только латинница и цифры</p></div>
		<div class="warne" id="warner"><img src="media/warning.png" class="warnimg">Внимание! <p id="wt">Допустимы только латинница и цифры</p></div>
	</body>
</html>