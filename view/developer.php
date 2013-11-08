
<?php include("header.php") ?>

	<section>
		<h1>Quantic Télécom</h1>

		<aside id='logoqt'>
		</aside>
		
		<article>
			<p>
			Quantic Télécom est une association fondée en 2011 par une dizaine d'élève ingénieur. L'association est créé suite à un besoin évident de fournir une connexion à l'Internet neutre et de qualité dans les résidences étudiantes. Après deux années, l'association est fière de ses 550 adhérents, ce qui fait d'elle le plus important fournisseur d'accès Internet associatif de France.
			</p>
		</article>
	</section>

	<section>
		<h1>PHI</h1>

		<article>
			<p>
			Phi est un projet que j'ai créé en 2011 avec plusieurs autres étudiants dans le but de réaliser un ou plusieurs jeux vidéos de A à Z. Notre premier jeu est toujours en phase de développement.
			</p>
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

</body>