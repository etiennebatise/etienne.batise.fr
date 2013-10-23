<?php 

$db = new PDO('mysql:host=localhost;dbname=etiennebatise', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));

function get_tickets_list($offset, $limit)
 {
 	global $db;
 	
 	$offset = (int) $offset;
 	$limit = (int) $limit;

 	// $req = $db->prepare('SELECT id, title, description, date FROM blog LIMIT :li');
 	$req = $db->prepare('SELECT id, title, description, date FROM blog ');

 	$req->execute(array('li'=>$limit));
 	$tickets = $req->fetchAll();

 	return $tickets;

 } 

 function get_ticket($id){
	global $db;
 	
 	$id = (int) $id;

 	$req = $db->prepare('SELECT id, title, description, content, date FROM blog WHERE id = :id');

 	$req->execute(array('id'=>$id));
 	$ticket = $req->fetchAll();

 	return current($ticket); 	
 }

 function value_exists($table, $key, $value){
 	global $db;

 	$key = (string)$key;
 	print_r($table);
 	print_r($key);
 	print_r($value);

 	$req = $db->prepare('SELECT $key FROM $table');
 	$req->execute();
 	$array = $req->fetchAll();
 	print_r($array);
 	$result = in_array($value, $array);
 	return $result;

 }

?>