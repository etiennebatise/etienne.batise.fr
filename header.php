<?php 
	include('model/tip/index.php');

	include('controller/tip/index.php');
 ?>
<!DOCTYPE html>
<!-- Entête de page -->
<head>
	<meta charset="utf-8" />
	<link rel="stylesheet" type="text/css" href="style.css">
	<!-- <link rel="stylesheet" type="text/css" href="style.css" media="@media handheld and (min-device-width : 320px) and (max-device-width : 568px) and (orientation : portrait)"> -->
	<title>Etienne Batise</title>
</head>

<body>
	<header>

		<div id="images">
			<a href="developer.php"><img src="res/laptop.png" alt="icône de laptop"></a>

			<a href="musician.php"><img src="res/audio.png" alt="icône de notes"></a>
			
			<a href="student.php"><img src="res/pen.png" alt="icône de crayon"></a>
		</div>

		<p> <?php echo $tip; ?> </p>

<?php 
include('nav.php');
 ?>

	</header>