<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<link rel="stylesheet" type="text/css" href="style.css">
	<title>Etienne Batise</title>
</head>

<body>
	<header>
		<?php include('nav.php') ?>
	</header>

	<section id="ticket">
		<h1><?php echo $ticket['title'] ?></h1>
		<article class="post"><?php echo $ticket['content']; ?></article>
	</section>

	<?php include('footer.php') ?>