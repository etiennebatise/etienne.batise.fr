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
			<span id='dev' class='icon'><img src="res/laptop.png" alt="icône de laptop"></span>

			<span id='note' class='icon'><img src="res/audio.png" alt="icône de notes"></span>
			
			<span id='pen' class='icon'><img src="res/pen.png" alt="icône de crayon"></span>
		</div>

		<script src="jq/icon.js"></script>

			<p id="tip"> </p>
		<script src="jq/tip.js"></script>
		<?php 
			include('nav.php');
		 ?>

	</header>