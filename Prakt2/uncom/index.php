<html lang="en">
	<head>
		<title>Uncom</title>
	</head>
	<body>
		<h1>Unix commands</h1>
		<?php
			$output = shell_exec('ls');
			echo "<pre>$output</pre>";
			$output = shell_exec('ps');
			echo "<pre>$output</pre>";
			$output = shell_exec('w');
			echo "<pre>$output</pre>";
			$output = shell_exec('id');
			echo "<pre>$output</pre>";
		?>
	</body>
</html>