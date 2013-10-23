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

	<section>
		<h1>Qui suis-je ?</h1>

		<aside>
			<!-- <img src="res/keyboardhd.jpg" id="keyboard-developer-frame-picture" alt="Image de clavier"/> -->
		</aside>
		
		<article>
			<p>Je m'appelle Etienne Batise et je suis élève ingénieur à l'INSA de Rouen. Je suis développeur JAVA et je m'interèsse beaucoup au développement d'applications pour mobiles.</p>

			<p>Le développement avec le groupe PHI me permet d'expérimenter le développement d'un jeu vidéo du moteur de jeu à la commercialisation du produit. Ma position chez Quantic Télécom m'apprend le travail des fournisseurs d'accès internet, notamment dans les domaine relations humaines et des réseaux. </p>
		</article>
	</section>


	<section>
		<h1>Derniers articles</h1>
		
		<aside>
			<!-- <img src="res/vinyl2.jpg" alt="Image de vinyl"/> -->
		</aside>
		
		<article>
<?php
			foreach ($tickets as $ticket) {
?>
			 	<h1>
			 		<a href="ticket.php?id=<?php echo $ticket['id'] ?>"><?php echo $ticket['title']; ?></a>
			 		
			 	</h1>
			 		<em> <?php echo $ticket['description']; ?></em>
			 		<em> le <?php echo $ticket['date']; ?></em>
<?php 
	 	}
?>
		</article>
	</section>

	<footer>
		<?php include("footer.php") ?>
	</footer>

