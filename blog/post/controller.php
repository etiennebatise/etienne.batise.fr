<?php 

if (isset($_GET['post']) && ($_GET['post'] != NULL) /*&& value_exists('blog', 'id', $_GET['id'])*/) {
	$id = $_GET['post'];
	$ticket = get_ticket($id);
	include('blog/post/view.php');
}

else
	echo 'error';
?>
