<?php
$stri = $_GET['param_name'];
$dvu = $stri;
$form = $dvu & 0b1111000000000000;
$cvet = $dvu & 0b0000111100000000;
$razmer_w = $dvu & 0b0000000011110000;
$razmer_h = $dvu & 0b0000000000001111;
$form = $form >> 12;
$cvet = $cvet >> 8;
$razmer_w = $razmer_w >> 4;
$razmer_w = $razmer_w * 100;
$razmer_r = $razmer_h * 10;
$razmer_h = $razmer_h * 100;
$razmer_x = $razmer_w / 2;
$razmer_y = $razmer_h / 2;
$r_cvet = 0;
switch($cvet):
	case 1:
		$r_cvet = '#ff0000';#красный
	break;
	case 2:
		$r_cvet = '#00ff00';#зелёный
	break;
	case 3:
		$r_cvet = '#0000ff';#синий
	break;
	case 4:
		$r_cvet = '#000000';#чёрный
	break;
	case 5:
		$r_cvet = '#ffffff';#белый
	break;
	endswitch;

switch($form):
	case 1:
		echo "<svg width='$razmer_w' height='$razmer_h' r='$razmer_r' xmlns='http://www.w3.org/1999/svg'>
		<circle cx='$razmer_x' cy='$razmer_y' r='$razmer_r' fill='$r_cvet' />
		</svg>";
	break;
	case 2:
		echo "<svg width='$razmer_w' height='$razmer_h' xmlns='http://www.w3.org/2000/svg'>
		<rect x='$razmer_x' y='$razmer_y' width='$razmer_w' height='$razmer_h' fill='$r_cvet' />
		</svg>";
	break;
	case 3:
		echo "<svg width='$razmer_w' height='$razmer_h' r='$razmer_r' xmlns='http://www.w3.org/1999/svg'>
		<rect x='$razmer_x' y='$razmer_y' width='$razmer_w' height='$razmer_h' fill='$r_cvet' />
		</svg>";
	break;
	endswitch;
	#0b0010000100110011(8499) - красный квадрат 300х300
?>