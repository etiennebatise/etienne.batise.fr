<!DOCTYPE html>
<!-- Entête de page -->
<head>
	<meta charset="utf-8" />
	<meta name="keywords" content=" 'Etienne Batise','Batise','Mattress','Traduction automatique', 'Machine traduction'">
	<meta name="description" content="Etienne Batise : développeur, musicien et élève ingénieur à l'INSA de Rouen">
	<meta name="author" content='Etienne Batise'>

	<link rel="stylesheet" type="text/css" href="<?php echo $path_css ?>">
	<link rel="shortcut icon" type="image/x-icon" href="res/etienne-id.jpg">
	<title>Etienne Batise</title>
</head>

<body>
	<header>
		<script src='jq/jquery.js'></script>
		<div id="images">
			<span id='dev' class='icon'><img src="res/laptop.png" alt="icône de laptop"></span>
			
			<span id='note' class='icon'><img src="res/audio.png" alt="icône de notes"></span>
			
			<span id='pen' class='icon'><img src="res/pen.png" alt="icône de crayon"></span>
		</div>

		<script src="jq/jquery.js"></script>

		<script src="jq/icon.js"></script>

			<p id="tip"><span class='invisible'>Woop Woop</span></p>
		<script src="jq/tip.js"></script>
		
		<?php 
			require_once('nav.php');
		 ?>

	</header>