<?php
	$cookieExpire = time()+(60*60*24);
	if(isset($_GET['reset']) && $_GET['reset'] == true)
	{
		if(isset($_GET['log']) && isset($_GET['pas']) && isset($_GET['ch']))
		{
			setcookie('login', $_GET['log'], $cookieExpire, '/');
			setcookie('pass', $_GET['pas'], $cookieExpire, '/');
			setcookie('ch', $_GET['ch'], $cookieExpire, '/');
			echo $_GET['log'];
			return;
		}
	}
	if(isset($_GET['log']))
	{
		if(isset($_GET['pas']))
		{
			if(!$_COOKIE['login'] && !$_COOKIE['pass'] && !$_COOKIE['ch'])
			{
				setcookie('login', $_GET['log'], $cookieExpire, '/');
				setcookie('pass', $_GET['pas'], $cookieExpire, '/');
				setcookie('ch', $_GET['ch'], $cookieExpire, '/');
				echo $_GET['log'];
				return;
			}
			if($_GET['log'] == $_COOKIE['login'] && $_GET['pas'] == $_COOKIE['pass'])
			{
				echo 1;
				return;
			} else {
				echo 0;
				return;
			}
		}
		if(!$_GET['log'])
		{
			echo $_COOKIE['login'];
			return;
		}
	}
	if(isset($_GET['ch']))
	{
		if(!$_GET['ch'])
		{
			echo $_COOKIE['ch'];
			return;
		}
	}
	if(isset($_GET['theme']))
	{
		if(!$_GET['theme'])
		{
			echo $_COOKIE['theme'];
			return;
		}else{
			setcookie('theme', $_GET['theme'], $cookieExpire, '/');
			echo $_GET['theme'];
			return;
		}
	}
	if(isset($_GET['en']))
	{
		if(!$_GET['en'])
		{
			echo $_COOKIE['en'];
			return;
		}else{
			setcookie('en', $_GET['en'], $cookieExpire, '/');
			echo $_GET['en'];
			return;
		}
	}