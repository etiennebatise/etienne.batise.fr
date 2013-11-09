<script src="jq/jquery.js"></script>

<?php 
	include('config.php');
	
	// Par défaut on affiche la page home.
	if(!isset($_GET['id'])) {
		// Définition du blog
		include('blog/model.php');
		include('home/controller.php');

		// Définition des tips
		include('tip/model.php');
		include('tip/controller.php');

		// Vue
		include('include/header.php');
		include('home/home.php');
		include('include/footer.php');
	}

	// Si le paramètre Get est blog. On affiche le blog
	else{
		if ($_GET['id'] == 'blog'){
			// Définition du blog
			include('blog/model.php');
			include('blog/controller.php');

			// Vue (note : header dans l'index.php)
			include('blog/header.php');
			
			// Si il y a un paramètre indiquant qu'il s'agit d'un post
			if (isset($_GET['post'])) {
				// on inclut le controller des post (qui s'occupe de l'affichage)
				include('blog/post/controller.php');
			}
			
			// Sinon on affiche l'accueil du blog
			else {
				include('blog/view.php');
			}
			include('include/footer.php');	
		}

		else if ($_GET['id'] == 'cv'){
			include('cv.php');
			include('include/footer.php');
		}
	}
 ?>
 