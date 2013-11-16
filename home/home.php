
<script src='jq/home.js'></script>
<div id='content'>
<!-- QUI SUIS JE -->
	<section>
		<h1>Qui suis-je ?</h1>

		<article>
			<p>Je m'appelle Etienne Batise et je suis élève ingénieur à l'INSA de Rouen. Je suis développeur, musicien et membre actif de l'association Quantic Télécom.</p>

			<p>Le développement de PHI me permet de créé un jeu vidéo, de la conception du moteur de jeu à la commercialisation du produit. Mon rôle chez Quantic Télécom m'apprend le travail des fournisseurs d'accès internet. </p>
		</article>
	</section>


<!-- DEVELOPPEUR -->
	<section>
		<h1>Développeur</h1>
		<article>
			<p>Tous mes projets personnels en rapport avec le monde de l'informatique sont disponible <a href="#">ici</a>. </p>
				Les principaux :
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
			<p>Vous pouvez trouver toutes mes créations et projets musicaux <a href="#">ici</a>. </p>
				Les principaux :
			<ul>
				<li>Matres</li>
				<li>Phi : a journey</li>
			</ul>
		</article>
	</section>

</div>
	<section>
		<h1>Derniers articles</h1>
		<?php
			print_table($tickets, 'other');
		?>
	</section>