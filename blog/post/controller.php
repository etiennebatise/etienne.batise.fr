<?php 
// Si un post est bien définie et qu'il n'est pas nulle
if (isset($_GET['post']) && ($_GET['post'] != NULL) /*&& value_exists('blog', 'id', $_GET['id'])*/) {
	// On récupère l'id du post
	$id = $_GET['post'];
	// On récupère le post
	$ticket = get_ticket($id);
	// On affiche le ticket
	include('blog/post/view.php');
}

// Sinon on affiche une erreur
else
	echo 'error';
?>
