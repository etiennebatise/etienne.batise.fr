<script src="jq/jquery.js"></script>

<?php 
	require_once('config.php');
	
	// Par défaut on affiche la page home.
	if(!isset($_GET['id'])) {
		// Définition du blog
		require_once('blog/model.php');
		require_once('home/controller.php');

		// Vue
		require_once('include/header.php');
		require_once('home/home.php');
		require_once('include/footer.php');
	}

	// Si le paramètre Get est blog. On affiche le blog
	else{
		if ($_GET['id'] == 'blog'){
			// Définition du blog
			require_once('blog/model.php');
			require_once('blog/controller.php');

			// Vue (note : header dans l'index.php)
			require_once('blog/header.php');
			
			// Si il y a un paramètre indiquant qu'il s'agit d'un post
			if (isset($_GET['post'])) {
				// on inclut le controller des post (qui s'occupe de l'affichage)
				require_once('blog/post/controller.php');
			}
			
			// Sinon on affiche l'accueil du blog
			else {
				require_once('blog/view.php');
			}
			require_once('include/footer.php');	
		}

		else if ($_GET['id'] == 'cv'){
			require_once('blog/header.php');
			require_once('cv/view.php');
			require_once('include/footer.php');
		}

		else if ($_GET['id'] == 'tip'){
			require_once('tip/model.php');
			require_once('tip/controller.php');
			require_once('tip/view.php');
		}

		else if ($_GET['id'] == 'game'){
			// require_once('blog/header.php');
			require_once('game/view.php');
			// require_once('include/footer.php');
		}

		else if ($_GET['id'] == 'admin'){
			require_once('blog/header.php');
			require_once('admin.php');
			require_once("include/footer.php");
		}
	}
 ?>
 