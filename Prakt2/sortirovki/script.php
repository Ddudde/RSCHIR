<?php
$array = explode(", ", $_GET["my_sort"]);
sel_sort($array);
echo implode(", ", $array);
function sel_sort (&$array) {
	$size = count($array);
	for ($i = 0; $i < $size; $i++)
	{
		$min = $i;
		for ($j = $i + 1; $j < $size; $j++)
		{
			if ($array[$j] < $array[$min])
			{
				$min = $j;
			}
		}
		$temp = $array[$i];
		$array[$i] = $array[$min];
		$array[$min] = $temp;
	}
}
?>