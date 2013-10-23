<?php 

if (isset($_GET['id']) && ($_GET['id'] != NULL) /*&& value_exists('blog', 'id', $_GET['id'])*/) {
	$id = $_GET['id'];
	$ticket = get_ticket($id);
	include('view/blog/ticket.php');
}

else
	echo 'error';
?>
