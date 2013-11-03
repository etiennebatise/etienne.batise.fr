<?php 
	include('config.php');

function get_tickets_list($offset, $limit)
 {
 	global $db;
 	
 	$offset = (int) $offset;
 	$limit = (int) $limit;

 	$req = $db->prepare('SELECT id, title, description, date FROM blog ORDER BY id DESC');

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

 	function print_table($tickets) {
	 	foreach ($tickets as $ticket) {
	?>
		<div>
			<!-- <h1> -->
				<a href="ticket.php?id=<?php echo $ticket['id'] ?>"><?php echo $ticket['title']; ?></a>, <em>le <?php echo $ticket['date']; ?></em>
			<!-- </h1> -->
<!-- 		 		<em> <?php echo $ticket['description']; ?></em>
		 		<em> le <?php echo $ticket['date']; ?></em> -->
		 </div>
	<?php 
		}
	}

?>
