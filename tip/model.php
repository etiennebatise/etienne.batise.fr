<?php 
	// On charge le fichier de config
require_once('config.php');
	// require_once('/var/www/clients/client0/web66/web/etienne/config.php');

	// On récupère la liste de tips sans date ou dont la date est celle d'aujourd'hui 
function get_tip_list_to_date($tips, $date){
		// TODO
}

	// On récupère un tip
function get_rand_tip($tips){
	global $db;
		// $date;
		// $tips = get_tip_list_to_date($tiplist, $date);

		// Si on a aucune tip
	if($tips==NULL){
			// On récupère toute les tips
		$req = $db->prepare('SELECT id, content, date FROM tip');
		$req = $db->prepare(
			'SELECT id, content 
			FROM tip
			WHERE 
			(MINUTE(date) - MINUTE(NOW()) = 0 OR MINUTE(date) = 0) AND
			(HOUR(date) - HOUR(NOW()) = 0 OR HOUR(date) = 0) AND
			(DAY(date) - DAY(NOW()) = 0 OR DAY(date) = 0) AND
			(MONTH(date) - MONTH(NOW()) = 0 OR MONTH(date) = 0) AND
			(YEAR(date) - YEAR(NOW()) = 0 OR YEAR(date) = 0)
			') or die(print_r($bdd->errorInfo()));

		$req->execute();
		$tips = $req->fetchAll();
	}

		// On récupère la longueur de la liste obtenue
	$length = count($tips);

		// On détermine un nombre aléatoire inférieur au nombre de tips 
	$random = rand() % $length;

		// On récupère un tips aléatoire
	$tip = $tips[$random];

		// On récupère le contenue de la tip obtenue
	$sentence = $tip["content"];

		// on retourne ce contenue
		return $sentence;//$tips[$random];
	}
	?>