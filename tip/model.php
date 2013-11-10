<?php 
	require_once('../config.php');

	function get_tip_list_to_date($tips, $date){
		// TODO
	}

	function get_rand_tip($tips){
		global $db;
		// $date;
		// $tips = get_tip_list_to_date($tiplist, $date);
		
		if($tips==NULL){
			$req = $db->prepare('SELECT id, content, date FROM tip');
			$req->execute();
			$tips = $req->fetchAll();
		}

		// TODO déterminer la longueur du tableau.
		$random = rand() % 2;

		$tip = $tips[$random];

		$sentence = $tip["content"];

		return $sentence;//$tips[$random];
	}
 ?>