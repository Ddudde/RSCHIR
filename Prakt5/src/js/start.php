<?php
$kon = new Func("kon", function() use (&$window) {
	call_method($window, "scrollTo", 0.0, get($window, "innerHeight"));
});
$gen_pas = new Func("gen_pas", function() use (&$Math, &$pasr, &$navigator, &$wt, &$warner, &$setTimeout) {
	$password = "";
	$symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for ($i = 0.0; $i < 15.0; $i++) {
		$password = _plus($password, call_method($symbols, "charAt", call_method($Math, "floor", to_number(call_method($Math, "random")) * to_number(get($symbols, "length")))));
	}
	set($pasr, "value", $password);
	call_method(get($navigator, "clipboard"), "writeText", $password);
	$text = "Сгенерирован пароль: ";
	$text = _plus($text, $password);
	$text = _plus($text, ". Он скопирован в буфер обмена");
	set($wt, "innerHTML", $text);
	set(get($warner, "style"), "display", "inline");
	call($setTimeout, new Func(function() use (&$warner, &$wt) {
		set(get($warner, "style"), "display", "none");
		set($wt, "innerHTML", "Допустимы только латинница и цифры");
	}), 10000.0);
});
$inpchv = new Func("inpchv", function($event = null) use (&$setTimeout, &$warnev) {
	$dat = get($event, "target");
	if (is(get(get($dat, "validity"), "patternMismatch")) || eq(get(get($dat, "value"), "length"), 0.0)) {
		set(get($dat, "style"), "animation", "but 1s ease infinite");
		call($setTimeout, new Func(function() use (&$dat) {
			set(get($dat, "style"), "animation", "none");
		}), 1000.0);
		set(get($dat, "style"), "outline", "solid red");
		set(get($warnev, "style"), "display", "inline-block");
	} else {
		set(get($dat, "style"), "outline", "none black");
		set(get($warnev, "style"), "display", "none");
	}
});
$vxo = new Func("vxo", function() use (&$window, &$vxodb, &$logv, &$pasv, &$warnew, &$console) {
	$sp = call_method(get(get($window, "location"), "hash"), "split", ";");
	for ($i = 0.0; $i < get($sp, "length"); $i++) {
		$al = call_method(get($sp, $i), "split", "=");
		if (eq(get($al, 0.0), "#login")) {
			$vxodb = eq(get($al, 1.0), get($logv, "value"));
		}
		if (eq(get($al, 0.0), "pas")) {
			$vxodb &= eq(get($al, 1.0), get($pasv, "value"));
		}
	}
	if (is($vxodb)) {
		set(get($warnew, "style"), "display", "none");
		call_method($console, "log", "vxod");
		set(get($window, "location"), "href", _concat("home.html", get(get($window, "location"), "hash")));
	} else {
		set(get($warnew, "style"), "display", "inline");
	}

});
$rego = new Func("rego", function() use (&$regb, &$pasr, &$logr, &$ch1, &$ch2, &$window, &$onvxod) {
	if (is($regb) && is(get($pasr, "value")) && is(get($logr, "value"))) {
		$ch = is(get($ch1, "checked")) ? 1.0 : (is(get($ch2, "checked")) ? 2.0 : 3.0);
		$hsa = "login=";
		$hsa = _plus($hsa, get($logr, "value"));
		$hsa = _plus($hsa, ";pas=");
		$hsa = _plus($hsa, get($pasr, "value"));
		$hsa = _plus($hsa, ";ch=");
		$hsa = _plus($hsa, $ch);
		set(get($window, "location"), "hash", $hsa);
		call($onvxod);
	}
});
$inpchr = new Func("inpchr", function($event = null) use (&$regb, &$setTimeout, &$warner) {
	$dat = get($event, "target");
	$regb = not((is($or_ = get(get($dat, "validity"), "patternMismatch")) ? $or_ : eq(get(get($dat, "value"), "length"), 0.0)));
	if (is(get(get($dat, "validity"), "patternMismatch")) || eq(get(get($dat, "value"), "length"), 0.0)) {
		set(get($dat, "style"), "animation", "but 1s ease infinite");
		call($setTimeout, new Func(function() use (&$dat) {
			set(get($dat, "style"), "animation", "none");
		}), 1000.0);
		set(get($dat, "style"), "outline", "solid red");
		set(get($warner, "style"), "display", "inline");
	} else {
		set(get($dat, "style"), "outline", "none black");
		set(get($warner, "style"), "display", "none");
	}

});
$checkCaps = new Func("checkCaps", function($event = null) use (&$warnc, &$warncr) {
	$caps = (is($and_ = get($event, "getModifierState")) ? call_method($event, "getModifierState", "CapsLock") : $and_);
	if (is($caps)) {
		set(get($warnc, "style"), "display", "inline");
		set(get($warncr, "style"), "display", "inline");
	} else {
		set(get($warnc, "style"), "display", "none");
		set(get($warncr, "style"), "display", "none");
	}

});
$onreg = new Func("onreg", function() use (&$vxod, &$chvxod) {
	set(get($vxod, "style"), "transform", "rotateX(90deg)");
	call_method($vxod, "addEventListener", "transitionend", $chvxod);
});
$onvxod = new Func("onvxod", function() use (&$reg, &$chreg) {
	set(get($reg, "style"), "transform", "rotateX(90deg)");
	call_method($reg, "addEventListener", "transitionend", $chreg);
});
$chvxod = new Func("chvxod", function() use (&$vxod, &$reg, &$r, &$v) {
	$chvxod = Func::getCurrent();
	set(get($vxod, "style"), "position", "absolute");
	set(get($reg, "style"), "transform", "rotateX(0deg)");
	set(get($reg, "style"), "position", "relative");
	set(get($r, "style"), "display", "none");
	set(get($v, "style"), "display", "inline");
	call_method($vxod, "removeEventListener", "transitionend", $chvxod);
});
$chreg = new Func("chreg", function() use (&$reg, &$vxod, &$r, &$v) {
	$chreg = Func::getCurrent();
	set(get($reg, "style"), "position", "absolute");
	set(get($vxod, "style"), "transform", "rotateX(0deg)");
	set(get($vxod, "style"), "position", "relative");
	set(get($r, "style"), "display", "inline");
	set(get($v, "style"), "display", "none");
	call_method($reg, "removeEventListener", "transitionend", $chreg);
});
set($window, "onload", new Func(function() use (&$vxod, &$document, &$reg, &$r, &$v, &$warnc, &$warncr, &$warnev, &$warner, &$warnew, &$logv, &$logr, &$pasv, &$pasr, &$ch1, &$ch2, &$ch3, &$wt, &$butr, &$butv, &$posform, &$checkCaps, &$window, &$inpchv, &$inpchr, &$regb, &$vxodb) {
	$vxod = call_method($document, "getElementById", "vxod");
	$reg = call_method($document, "getElementById", "reg");
	$r = call_method($document, "getElementById", "r");
	$v = call_method($document, "getElementById", "v");
	$warnc = call_method($document, "getElementById", "warnc");
	$warncr = call_method($document, "getElementById", "warncr");
	$warnev = call_method($document, "getElementById", "warnev");
	$warner = call_method($document, "getElementById", "warner");
	$warnew = call_method($document, "getElementById", "warnew");
	$logv = call_method($document, "getElementById", "logv");
	$logr = call_method($document, "getElementById", "logr");
	$pasv = call_method($document, "getElementById", "pasv");
	$pasr = call_method($document, "getElementById", "pasr");
	$ch1 = call_method($document, "getElementById", "ch1");
	$ch2 = call_method($document, "getElementById", "ch2");
	$ch3 = call_method($document, "getElementById", "ch3");
	$wt = call_method($document, "getElementById", "wt");
	$butr = call_method($document, "getElementById", "butr");
	$butv = call_method($document, "getElementById", "butv");
	$butv = call_method($document, "getElementById", "butv");
	$posform = call_method($document, "getElementById", "posform");
	call_method($window, "addEventListener", "keydown", $checkCaps);
	call_method($logv, "addEventListener", "input", $inpchv);
	call_method($logr, "addEventListener", "input", $inpchr);
	call_method($pasv, "addEventListener", "input", $inpchv);
	call_method($pasr, "addEventListener", "input", $inpchr);
	$regb = false;
	$vxodb = false;
}));
