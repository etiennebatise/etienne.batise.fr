<!DOCTYPE html>
<!-- Entête de page -->
<head>
	<meta charset="utf-8" />
	<link rel="stylesheet" type="text/css" href="style.css">
	<title>Etienne Batise</title>
</head>

<body>
	<header>
		<?php include("header.php") ?>
	</header>

<!-- QUI SUIS JE -->
	<section>
		<h1>Qui suis-je ?</h1>

		<aside>
			<!-- <img src="res/keyboardhd.jpg" id="keyboard-developer-frame-picture" alt="Image de clavier"/> -->
		</aside>
		
		<article>
			<p>Je m'appelle Etienne Batise et je suis élève ingénieur à l'INSA de Rouen. Je suis développeur, musicien et membre actifs de l'association Quantic Télécom.</p>

			<p>Le développement de PHI me permet de créé un jeu vidéo, de la conception du moteur de jeu à la commercialisation du produit. Mon rôle chez Quantic Télécom m'apprend le travail des fournisseurs d'accès internet. </p>
		</article>
	</section>


<!-- DEVELOPPEUR -->
	<section>
		<h1>Développeur</h1>
		<article>
			<p>Tout mes projets personnels en rapport avec le monde de l'informatique sont disponible <a href="#">ici</a>. </p>
			<ul>
				<li>Phi : a journey</li>
				<li>Quantic Télécom</li>
			</ul>
		</article>
	</section>


<!-- MUSICIEN  -->
	<section>
		<h1>Musicien</h1>
		<article>
			<p>Vous pourrez toutes mes créations et projets musicaux <a href="#">ici</a>. </p>
			<ul>
				<li>Matres</li>
				<li>Phi : a journey</li>
			</ul>
		</article>
	</section>

	<section>
		<h1>Derniers articles</h1>
		<?php
			print_table($tickets);
		?>
	</section>

	<footer>
		<?php include("footer.php") ?>
	</footer>

