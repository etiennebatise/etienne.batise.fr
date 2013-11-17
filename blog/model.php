<?php 
	require_once('config.php');

// Fonction qui permet de récupérer un liste de billet dont l'id va de l'offset à la limite
function get_tickets_list($offset, $limit) {
 	// On récupère la variable db du fichier de config
 	global $db;
 	
 	// On s'assure que les paramètres sont bien des entiers
 	$offset = (int) $offset;
 	$limit = (int) $limit;

 	// On récupère une liste de tickets
 	$req = $db->prepare('SELECT id, title, description, date FROM blog ORDER BY id DESC');
 	$req->execute(array('li'=>$limit));
 	$tickets = $req->fetchAll();

 	// On retourne la liste obtenue
 	return $tickets;

 } 

// Fonction qui permet d'obtenir un ticket du blog selon leur id
function get_ticket($id) {
	// On récupère la variable du fichier de config
	global $db;

	// On s'assure que le paramètre est un entier
	$id = (int) $id;

	// On récupère le ticket correspondant à l'id dans la table
	$req = $db->prepare('SELECT id, title, description, content, date FROM blog WHERE id = :id');
	$req->execute(array('id'=>$id));
	$ticket = $req->fetchAll();

	// On récupère le ticket
	return current($ticket); 	
}

// Fonction qui affiche un liste de tickets sur leur type
function print_table($tickets, $type) {
	// On récupère la variable du fichier de config
	global $path_blog;
	
	// Pour tous les ticket
	foreach ($tickets as $ticket) {
	if($type=='blog'){
?>
		<h1>
			<a href=<?php echo "{$path_blog}{$ticket['id']}"?>><?php echo $ticket['title']; ?></a>
 		</h1>
 		<div>
 			<em> <?php echo $ticket['description']; ?></em>
 			<em> le <?php echo $ticket['date']; ?></em>
 		</div>
<?php 
	}
	else if ($type=='other') {
	?>
		<a href="index.php?id=blog&amp;post=<?php echo $ticket['id'] ?>"><?php echo $ticket['title']; ?></a>, <em>le <?php echo $ticket['date']; ?></em>
	<?php 
	}
}
}
?>
